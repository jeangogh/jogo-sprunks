import type { Character } from './types'
import { NOTES as N } from './notes'
import { kick, snare, hihat, shaker, elec, lead, vibes, pad, sub, vocal, darkVocal, darkVocal2, glitch, whistle, robot, sonicKick, powerHit } from './synths'
import { sprunkiSVG } from './svg-builders'

// Fase 1 — DESPERTAR (teal + amber)
const F1: Character[] = [
  { name:'Pulso', color:'#3BC4B1', type:'BEAT', description:'Kick', pattern:[1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0], synth:(t,x,d)=>kick(t,x,d), svg:()=>sprunkiSVG('#3BC4B1','#2A9D8F','antennas') },
  { name:'Eco', color:'#FB7185', type:'BEAT', description:'Snare', pattern:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1], synth:(t,x,d)=>snare(t,x,d), svg:()=>sprunkiSVG('#FB7185','#E11D48','horns') },
  { name:'Tick', color:'#B39DDB', type:'BEAT', description:'Hi-Hat', pattern:[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1], synth:(t,x,d)=>hihat(t,x,d), svg:()=>sprunkiSVG('#B39DDB','#9575CD','antenna1') },
  { name:'Onda', color:'#FFD166', type:'MELODIA', description:'Lead', pattern:[1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0], notes:[N.C4,0,0,N.Eb4,0,0,N.G4,0,0,N.F4,0,0,N.Eb4,0,0,0], synth:(t,x,d,f)=>lead(t,x,d,f,'sine',0.18), svg:()=>sprunkiSVG('#FFD166','#B45309','dragon') },
  { name:'Faísca', color:'#FF8FAB', type:'VOCAL', description:'Aguda', pattern:[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1], notes:[0,0,N.G5,0,0,0,0,0,0,0,N.Eb5,0,0,0,0,N.F5], synth:(t,x,d,f)=>vocal(t,x,d,f,'high'), svg:()=>sprunkiSVG('#FF8FAB','#F06292','bunny') },
]

// Fase 2 — PROFUNDEZAS (teal escuro + coral)
const F2: Character[] = [
  { name:'Maré', color:'#2A9D8F', type:'BEAT', description:'Shaker', pattern:[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], synth:(t,x,d)=>shaker(t,x,d), svg:()=>sprunkiSVG('#2A9D8F','#134E4A','horn1') },
  { name:'Brilho', color:'#FFD166', type:'EFEITO', description:'Vibrafone', pattern:[1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0], notes:[N.C5,0,0,0,0,0,0,0,N.G4,0,0,0,0,0,N.Eb5,0], synth:(t,x,d,f)=>vibes(t,x,d,f), svg:()=>sprunkiSVG('#FFD166','#B45309','crown') },
  { name:'Névoa', color:'#64B5F6', type:'EFEITO', description:'Pad', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>pad(t,x,d,[N.C3,N.Eb3,N.G3]), svg:()=>sprunkiSVG('#64B5F6','#42A5F5','plain') },
  { name:'Grave', color:'#3BC4B1', type:'VOCAL', description:'Grave', pattern:[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], notes:[N.C3,0,0,0,0,0,0,0,N.G2,0,0,0,0,0,0,0], synth:(t,x,d,f)=>vocal(t,x,d,f,'low'), svg:()=>sprunkiSVG('#3BC4B1','#2A9D8F','spikes') },
  { name:'Sol', color:'#FFD166', type:'MELODIA', description:'Brilho', pattern:[0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1], notes:[0,0,0,0,0,N.Bb4,0,0,0,0,0,0,0,N.G4,0,N.C5], synth:(t,x,d,f)=>lead(t,x,d,f,'triangle',0.14), svg:()=>sprunkiSVG('#FFD166','#B45309','sun') },
]

