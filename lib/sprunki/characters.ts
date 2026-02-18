import type { Character } from './types'
import { NOTES as N } from './notes'
import { kick, snare, hihat, shaker, elec, lead, vibes, pad, sub, vocal, darkVocal, darkVocal2, glitch, whistle, robot, sonicKick, powerHit } from './synths'
import { sprunkiSVG } from './svg-builders'

const F1: Character[] = [
  { name:'Oren', color:'#FF8C42', type:'BEAT', description:'Kick', pattern:[1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0], synth:(t,x,d)=>kick(t,x,d), svg:()=>sprunkiSVG('#FF8C42','#E07830','antennas') },
  { name:'Raddy', color:'#E63946', type:'BEAT', description:'Snare', pattern:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1], synth:(t,x,d)=>snare(t,x,d), svg:()=>sprunkiSVG('#E63946','#C02030','horns') },
  { name:'Clukr', color:'#ADB5BD', type:'BEAT', description:'Hi-Hat', pattern:[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1], synth:(t,x,d)=>hihat(t,x,d), svg:()=>sprunkiSVG('#ADB5BD','#8A929A','antenna1') },
  { name:'Durple', color:'#9B5DE5', type:'MELODIA', description:'Lead', pattern:[1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0], notes:[N.C4,0,0,N.Eb4,0,0,N.G4,0,0,N.F4,0,0,N.Eb4,0,0,0], synth:(t,x,d,f)=>lead(t,x,d,f,'sine',0.18), svg:()=>sprunkiSVG('#9B5DE5','#7B3DC5','dragon') },
  { name:'Pinki', color:'#FF6B9D', type:'VOCAL', description:'Aguda', pattern:[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1], notes:[0,0,N.G5,0,0,0,0,0,0,0,N.Eb5,0,0,0,0,N.F5], synth:(t,x,d,f)=>vocal(t,x,d,f,'high'), svg:()=>sprunkiSVG('#FF6B9D','#DD4B7D','bunny') },
]

const F2: Character[] = [
  { name:'Vineria', color:'#2D6A4F', type:'BEAT', description:'Shaker', pattern:[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], synth:(t,x,d)=>shaker(t,x,d), svg:()=>sprunkiSVG('#2D6A4F','#1D5A3F','horn1') },
  { name:'Garnold', color:'#C9A84C', type:'EFEITO', description:'Vibrafone', pattern:[1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0], notes:[N.C5,0,0,0,0,0,0,0,N.G4,0,0,0,0,0,N.Eb5,0], synth:(t,x,d,f)=>vibes(t,x,d,f), svg:()=>sprunkiSVG('#C9A84C','#A9883C','crown') },
  { name:'Gray', color:'#8D99AE', type:'EFEITO', description:'Pad', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>pad(t,x,d,[N.C3,N.Eb3,N.G3]), svg:()=>sprunkiSVG('#8D99AE','#6D7988','plain') },
  { name:'Jevin', color:'#3A86FF', type:'VOCAL', description:'Grave', pattern:[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], notes:[N.C3,0,0,0,0,0,0,0,N.G2,0,0,0,0,0,0,0], synth:(t,x,d,f)=>vocal(t,x,d,f,'low'), svg:()=>sprunkiSVG('#3A86FF','#1A66DF','spikes') },
  { name:'Mr. Sun', color:'#F7C948', type:'MELODIA', description:'Brilho', pattern:[0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1], notes:[0,0,0,0,0,N.Bb4,0,0,0,0,0,0,0,N.G4,0,N.C5], synth:(t,x,d,f)=>lead(t,x,d,f,'triangle',0.14), svg:()=>sprunkiSVG('#F7C948','#D7A928','sun') },
]

