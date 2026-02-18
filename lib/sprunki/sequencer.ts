import type { Character } from './types'
import { STEP_DURATION, TOTAL_STEPS } from './notes'

let ctx: AudioContext | null = null
let master: GainNode | null = null
let currentStep = 0, nextT = 0, timer: ReturnType<typeof setTimeout> | null = null, playing = false

export function connectSequencer(c: AudioContext, m: GainNode) { ctx = c; master = m }
export function isSequencerPlaying() { return playing }
export function getCurrentStep() { return currentStep }

export function startSequencer() {
  if (playing || !ctx) return
  playing = true; currentStep = 0; nextT = ctx.currentTime + 0.05
  function sched() {
    if (!playing || !ctx) return
    while (nextT < ctx.currentTime + 0.15) { currentStep = (currentStep + 1) % TOTAL_STEPS; nextT += STEP_DURATION }
    timer = setTimeout(sched, 50)
  }
  sched()
}

export function stopSequencer() { playing = false; if (timer) { clearTimeout(timer); timer = null } }

export function startIntegratedSequencer(
  audioCtx: AudioContext, masterGain: GainNode,
  getChars: () => Character[], getActives: () => Set<number>,
  onStepUI?: (s: number) => void
) {
  if (playing) return
  ctx = audioCtx; master = masterGain; playing = true; currentStep = 0; nextT = audioCtx.currentTime + 0.05

  function sched() {
    if (!playing || !ctx || !master) return
    while (nextT < ctx.currentTime + 0.15) {
      const s = currentStep, t = nextT
      const chars = getChars(), actives = getActives()
      actives.forEach(ci => {
        const ch = chars[ci]
        if (!ch || !ch.pattern[s]) return
        ch.synth(t, ctx!, master!, ch.notes ? ch.notes[s] : undefined)
      })
      const delay = (t - ctx!.currentTime) * 1000
      setTimeout(() => { if (onStepUI) onStepUI(s) }, Math.max(0, delay))
      currentStep = (currentStep + 1) % TOTAL_STEPS; nextT += STEP_DURATION
    }
    timer = setTimeout(sched, 50)
  }
  sched()
}

export function resetSequencer() { stopSequencer(); currentStep = 0; nextT = 0 }
export function onStep(_cb: (s: number) => void) {}
