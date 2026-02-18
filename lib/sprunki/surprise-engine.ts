import type { Character, ChildPreference, Phase } from './types'
import { ALL_PHASES } from './characters'
import { BASE_PHASES, generateSurprisePhase } from './phases'
import { generateSurpriseCharacters } from './character-generator'

export interface GamePhase {
  config: Phase
  characters: Character[]
  isSurprise: boolean
}

export function buildGameSequence(pref: ChildPreference | null, interval: number = 3): GamePhase[] {
  const seq: GamePhase[] = []
  let count = 0
  for (let i = 0; i < BASE_PHASES.length; i++) {
    seq.push({ config: BASE_PHASES[i], characters: ALL_PHASES[i], isSurprise: false })
    count++
    if (pref && count >= interval && i < BASE_PHASES.length - 1) {
      seq.push({ config: generateSurprisePhase(pref.favoriteTheme), characters: generateSurpriseCharacters(pref), isSurprise: true })
      count = 0
    }
  }
  return seq
}

export function buildDefaultSequence(): GamePhase[] {
  return BASE_PHASES.map((config, i) => ({ config, characters: ALL_PHASES[i], isSurprise: false }))
}

export function calculateTotalPhases(pref: ChildPreference | null, interval: number = 3): number {
  if (!pref) return BASE_PHASES.length
  return BASE_PHASES.length + Math.floor((BASE_PHASES.length - 1) / interval)
}