// Fase 3 — SOMBRAS (roxo + azul)
const F3: Character[] = [
  { name:'Mech', color:'#B39DDB', type:'BEAT', description:'Eletro', pattern:[1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0], synth:(t,x,d)=>elec(t,x,d), svg:()=>sprunkiSVG('#B39DDB','#9575CD','robot') },
  { name:'Céu', color:'#64B5F6', type:'EFEITO', description:'Atmosfera', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>pad(t,x,d,[N.Eb4,N.G4,N.Bb4]), svg:()=>sprunkiSVG('#64B5F6','#42A5F5','ears') },
  { name:'Sombra', color:'#2A9D8F', type:'MELODIA', description:'Sombrio', pattern:[0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0], notes:[0,0,N.Eb4,0,0,0,0,N.D4,0,0,N.C4,0,0,N.Bb3,0,0], synth:(t,x,d,f)=>lead(t,x,d,f,'sawtooth',0.07), svg:()=>sprunkiSVG('#2A9D8F','#134E4A','plain') },
  { name:'Raiz', color:'#134E4A', type:'EFEITO', description:'Sub', pattern:[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], notes:[N.C2,0,0,0,0,0,0,0,N.C2,0,0,0,0,0,0,0], synth:(t,x,d,f)=>sub(t,x,d,f), svg:()=>sprunkiSVG('#134E4A','#0A2E2A','plain') },
  { name:'Luna', color:'#F0FAF8', type:'VOCAL', description:'Melodica', pattern:[0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0], notes:[0,0,0,0,0,0,N.Eb5,0,0,0,0,0,N.C5,0,0,0], synth:(t,x,d,f)=>vocal(t,x,d,f,'mid'), svg:()=>sprunkiSVG('#F0FAF8','#B39DDB','cat') },
]

// Fase 4 — ABISMO (cores escuras + coral)
const F4: Character[] = [
  { name:'Vazio', color:'#134E4A', type:'VOCAL', description:'Sombra', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>darkVocal(t,x,d,N.C2), svg:()=>sprunkiSVG('#134E4A','#0A2E2A','horns') },
  { name:'Glitch', color:'#A3E635', type:'EFEITO', description:'Glitch', pattern:[0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1], synth:(t,x,d)=>glitch(t,x,d), svg:()=>sprunkiSVG('#A3E635','#65A30D','spikes') },
  { name:'Folha', color:'#2A9D8F', type:'MELODIA', description:'Floresta', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>pad(t,x,d,[N.C3,N.F3,N.Ab3]), svg:()=>sprunkiSVG('#2A9D8F','#134E4A','tree') },
  { name:'Brisa', color:'#3BC4B1', type:'MELODIA', description:'Assobio', pattern:[0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0], notes:[0,0,0,0,N.G5,0,0,0,0,0,0,0,0,0,N.F5,0], synth:(t,x,d,f)=>whistle(t,x,d,f), svg:()=>sprunkiSVG('#3BC4B1','#2A9D8F','plain') },
  { name:'Robo', color:'#B39DDB', type:'VOCAL', description:'Robo', pattern:[0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0], notes:[0,0,N.C4,0,0,0,0,0,N.Eb4,0,0,0,0,0,N.G3,0], synth:(t,x,d,f)=>robot(t,x,d,f), svg:()=>sprunkiSVG('#B39DDB','#9575CD','robot') },
]

// Fase 5 — AURORA (energia alta, cores vibrantes)
const F5: Character[] = [
  { name:'Turbo', color:'#3BC4B1', type:'BEAT', description:'Speed Kick', pattern:[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], synth:(t,x,d)=>sonicKick(t,x,d), svg:()=>sprunkiSVG('#3BC4B1','#2A9D8F','spikes') },
  { name:'Voo', color:'#FFD166', type:'MELODIA', description:'Fly Melody', pattern:[1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0], notes:[N.C5,0,0,N.Eb5,0,N.G5,0,0,N.F5,0,0,N.Eb5,0,N.C5,0,0], synth:(t,x,d,f)=>lead(t,x,d,f,'triangle',0.2), svg:()=>sprunkiSVG('#FFD166','#B45309','ears') },
  { name:'Impacto', color:'#FB7185', type:'BEAT', description:'Power Hit', pattern:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0], synth:(t,x,d)=>powerHit(t,x,d), svg:()=>sprunkiSVG('#FB7185','#E11D48','horns') },
  { name:'Motor', color:'#E11D48', type:'EFEITO', description:'Machine', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>pad(t,x,d,[N.C3,N.Eb3,N.F3]), svg:()=>sprunkiSVG('#E11D48','#BE123C','robot') },
  { name:'Espectro', color:'#134E4A', type:'VOCAL', description:'Chaos', pattern:[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0], notes:[0,0,0,0,0,0,N.C3,0,0,0,0,0,0,0,N.Eb3,0], synth:(t,x,d,f)=>darkVocal2(t,x,d,f), svg:()=>sprunkiSVG('#134E4A','#0A2E2A','horns') },
  { name:'Vento', color:'#A3E635', type:'MELODIA', description:'Wind', pattern:[0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1], notes:[0,0,0,0,0,N.Bb5,0,0,0,0,0,0,0,N.G5,0,N.C6], synth:(t,x,d,f)=>whistle(t,x,d,f), svg:()=>sprunkiSVG('#A3E635','#65A30D','dragon') },
]

