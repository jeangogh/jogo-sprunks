'use client'
import { useState, useCallback, useRef, useEffect } from 'react'
import type { ChildPreference } from '@/lib/sprunki/types'
import { initAudio, destroyAudio } from '@/lib/sprunki/audio-context'
import { startIntegratedSequencer, stopSequencer, resetSequencer } from '@/lib/sprunki/sequencer'
import { buildGameSequence, buildDefaultSequence, type GamePhase } from '@/lib/sprunki/surprise-engine'
import Background from './Background'
import HUD from './HUD'
import StepIndicator from './StepIndicator'
import Visualizer from './Visualizer'
import Stage from './Stage'
import PhaseNav from './PhaseNav'
import { TransitionOverlay, WinScreen } from './Overlay'
import ParentSetup from './ParentSetup'

const SURPRISE_INTERVAL = 3

export default function SprunksGame() {
  const [pref, setPref] = useState<ChildPreference | null>(null)
  const [setupDone, setSetupDone] = useState(false)
  const [phaseIdx, setPhaseIdx] = useState(0)
  const [activeSet, setActiveSet] = useState<Set<number>>(new Set())
  const [completed, setCompleted] = useState<boolean[]>([])
  const [curStep, setCurStep] = useState(0)
  const [showTrans, setShowTrans] = useState(false)
  const [showWin, setShowWin] = useState(false)
  const [transTarget, setTransTarget] = useState({ name: '', sub: '', surprise: false })

  const seqRef = useRef<GamePhase[]>([])
  const activeRef = useRef<Set<number>>(new Set())
  const phaseRef = useRef(0)
  const playingRef = useRef(false)

  const gameSeq = setupDone ? (pref ? buildGameSequence(pref, SURPRISE_INTERVAL) : buildDefaultSequence()) : []
  seqRef.current = gameSeq
  const cur = gameSeq[phaseIdx]
  const chars = cur?.characters || []

  useEffect(() => { if (gameSeq.length > 0 && completed.length !== gameSeq.length) setCompleted(new Array(gameSeq.length).fill(false)) }, [gameSeq.length])
  useEffect(() => { activeRef.current = activeSet; phaseRef.current = phaseIdx }, [activeSet, phaseIdx])
  useEffect(() => () => { stopSequencer(); destroyAudio() }, [])

  useEffect(() => {
    function hk(e: KeyboardEvent) {
      if (!setupDone) return
      if (e.code === 'ArrowLeft') { e.preventDefault(); nav(-1) }
      else if (e.code === 'ArrowRight') { e.preventDefault(); nav(1) }
      else if (e.key >= '1' && e.key <= '6') { const i = parseInt(e.key) - 1; if (i < chars.length) toggle(i) }
    }
    window.addEventListener('keydown', hk); return () => window.removeEventListener('keydown', hk)
  }, [setupDone, chars.length, phaseIdx, completed])

  function particles(color: string, el: Element | null) {
    if (!el) return; const r = el.getBoundingClientRect()
    for (let j = 0; j < 5; j++) { const p = document.createElement('div'); p.className = 'ptcl'; p.style.background = color; p.style.left = `${r.left + r.width/2 + (Math.random()-0.5)*40}px`; p.style.top = `${r.top + (Math.random()-0.5)*20}px`; const s = `${2+Math.random()*4}px`; p.style.width = s; p.style.height = s; document.body.appendChild(p); setTimeout(() => p.remove(), 1500) }
  }

  const toggle = useCallback((index: number) => {
    const { ctx, master } = initAudio()
    setActiveSet(prev => {
      const next = new Set(prev)
      if (next.has(index)) { next.delete(index); if (next.size === 0) { stopSequencer(); playingRef.current = false } }
      else {
        next.add(index)
        const els = document.querySelectorAll('.chr')
        if (els[index]) { const ch = seqRef.current[phaseRef.current]?.characters[index]; if (ch) particles(ch.color, els[index]) }
        if (!playingRef.current) { playingRef.current = true; startIntegratedSequencer(ctx, master, () => seqRef.current[phaseRef.current]?.characters || [], () => activeRef.current, s => setCurStep(s)) }
      }
      const pc = seqRef.current[phaseRef.current]?.characters || []
      if (next.size === pc.length && pc.length > 0) setTimeout(() => { if (activeRef.current.size === pc.length) phaseComplete() }, 3000)
      return next
    })
  }, [])

  function phaseComplete() {
    const pi = phaseRef.current
    setCompleted(p => { const n = [...p]; n[pi] = true; return n })
    if (pi >= seqRef.current.length - 1) { setShowWin(true); stopSequencer(); playingRef.current = false; return }
    const np = seqRef.current[pi + 1]
    if (np) {
      setTransTarget({ name: np.config.name, sub: np.config.subtitle, surprise: np.isSurprise }); setShowTrans(true)
      setTimeout(() => { stopSequencer(); playingRef.current = false; setActiveSet(new Set()); setPhaseIdx(pi + 1); setTimeout(() => setShowTrans(false), 500) }, 1500)
    }
  }

  function nav(dir: -1 | 1) {
    const t = phaseIdx + dir; if (t < 0 || t >= gameSeq.length) return
    stopSequencer(); playingRef.current = false; setActiveSet(new Set()); setPhaseIdx(t)
  }

  function restart() { stopSequencer(); resetSequencer(); playingRef.current = false; setPhaseIdx(0); setActiveSet(new Set()); setCompleted(new Array(gameSeq.length).fill(false)); setShowWin(false); setCurStep(0) }

  if (!setupDone) return <ParentSetup onComplete={p => { setPref(p); setSetupDone(true) }} onSkip={() => setSetupDone(true)} />
  if (!cur) return null

  return (
    <>
      <Background phase={cur.config} phaseIndex={phaseIdx} />
      <div id="game-ui">
        <HUD phaseNumber={phaseIdx + 1} activeCount={activeSet.size} totalCount={chars.length} phaseName={cur.config.name} isSurprise={cur.isSurprise} />
        <StepIndicator currentStep={curStep} />
        <Visualizer activeCount={activeSet.size} totalCount={chars.length} currentStep={curStep} phaseIndex={phaseIdx} />
        <Stage characters={chars} activeSet={activeSet} onToggle={toggle} />
        <PhaseNav currentPhase={phaseIdx} totalPhases={gameSeq.length} phaseName={cur.config.name} canGoRight={phaseIdx < gameSeq.length - 1} onNavigate={nav} />
      </div>
      <TransitionOverlay visible={showTrans} phaseName={transTarget.name} phaseSubtitle={transTarget.sub} isSurprise={transTarget.surprise} />
      <WinScreen visible={showWin} onRestart={restart} />
    </>
  )
}