const F3: Character[] = [
  { name:'Fun Bot', color:'#6C757D', type:'BEAT', description:'Eletro', pattern:[1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0], synth:(t,x,d)=>elec(t,x,d), svg:()=>sprunkiSVG('#6C757D','#4C555D','robot') },
  { name:'Sky', color:'#5BC0EB', type:'EFEITO', description:'Atmosfera', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>pad(t,x,d,[N.Eb4,N.G4,N.Bb4]), svg:()=>sprunkiSVG('#5BC0EB','#3BA0CB','ears') },
  { name:'Simon', color:'#B8C93E', type:'MELODIA', description:'Sombrio', pattern:[0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0], notes:[0,0,N.Eb4,0,0,0,0,N.D4,0,0,N.C4,0,0,N.Bb3,0,0], synth:(t,x,d,f)=>lead(t,x,d,f,'sawtooth',0.07), svg:()=>sprunkiSVG('#B8C93E','#98A91E','plain') },
  { name:'Brud', color:'#8B6914', type:'EFEITO', description:'Sub', pattern:[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], notes:[N.C2,0,0,0,0,0,0,0,N.C2,0,0,0,0,0,0,0], synth:(t,x,d,f)=>sub(t,x,d,f), svg:()=>sprunkiSVG('#8B6914','#6B4904','plain') },
  { name:'Wenda', color:'#F0EFF4', type:'VOCAL', description:'Melodica', pattern:[0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0], notes:[0,0,0,0,0,0,N.Eb5,0,0,0,0,0,N.C5,0,0,0], synth:(t,x,d,f)=>vocal(t,x,d,f,'mid'), svg:()=>sprunkiSVG('#F0EFF4','#D0CFD4','cat') },
]

const F4: Character[] = [
  { name:'Black', color:'#2B2D42', type:'VOCAL', description:'Sombra', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>darkVocal(t,x,d,N.C2), svg:()=>sprunkiSVG('#2B2D42','#1B1D32','horns') },
  { name:'OWAKCX', color:'#84E296', type:'EFEITO', description:'Glitch', pattern:[0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1], synth:(t,x,d)=>glitch(t,x,d), svg:()=>sprunkiSVG('#84E296','#64C276','spikes') },
  { name:'Mr. Tree', color:'#1B4332', type:'MELODIA', description:'Floresta', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>pad(t,x,d,[N.C3,N.F3,N.Ab3]), svg:()=>sprunkiSVG('#1B4332','#0B3322','tree') },
  { name:'Tunner', color:'#C8A882', type:'MELODIA', description:'Assobio', pattern:[0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0], notes:[0,0,0,0,N.G5,0,0,0,0,0,0,0,0,0,N.F5,0], synth:(t,x,d,f)=>whistle(t,x,d,f), svg:()=>sprunkiSVG('#C8A882','#A88862','plain') },
  { name:'Mr. Fun', color:'#495057', type:'VOCAL', description:'Robo', pattern:[0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0], notes:[0,0,N.C4,0,0,0,0,0,N.Eb4,0,0,0,0,0,N.G3,0], synth:(t,x,d,f)=>robot(t,x,d,f), svg:()=>sprunkiSVG('#495057','#293037','robot') },
]

const F5: Character[] = [
  { name:'Speedster', color:'#1A50BC', type:'BEAT', description:'Speed Kick', pattern:[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], synth:(t,x,d)=>sonicKick(t,x,d), svg:()=>sprunkiSVG('#1A50BC','#1040A0','spikes') },
  { name:'Flyer', color:'#F1B000', type:'MELODIA', description:'Fly Melody', pattern:[1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0], notes:[N.C5,0,0,N.Eb5,0,N.G5,0,0,N.F5,0,0,N.Eb5,0,N.C5,0,0], synth:(t,x,d,f)=>lead(t,x,d,f,'triangle',0.2), svg:()=>sprunkiSVG('#F1B000','#D19000','ears') },
  { name:'Puncher', color:'#FF1400', type:'BEAT', description:'Power Hit', pattern:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0], synth:(t,x,d)=>powerHit(t,x,d), svg:()=>sprunkiSVG('#FF1400','#DD0000','horns') },
  { name:'Machine', color:'#DD0000', type:'EFEITO', description:'Machine', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>pad(t,x,d,[N.C3,N.Eb3,N.F3]), svg:()=>sprunkiSVG('#DD0000','#BB0000','robot') },
  { name:'Phantom', color:'#1a1a1a', type:'VOCAL', description:'Chaos', pattern:[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0], notes:[0,0,0,0,0,0,N.C3,0,0,0,0,0,0,0,N.Eb3,0], synth:(t,x,d,f)=>darkVocal2(t,x,d,f), svg:()=>sprunkiSVG('#1a1a1a','#333333','horns') },
  { name:'Wind', color:'#00AA44', type:'MELODIA', description:'Wind', pattern:[0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1], notes:[0,0,0,0,0,N.Bb5,0,0,0,0,0,0,0,N.G5,0,N.C6], synth:(t,x,d,f)=>whistle(t,x,d,f), svg:()=>sprunkiSVG('#00AA44','#008833','dragon') },
]

export const ALL_PHASES: Character[][] = [F1, F2, F3, F4, F5]
export function getPhaseCharacters(i: number): Character[] { return ALL_PHASES[Math.max(0, Math.min(i, ALL_PHASES.length - 1))] }