// Fase 6 — CALMA (regulacao sensorial, sons suaves)
const F6: Character[] = [
  { name:'Sereno', color:'#3BC4B1', type:'BEAT', description:'Soft Kick', pattern:[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], synth:(t,x,d)=>kick(t,x,d), svg:()=>sprunkiSVG('#3BC4B1','#2A9D8F','antennas') },
  { name:'Nuvem', color:'#B39DDB', type:'EFEITO', description:'Pad Suave', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>pad(t,x,d,[N.C4,N.Eb4,N.G4]), svg:()=>sprunkiSVG('#B39DDB','#9575CD','ears') },
  { name:'Gota', color:'#64B5F6', type:'MELODIA', description:'Gotejo', pattern:[0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0], notes:[0,0,0,0,N.G5,0,0,0,0,0,0,0,0,0,N.Eb5,0], synth:(t,x,d,f)=>vibes(t,x,d,f), svg:()=>sprunkiSVG('#64B5F6','#42A5F5','plain') },
  { name:'Sussurro', color:'#F0FAF8', type:'VOCAL', description:'Whisper', pattern:[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], notes:[0,0,0,0,0,0,N.C5,0,0,0,0,0,0,0,0,0], synth:(t,x,d,f)=>vocal(t,x,d,f,'high'), svg:()=>sprunkiSVG('#F0FAF8','#B39DDB','cat') },
  { name:'Rio', color:'#2A9D8F', type:'MELODIA', description:'Flow', pattern:[1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0], notes:[N.C4,0,0,N.Eb4,0,0,0,0,N.G4,0,0,N.F4,0,0,0,0], synth:(t,x,d,f)=>lead(t,x,d,f,'sine',0.1), svg:()=>sprunkiSVG('#2A9D8F','#134E4A','antennas') },
]

// Fase 7 — EUREKA (descoberta, insight, amber)
const F7: Character[] = [
  { name:'Ideia', color:'#FFD166', type:'BEAT', description:'Spark', pattern:[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0], synth:(t,x,d)=>elec(t,x,d), svg:()=>sprunkiSVG('#FFD166','#B45309','sun') },
  { name:'Lampejo', color:'#FFD166', type:'MELODIA', description:'Insight', pattern:[0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0], notes:[0,0,N.G5,0,0,N.Bb5,0,0,0,0,N.C6,0,0,N.G5,0,0], synth:(t,x,d,f)=>lead(t,x,d,f,'triangle',0.2), svg:()=>sprunkiSVG('#FFD166','#B45309','crown') },
  { name:'Centelha', color:'#FB7185', type:'EFEITO', description:'Crackle', pattern:[0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0], synth:(t,x,d)=>glitch(t,x,d), svg:()=>sprunkiSVG('#FB7185','#E11D48','spikes') },
  { name:'Eureka', color:'#3BC4B1', type:'VOCAL', description:'Ahá', pattern:[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], notes:[0,0,0,0,0,0,0,0,N.C5,0,0,0,0,0,0,0], synth:(t,x,d,f)=>vocal(t,x,d,f,'mid'), svg:()=>sprunkiSVG('#3BC4B1','#2A9D8F','antennas') },
  { name:'Farol', color:'#A3E635', type:'MELODIA', description:'Guia', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>pad(t,x,d,[N.G4,N.Bb4,N.Eb5]), svg:()=>sprunkiSVG('#A3E635','#65A30D','dragon') },
]

// Fase 8 — HIPER (energia, coral, aceleracao)
const F8: Character[] = [
  { name:'Rush', color:'#FB7185', type:'BEAT', description:'Fast Kick', pattern:[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], synth:(t,x,d)=>sonicKick(t,x,d), svg:()=>sprunkiSVG('#FB7185','#E11D48','spikes') },
  { name:'Blast', color:'#E11D48', type:'BEAT', description:'Power', pattern:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0], synth:(t,x,d)=>powerHit(t,x,d), svg:()=>sprunkiSVG('#E11D48','#BE123C','horns') },
  { name:'Flare', color:'#FFD166', type:'MELODIA', description:'Brilho Rapido', pattern:[1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0], notes:[N.C5,0,0,N.G5,0,N.C6,0,0,N.G5,0,0,N.Eb5,0,N.C5,0,0], synth:(t,x,d,f)=>lead(t,x,d,f,'sawtooth',0.12), svg:()=>sprunkiSVG('#FFD166','#B45309','ears') },
  { name:'Caos', color:'#A3E635', type:'EFEITO', description:'Chaos', pattern:[0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1], synth:(t,x,d)=>glitch(t,x,d), svg:()=>sprunkiSVG('#A3E635','#65A30D','robot') },
  { name:'Grito', color:'#3BC4B1', type:'VOCAL', description:'Yell', pattern:[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0], notes:[0,0,N.G5,0,0,0,0,0,0,0,N.C6,0,0,0,0,0], synth:(t,x,d,f)=>vocal(t,x,d,f,'high'), svg:()=>sprunkiSVG('#3BC4B1','#2A9D8F','bunny') },
  { name:'Turbo2', color:'#FB7185', type:'BEAT', description:'Double', pattern:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0], synth:(t,x,d)=>kick(t,x,d), svg:()=>sprunkiSVG('#FB7185','#E11D48','horn1') },
]

