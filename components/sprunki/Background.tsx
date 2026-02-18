'use client'
import { useEffect, useRef } from 'react'
import type { Phase } from '@/lib/sprunki/types'

export default function Background({ phase, phaseIndex }: { phase: Phase; phaseIndex: number }) {
  const mtRef = useRef<HTMLDivElement>(null)
  const hlRef = useRef<HTMLDivElement>(null)
  const skyRef = useRef<HTMLDivElement>(null)
  const built = useRef(false)

  useEffect(() => {
    if (built.current) return; built.current = true
    if (mtRef.current) for (let i = 0; i < 12; i++) { const m = document.createElement('div'); m.className = 'mountain'; m.style.left = `${i*160}px`; m.style.borderBottomWidth = `${60+Math.random()*80}px`; m.style.borderLeftWidth = `${50+Math.random()*60}px`; m.style.borderRightWidth = `${50+Math.random()*60}px`; mtRef.current.appendChild(m) }
    if (hlRef.current) for (let i = 0; i < 16; i++) { const h = document.createElement('div'); h.className = 'hill'; h.style.left = `${i*120}px`; h.style.width = `${80+Math.random()*80}px`; h.style.height = `${30+Math.random()*40}px`; hlRef.current.appendChild(h) }
    if (skyRef.current) for (let i = 0; i < 40; i++) { const s = document.createElement('div'); s.className = 'star'; s.style.left = `${Math.random()*100}%`; s.style.top = `${Math.random()*60}%`; const sz = `${1+Math.random()*2}px`; s.style.width = sz; s.style.height = sz; skyRef.current.appendChild(s) }
  }, [])

  const filter = phaseIndex >= 3 ? 'saturate(0.4) contrast(1.2) brightness(0.8)' : phaseIndex >= 2 ? 'saturate(0.7) contrast(1.1)' : 'none'

  return (
    <div id="scene" style={{ filter }}>
      <div id="sky" ref={skyRef} style={{ background: `linear-gradient(180deg,${phase.skyGradient[0]} 0%,${phase.skyGradient[1]} 40%,${phase.skyGradient[2]} 100%)` }} />
      <div id="mountains" ref={mtRef} />
      <div id="hills" ref={hlRef} />
      <div id="ground">
        <div id="grass-line" style={{ background: phase.grassColor }} />
        <div id="checkerboard" style={{ backgroundImage: `repeating-conic-gradient(${phase.checkerColor1} 0% 25%, ${phase.checkerColor2} 0% 50%)` }} />
      </div>
    </div>
  )
}
