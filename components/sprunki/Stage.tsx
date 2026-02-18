'use client'
import type { Character as CT } from '@/lib/sprunki/types'
import Character from './Character'

export default function Stage({ characters, activeSet, onToggle }: { characters: CT[]; activeSet: Set<number>; onToggle: (i: number) => void }) {
  return (
    <div id="stage">
      {characters.map((c, i) => <Character key={`${c.name}-${i}`} character={c} index={i} isActive={activeSet.has(i)} onToggle={onToggle} />)}
    </div>
  )
}
