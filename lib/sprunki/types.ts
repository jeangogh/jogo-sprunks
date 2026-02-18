export type SoundType = 'BEAT' | 'MELODIA' | 'VOCAL' | 'EFEITO'
export type SynthFunction = (time: number, ctx: AudioContext, dest: AudioNode, freq?: number) => void
export type SVGGenerator = () => string

export interface Character {
  name: string
  color: string
  type: SoundType
  description: string
  pattern: number[]
  notes?: number[]
  synth: SynthFunction
  svg: SVGGenerator
  isSurprise?: boolean
  theme?: string
}

export interface Phase {
  name: string
  subtitle: string
  skyGradient: [string, string, string]
  grassColor: string
  checkerColor1: string
  checkerColor2: string
  showStars: boolean
  isSurprise?: boolean
  surpriseTheme?: string
}

export interface ChildPreference {
  childName: string
  favoriteTheme: string
  favoriteColors: string[]
  parentDescription: string
}
