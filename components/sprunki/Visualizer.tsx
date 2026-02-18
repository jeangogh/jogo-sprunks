'use client'
import { useEffect, useRef } from 'react'

export default function Visualizer({ activeCount, totalCount, currentStep, phaseIndex }: { activeCount: number; totalCount: number; currentStep: number; phaseIndex: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const bars = ref.current.children
    if (activeCount === 0) {
      for (let i = 0; i < bars.length; i++) { const b = bars[i] as HTMLDivElement; b.style.height = '2px'; b.style.background = 'rgba(201,168,76,0.1)' }
      return
    }
    const int = activeCount / totalCount, beat = currentStep % 4 === 0
    for (let i = 0; i < bars.length; i++) {
      const b = bars[i] as HTMLDivElement
      b.style.height = `${2 + Math.random() * 25 * int * (beat ? 1.5 : 0.6)}px`
      b.style.background = `hsl(${(40 + i * 3) % 60},70%,${50 - phaseIndex * 5}%)`
    }
  }, [currentStep, activeCount, totalCount, phaseIndex])

  return <div id="viz" ref={ref}>{Array.from({ length: 28 }, (_, i) => <div key={i} className="vbar" />)}</div>
}
