'use client'
import type { Character as CT } from '@/lib/sprunki/types'

export default function Character({ character: c, index: i, isActive, onToggle }: { character: CT; index: number; isActive: boolean; onToggle: (i: number) => void }) {
  return (
    <div className={`chr ${isActive ? 'on' : 'off'}`} style={{ '--c': c.color } as React.CSSProperties}
      onClick={() => onToggle(i)} role="button" tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(i) } }}>
      <div className="chr-svg" style={{ position: 'relative' }}
        dangerouslySetInnerHTML={{ __html: c.svg() + '<div class="chr-note">\u266A</div>' }} />
      <div className="chr-name">{c.name}</div>
      <div className="chr-type">{c.isSurprise && '\u2605 '}{c.type}</div>
    </div>
  )
}
