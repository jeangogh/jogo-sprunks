import type { Phase } from './types'

export const BASE_PHASES: Phase[] = [
  { name:'DESPERTAR', subtitle:'Green Hill Zone', skyGradient:['#2040A0','#4080D0','#80C0F0'], grassColor:'#40C040', checkerColor1:'#8B5E34', checkerColor2:'#A0703C', showStars:false },
  { name:'PROFUNDEZAS', subtitle:'Marble Zone', skyGradient:['#1A3080','#305090','#5070A0'], grassColor:'#308030', checkerColor1:'#705030', checkerColor2:'#886040', showStars:false },
  { name:'SOMBRAS', subtitle:'Labyrinth Zone', skyGradient:['#101840','#203060','#304060'], grassColor:'#206020', checkerColor1:'#504020', checkerColor2:'#685030', showStars:true },
  { name:'ABISMO', subtitle:'Scrap Brain Zone', skyGradient:['#080818','#101030','#181840'], grassColor:'#104010', checkerColor1:'#302010', checkerColor2:'#483020', showStars:true },
  { name:'ZONA FINAL', subtitle:'Fase base', skyGradient:['#1030A0','#3060D0','#60A0F0'], grassColor:'#50D050', checkerColor1:'#9B6E44', checkerColor2:'#B0804C', showStars:false },
]

const palettes: Record<string, Partial<Phase>> = {
  sonic: { name:'ZONA SURPRESA', subtitle:'Velocidade Suprema!', skyGradient:['#1030A0','#3060D0','#60A0F0'], grassColor:'#50D050', checkerColor1:'#9B6E44', checkerColor2:'#B0804C', showStars:false },
  mario: { name:'ZONA SURPRESA', subtitle:'Reino dos Cogumelos!', skyGradient:['#4488FF','#66AAFF','#88CCFF'], grassColor:'#44BB44', checkerColor1:'#CC6633', checkerColor2:'#DD7744', showStars:false },
  pokemon: { name:'ZONA SURPRESA', subtitle:'Batalha Selvagem!', skyGradient:['#228B22','#44AA44','#88DD88'], grassColor:'#66CC66', checkerColor1:'#8B7355', checkerColor2:'#A08060', showStars:false },
  'dragon-ball': { name:'ZONA SURPRESA', subtitle:'Poder Maximo!', skyGradient:['#FF6600','#FF8833','#FFAA66'], grassColor:'#CCAA44', checkerColor1:'#664422', checkerColor2:'#885533', showStars:true },
  minecraft: { name:'ZONA SURPRESA', subtitle:'Mundo Blocado!', skyGradient:['#4488CC','#66AAEE','#88CCFF'], grassColor:'#55AA33', checkerColor1:'#8B6914', checkerColor2:'#A07820', showStars:false },
  naruto: { name:'ZONA SURPRESA', subtitle:'Vila da Folha!', skyGradient:['#FF4500','#FF6633','#FF8866'], grassColor:'#338833', checkerColor1:'#8B7355', checkerColor2:'#A08868', showStars:false },
  'one-piece': { name:'ZONA SURPRESA', subtitle:'Grande Aventura!', skyGradient:['#0066CC','#3388DD','#66AAEE'], grassColor:'#DDCC88', checkerColor1:'#886644', checkerColor2:'#AA8855', showStars:false },
  roblox: { name:'ZONA SURPRESA', subtitle:'Universo Criativo!', skyGradient:['#2040A0','#4488DD','#88BBFF'], grassColor:'#55CC55', checkerColor1:'#777777', checkerColor2:'#999999', showStars:false },
  fortnite: { name:'ZONA SURPRESA', subtitle:'Zona do Drop!', skyGradient:['#4400AA','#6622CC','#8844EE'], grassColor:'#44AA44', checkerColor1:'#555555', checkerColor2:'#777777', showStars:true },
  'hello-kitty': { name:'ZONA SURPRESA', subtitle:'Mundo Fofinho!', skyGradient:['#FF69B4','#FF88CC','#FFAADD'], grassColor:'#88DD88', checkerColor1:'#FFAACC', checkerColor2:'#FFCCDD', showStars:false },
}

export function generateSurprisePhase(theme: string): Phase {
  const b = palettes[theme.toLowerCase()] || { name:'ZONA SURPRESA', subtitle:'Fase Especial!' }
  return {
    name: b.name || 'ZONA SURPRESA', subtitle: b.subtitle || 'Fase Especial!',
    skyGradient: (b.skyGradient || ['#6622CC','#8844EE','#AA66FF']) as [string,string,string],
    grassColor: b.grassColor || '#66CC66', checkerColor1: b.checkerColor1 || '#885533', checkerColor2: b.checkerColor2 || '#AA6644',
    showStars: b.showStars ?? true, isSurprise: true, surpriseTheme: theme,
  }
}