// Fase 9 — DESCANSO (roxo, lento, reflexivo)
const F9: Character[] = [
  { name:'Sonho', color:'#B39DDB', type:'EFEITO', description:'Dream Pad', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>pad(t,x,d,[N.C3,N.G3,N.C4]), svg:()=>sprunkiSVG('#B39DDB','#9575CD','ears') },
  { name:'Estrela', color:'#FFD166', type:'MELODIA', description:'Lullaby', pattern:[0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0], notes:[0,0,0,0,N.G4,0,0,0,0,0,0,0,0,0,N.Eb4,0], synth:(t,x,d,f)=>vibes(t,x,d,f), svg:()=>sprunkiSVG('#FFD166','#B45309','sun') },
  { name:'Nicho', color:'#64B5F6', type:'VOCAL', description:'Murmur', pattern:[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], notes:[0,0,0,0,0,0,0,0,N.C4,0,0,0,0,0,0,0], synth:(t,x,d,f)=>vocal(t,x,d,f,'low'), svg:()=>sprunkiSVG('#64B5F6','#42A5F5','plain') },
  { name:'Manto', color:'#134E4A', type:'EFEITO', description:'Deep Sub', pattern:[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], notes:[N.C2,0,0,0,0,0,0,0,N.C2,0,0,0,0,0,0,0], synth:(t,x,d,f)=>sub(t,x,d,f), svg:()=>sprunkiSVG('#134E4A','#0A2E2A','plain') },
  { name:'Noite', color:'#2A9D8F', type:'BEAT', description:'Soft Beat', pattern:[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], synth:(t,x,d)=>shaker(t,x,d), svg:()=>sprunkiSVG('#2A9D8F','#134E4A','antennas') },
]

// Fase 10 — FLUXO (estado ideal, todos os elementos juntos)
const F10: Character[] = [
  { name:'Signal', color:'#3BC4B1', type:'BEAT', description:'Heartbeat', pattern:[1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0], synth:(t,x,d)=>kick(t,x,d), svg:()=>sprunkiSVG('#3BC4B1','#2A9D8F','antennas') },
  { name:'Antena', color:'#FFD166', type:'MELODIA', description:'Signal Melody', pattern:[1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0], notes:[N.C5,0,0,N.Eb5,0,0,N.G5,0,0,N.Bb5,0,0,N.C6,0,0,0], synth:(t,x,d,f)=>lead(t,x,d,f,'triangle',0.18), svg:()=>sprunkiSVG('#FFD166','#B45309','crown') },
  { name:'Core', color:'#FB7185', type:'BEAT', description:'Pulse', pattern:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1], synth:(t,x,d)=>snare(t,x,d), svg:()=>sprunkiSVG('#FB7185','#E11D48','horn1') },
  { name:'Alma', color:'#B39DDB', type:'EFEITO', description:'Soul Pad', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>pad(t,x,d,[N.C4,N.Eb4,N.G4,N.Bb4]), svg:()=>sprunkiSVG('#B39DDB','#9575CD','cat') },
  { name:'Voz', color:'#F0FAF8', type:'VOCAL', description:'True Voice', pattern:[0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0], notes:[0,0,0,0,0,0,N.Eb5,0,0,0,0,0,N.C5,0,0,0], synth:(t,x,d,f)=>vocal(t,x,d,f,'mid'), svg:()=>sprunkiSVG('#F0FAF8','#3BC4B1','bunny') },
  { name:'Cosmos', color:'#64B5F6', type:'MELODIA', description:'Space', pattern:[0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1], notes:[0,0,0,0,0,N.Bb5,0,0,0,0,0,0,0,N.G5,0,N.C6], synth:(t,x,d,f)=>whistle(t,x,d,f), svg:()=>sprunkiSVG('#64B5F6','#42A5F5','dragon') },
]

export const ALL_PHASES: Character[][] = [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10]
export function getPhaseCharacters(i: number): Character[] { return ALL_PHASES[Math.max(0, Math.min(i, ALL_PHASES.length - 1))] }
