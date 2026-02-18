import type { Character, ChildPreference, SoundType } from './types'
import { NOTES as N } from './notes'
import { lead, sonicKick, vocal, vibes, kick, glitch, pad } from './synths'
import { customSVG } from './svg-builders'

interface ThemeProfile {
  primary: string; secondary: string; features: string[]; soundType: SoundType
  patterns: number[][]; notePatterns: (number|0)[][]; names: string[]
}

const DB: Record<string, ThemeProfile> = {
  sonic: { primary:'#1A50BC', secondary:'#FFD700', features:['speed-spikes','star-eyes'], soundType:'BEAT',
    patterns:[[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]],
    notePatterns:[[N.C5,0,0,N.Eb5,0,N.G5,0,0,N.F5,0,0,N.Eb5,0,N.C5,0,0],[0,0,0,0,0,N.Bb5,0,0,0,0,0,0,0,N.G5,0,N.C6]],
    names:['Blitz','Dash','Zippy','Flash','Turbo'] },
  mario: { primary:'#E52521', secondary:'#049CD8', features:['hat-cap','mustache'], soundType:'MELODIA',
    patterns:[[1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0],[0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]],
    notePatterns:[[N.C5,0,0,N.G4,0,0,N.Eb5,0,0,N.C5,0,0,N.G4,0,0,0],[0,0,N.F5,0,0,0,0,N.Eb5,0,0,N.C5,0,0,0,0,0]],
    names:['Plumber','Jumpy','Funghi','Starboy','Pipey'] },
  pokemon: { primary:'#FFCB05', secondary:'#3D7DCA', features:['electric-cheeks','long-ears'], soundType:'EFEITO',
    patterns:[[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1]],
    notePatterns:[[N.G5,0,0,0,0,0,0,0,N.Eb5,0,0,0,0,0,0,0],[0,0,0,N.C5,0,0,0,0,0,0,0,N.F5,0,0,0,0]],
    names:['Sparky','Zappi','Bolti','Thundera','Pikki'] },
  'dragon-ball': { primary:'#FF6B00', secondary:'#FFD700', features:['saiyan-hair','star-eyes'], soundType:'BEAT',
    patterns:[[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0]],
    notePatterns:[[N.C4,0,0,0,N.G4,0,0,0,N.C5,0,0,0,N.Eb5,0,0,0],[0,0,0,0,0,0,N.F5,0,0,0,0,0,0,0,N.G5,0]],
    names:['Kaio','Sayan','Genko','Kamero','Powera'] },
  minecraft: { primary:'#55AA33', secondary:'#8B6914', features:['shell'], soundType:'EFEITO',
    patterns:[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],[1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0]],
    notePatterns:[[N.C4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
    names:['Blocky','Crafty','Diggy','Cubix','Minero'] },
  naruto: { primary:'#FF6600', secondary:'#000000', features:['headband','scarf'], soundType:'VOCAL',
    patterns:[[1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0]],
    notePatterns:[[N.C4,0,0,N.Eb4,0,0,0,0,N.G4,0,0,N.F4,0,0,0,0]],
    names:['Shinobi','Rasen','Kage','Jutsu','Hokki'] },
  'one-piece': { primary:'#DD0000', secondary:'#FFD700', features:['hat-cap','scarf'], soundType:'MELODIA',
    patterns:[[1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0]],
    notePatterns:[[N.G4,0,0,0,0,N.C5,0,0,N.Eb5,0,0,0,0,N.G5,0,0]],
    names:['Straw','Pirata','Luffy-K','Navi','Oceano'] },
  roblox: { primary:'#FF0000', secondary:'#FFFFFF', features:['hat-cap'], soundType:'BEAT',
    patterns:[[1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1]],
    notePatterns:[[N.C4,0,0,0,0,0,N.G4,0,N.C4,0,0,0,0,0,N.G4,0]],
    names:['Oof','Robby','Bloxy','Noob','Buildr'] },
  fortnite: { primary:'#7B00FF', secondary:'#00FFFF', features:['cape','star-eyes'], soundType:'BEAT',
    patterns:[[1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0]],
    notePatterns:[[N.Eb4,0,0,N.G4,0,N.Bb4,0,0,N.Eb4,0,0,N.G4,0,0,N.Bb4,0]],
    names:['Llama','Stormy','Dropper','Victory','Cranky'] },
  'hello-kitty': { primary:'#FF69B4', secondary:'#FFFFFF', features:['crown-jewel'], soundType:'MELODIA',
    patterns:[[1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1],[0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0]],
    notePatterns:[[N.C5,0,0,N.Eb5,0,0,N.G5,0,0,N.F5,0,0,N.Eb5,0,0,0]],
    names:['Kitty-S','Ribbon','Bow','Melody','Sweety'] },
}

const KW: Record<string, string[]> = {
  sonic:['sonic','tails','knuckles','hedgehog'], mario:['mario','luigi','peach','bowser','nintendo'],
  pokemon:['pokemon','pikachu','charizard'], 'dragon-ball':['dragon ball','goku','vegeta','kamehameha','saiyajin'],
  minecraft:['minecraft','creeper','steve'], naruto:['naruto','sasuke','kakashi','ninja','boruto'],
  'one-piece':['one piece','luffy','zoro','pirata'], roblox:['roblox','robux'],
  fortnite:['fortnite','battle royale'], 'hello-kitty':['hello kitty','kitty','sanrio'],
}

function detectTheme(desc: string): string {
  const t = desc.toLowerCase()
  for (const [theme, kws] of Object.entries(KW)) { if (kws.some(k => t.includes(k))) return theme }
  return 'generic'
}

export function generateSurpriseCharacters(pref: ChildPreference): Character[] {
  const theme = detectTheme(`${pref.favoriteTheme} ${pref.parentDescription}`)
  const p = DB[theme]
  if (!p) return generateGeneric(pref)

  const types: SoundType[] = ['BEAT','MELODIA','VOCAL','EFEITO','BEAT']
  const synthMap: Record<SoundType, (t:number,x:AudioContext,d:AudioNode,f?:number)=>void> = {
    'BEAT': (t,x,d) => sonicKick(t,x,d),
    'MELODIA': (t,x,d,f) => lead(t,x,d,f,'triangle',0.2),
    'VOCAL': (t,x,d,f) => vocal(t,x,d,f,'mid'),
    'EFEITO': (t,x,d,f) => vibes(t,x,d,f),
  }

  return Array.from({length:5}, (_,i) => ({
    name: p.names[i % p.names.length],
    color: i % 2 === 0 ? p.primary : p.secondary,
    type: types[i],
    description: `${theme} ${types[i]}`,
    pattern: p.patterns[i % p.patterns.length],
    notes: types[i] !== 'BEAT' ? p.notePatterns[i % p.notePatterns.length] : undefined,
    synth: synthMap[types[i]],
    svg: () => customSVG(p.primary, p.secondary, p.features),
    isSurprise: true, theme,
  }))
}

function generateGeneric(pref: ChildPreference): Character[] {
  const c1 = pref.favoriteColors[0] || '#9B5DE5', c2 = pref.favoriteColors[1] || '#FF6B9D'
  return [
    { name:`${pref.childName}-Beat`, color:c1, type:'BEAT', description:'Ritmo', pattern:[1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0], synth:(t,x,d)=>kick(t,x,d), svg:()=>customSVG(c1,c2,['crown-jewel']), isSurprise:true, theme:'custom' },
    { name:`${pref.childName}-Mel`, color:c2, type:'MELODIA', description:'Melodia', pattern:[1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0], notes:[N.C5,0,0,N.Eb5,0,0,N.G5,0,0,N.F5,0,0,N.Eb5,0,0,0], synth:(t,x,d,f)=>lead(t,x,d,f,'triangle',0.18), svg:()=>customSVG(c2,c1,['star-eyes']), isSurprise:true, theme:'custom' },
    { name:`${pref.childName}-Vox`, color:c1, type:'VOCAL', description:'Voz', pattern:[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1], notes:[0,0,N.G5,0,0,0,0,0,0,0,N.Eb5,0,0,0,0,N.F5], synth:(t,x,d,f)=>vocal(t,x,d,f,'high'), svg:()=>customSVG(c1,c2,['wings']), isSurprise:true, theme:'custom' },
    { name:`${pref.childName}-FX`, color:c2, type:'EFEITO', description:'Efeito', pattern:[0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1], synth:(t,x,d)=>glitch(t,x,d), svg:()=>customSVG(c2,c1,['electric-cheeks']), isSurprise:true, theme:'custom' },
    { name:`${pref.childName}-Pad`, color:c1, type:'EFEITO', description:'Ambiente', pattern:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], synth:(t,x,d)=>pad(t,x,d,[N.C3,N.Eb3,N.G3]), svg:()=>customSVG(c1,c2,['cape']), isSurprise:true, theme:'custom' },
  ]
}

export function getAvailableThemes(): string[] { return Object.keys(DB) }
export function isKnownTheme(desc: string): boolean { return detectTheme(desc) !== 'generic' }
