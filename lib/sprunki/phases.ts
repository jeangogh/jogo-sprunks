import type { Phase } from './types'

export const BASE_PHASES: Phase[] = [
  { name:'DESPERTAR', subtitle:'O comeco da jornada', skyGradient:['#134E4A','#1a6b63','#3BC4B1'], grassColor:'#3BC4B1', checkerColor1:'#1a3a3a', checkerColor2:'#245050', showStars:false },
  { name:'PROFUNDEZAS', subtitle:'Mergulho interior', skyGradient:['#0F2F3A','#134E4A','#2A9D8F'], grassColor:'#2A9D8F', checkerColor1:'#153030', checkerColor2:'#1d4040', showStars:false },
  { name:'SOMBRAS', subtitle:'O que se esconde', skyGradient:['#0A1A20','#0F2F3A','#1a4a44'], grassColor:'#1a6b63', checkerColor1:'#0d2020', checkerColor2:'#153030', showStars:true },
  { name:'ABISMO', subtitle:'A descida final', skyGradient:['#060E12','#0A1A20','#0F2F3A'], grassColor:'#134E4A', checkerColor1:'#081515', checkerColor2:'#0d2020', showStars:true },
  { name:'AURORA', subtitle:'Luz depois da escuridao', skyGradient:['#134E4A','#2A9D8F','#3BC4B1'], grassColor:'#3BC4B1', checkerColor1:'#1a5050', checkerColor2:'#246060', showStars:false },
  { name:'CALMA', subtitle:'Respira fundo', skyGradient:['#134E4A','#2A9D8F','#B39DDB'], grassColor:'#2A9D8F', checkerColor1:'#1a3040', checkerColor2:'#243a50', showStars:true },
  { name:'EUREKA', subtitle:'Quando a ideia acende', skyGradient:['#134E4A','#FFD166','#FFE9A0'], grassColor:'#FFD166', checkerColor1:'#3a3020', checkerColor2:'#4a4030', showStars:false },
  { name:'HIPER', subtitle:'Energia no maximo', skyGradient:['#134E4A','#FB7185','#FFD166'], grassColor:'#FB7185', checkerColor1:'#3a1a2a', checkerColor2:'#4a2a3a', showStars:false },
  { name:'DESCANSO', subtitle:'A mente descansa', skyGradient:['#0A1020','#1a1a3a','#B39DDB'], grassColor:'#B39DDB', checkerColor1:'#1a1a2a', checkerColor2:'#24243a', showStars:true },
  { name:'FLUXO', subtitle:'Tudo conectado', skyGradient:['#134E4A','#3BC4B1','#FFD166'], grassColor:'#3BC4B1', checkerColor1:'#1a4040', checkerColor2:'#245050', showStars:false },
]

const palettes: Record<string, Partial<Phase>> = {
  sonic: { name:'ZONA SURPRESA', subtitle:'Velocidade Suprema!', skyGradient:['#134E4A','#2A9D8F','#64B5F6'], grassColor:'#3BC4B1', checkerColor1:'#1a4040', checkerColor2:'#245050', showStars:false },
  mario: { name:'ZONA SURPRESA', subtitle:'Reino dos Cogumelos!', skyGradient:['#134E4A','#3BC4B1','#A3E635'], grassColor:'#3BC4B1', checkerColor1:'#1a4a3a', checkerColor2:'#245a4a', showStars:false },
  pokemon: { name:'ZONA SURPRESA', subtitle:'Batalha Selvagem!', skyGradient:['#134E4A','#2A9D8F','#FFD166'], grassColor:'#3BC4B1', checkerColor1:'#1a4040', checkerColor2:'#245050', showStars:false },
  'dragon-ball': { name:'ZONA SURPRESA', subtitle:'Poder Maximo!', skyGradient:['#134E4A','#FFD166','#FB7185'], grassColor:'#FFD166', checkerColor1:'#3a2a1a', checkerColor2:'#4a3a2a', showStars:true },
  minecraft: { name:'ZONA SURPRESA', subtitle:'Mundo Blocado!', skyGradient:['#134E4A','#2A9D8F','#A3E635'], grassColor:'#A3E635', checkerColor1:'#1a3a2a', checkerColor2:'#244a3a', showStars:false },
  naruto: { name:'ZONA SURPRESA', subtitle:'Vila da Folha!', skyGradient:['#134E4A','#FB7185','#FFD166'], grassColor:'#2A9D8F', checkerColor1:'#2a1a1a', checkerColor2:'#3a2a2a', showStars:false },
  'one-piece': { name:'ZONA SURPRESA', subtitle:'Grande Aventura!', skyGradient:['#134E4A','#64B5F6','#3BC4B1'], grassColor:'#FFD166', checkerColor1:'#1a2a3a', checkerColor2:'#243a4a', showStars:false },
  roblox: { name:'ZONA SURPRESA', subtitle:'Universo Criativo!', skyGradient:['#134E4A','#3BC4B1','#64B5F6'], grassColor:'#3BC4B1', checkerColor1:'#1a3030', checkerColor2:'#244040', showStars:false },
  fortnite: { name:'ZONA SURPRESA', subtitle:'Zona do Drop!', skyGradient:['#134E4A','#B39DDB','#64B5F6'], grassColor:'#3BC4B1', checkerColor1:'#1a1a2a', checkerColor2:'#242a3a', showStars:true },
  'hello-kitty': { name:'ZONA SURPRESA', subtitle:'Mundo Fofinho!', skyGradient:['#134E4A','#FF8FAB','#FFD166'], grassColor:'#FF8FAB', checkerColor1:'#2a1a2a', checkerColor2:'#3a2a3a', showStars:false },
}

export function generateSurprisePhase(theme: string): Phase {
  const b = palettes[theme.toLowerCase()] || { name:'ZONA SURPRESA', subtitle:'Fase Especial!' }
  return {
    name: b.name || 'ZONA SURPRESA', subtitle: b.subtitle || 'Fase Especial!',
    skyGradient: (b.skyGradient || ['#134E4A','#B39DDB','#3BC4B1']) as [string,string,string],
    grassColor: b.grassColor || '#3BC4B1', checkerColor1: b.checkerColor1 || '#1a3030', checkerColor2: b.checkerColor2 || '#244040',
    showStars: b.showStars ?? true, isSurprise: true, surpriseTheme: theme,
  }
}
