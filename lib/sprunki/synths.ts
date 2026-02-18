import { STEP_DURATION, TOTAL_STEPS } from './notes'
const ST = STEP_DURATION

export function kick(t: number, x: AudioContext, d: AudioNode): void {
  const o = x.createOscillator(), g = x.createGain()
  o.type = 'sine'; o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(30, t + 0.12)
  g.gain.setValueAtTime(0.6, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.2)
  o.connect(g); g.connect(d); o.start(t); o.stop(t + 0.25)
}

export function snare(t: number, x: AudioContext, d: AudioNode): void {
  const b = x.sampleRate * 0.08, bf = x.createBuffer(1, b, x.sampleRate), dt = bf.getChannelData(0)
  for (let i = 0; i < b; i++) dt[i] = (Math.random() * 2 - 1) * 0.7
  const n = x.createBufferSource(); n.buffer = bf
  const g = x.createGain(), f = x.createBiquadFilter()
  f.type = 'highpass'; f.frequency.value = 1500
  g.gain.setValueAtTime(0.4, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.1)
  n.connect(f); f.connect(g); g.connect(d); n.start(t); n.stop(t + 0.12)
  const o = x.createOscillator(), g2 = x.createGain()
  o.type = 'triangle'; o.frequency.setValueAtTime(180, t); o.frequency.exponentialRampToValueAtTime(80, t + 0.05)
  g2.gain.setValueAtTime(0.3, t); g2.gain.exponentialRampToValueAtTime(0.001, t + 0.07)
  o.connect(g2); g2.connect(d); o.start(t); o.stop(t + 0.1)
}

export function hihat(t: number, x: AudioContext, d: AudioNode): void {
  const b = x.sampleRate * 0.03, bf = x.createBuffer(1, b, x.sampleRate), dt = bf.getChannelData(0)
  for (let i = 0; i < b; i++) dt[i] = Math.random() * 2 - 1
  const n = x.createBufferSource(); n.buffer = bf
  const g = x.createGain(), f = x.createBiquadFilter()
  f.type = 'highpass'; f.frequency.value = 7000
  g.gain.setValueAtTime(0.18, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.04)
  n.connect(f); f.connect(g); g.connect(d); n.start(t); n.stop(t + 0.05)
}

export function shaker(t: number, x: AudioContext, d: AudioNode): void {
  const b = x.sampleRate * 0.05, bf = x.createBuffer(1, b, x.sampleRate), dt = bf.getChannelData(0)
  for (let i = 0; i < b; i++) dt[i] = (Math.random() * 2 - 1) * 0.4
  const n = x.createBufferSource(); n.buffer = bf
  const g = x.createGain(), f = x.createBiquadFilter()
  f.type = 'bandpass'; f.frequency.value = 5000; f.Q.value = 2
  g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.05)
  n.connect(f); f.connect(g); g.connect(d); n.start(t); n.stop(t + 0.07)
}

export function elec(t: number, x: AudioContext, d: AudioNode): void {
  const o = x.createOscillator(), g = x.createGain()
  o.type = 'square'; o.frequency.setValueAtTime(800, t); o.frequency.exponentialRampToValueAtTime(100, t + 0.05)
  g.gain.setValueAtTime(0.15, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.07)
  o.connect(g); g.connect(d); o.start(t); o.stop(t + 0.09)
}

export function sonicKick(t: number, x: AudioContext, d: AudioNode): void {
  const o = x.createOscillator(), g = x.createGain()
  o.type = 'sine'; o.frequency.setValueAtTime(200, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.08)
  g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.15)
  o.connect(g); g.connect(d); o.start(t); o.stop(t + 0.2)
}

export function powerHit(t: number, x: AudioContext, d: AudioNode): void {
  const b = x.sampleRate * 0.12, bf = x.createBuffer(1, b, x.sampleRate), dt = bf.getChannelData(0)
  for (let i = 0; i < b; i++) dt[i] = Math.random() * 2 - 1
  const n = x.createBufferSource(); n.buffer = bf
  const g = x.createGain()
  g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.15)
  n.connect(g); g.connect(d); n.start(t); n.stop(t + 0.18)
  const o = x.createOscillator(), g2 = x.createGain()
  o.type = 'sine'; o.frequency.setValueAtTime(100, t); o.frequency.exponentialRampToValueAtTime(30, t + 0.1)
  g2.gain.setValueAtTime(0.6, t); g2.gain.exponentialRampToValueAtTime(0.001, t + 0.15)
  o.connect(g2); g2.connect(d); o.start(t); o.stop(t + 0.2)
}

export function lead(t: number, x: AudioContext, d: AudioNode, freq?: number, w: OscillatorType = 'sine', v: number = 0.18): void {
  if (!freq) return
  const o = x.createOscillator(), g = x.createGain(), fl = x.createBiquadFilter()
  o.type = w; o.frequency.value = freq; fl.type = 'lowpass'; fl.frequency.value = freq * 3
  g.gain.setValueAtTime(v, t); g.gain.setValueAtTime(v, t + ST * 0.7); g.gain.exponentialRampToValueAtTime(0.001, t + ST * 0.95)
  o.connect(fl); fl.connect(g); g.connect(d); o.start(t); o.stop(t + ST)
}

export function vibes(t: number, x: AudioContext, d: AudioNode, freq?: number): void {
  if (!freq) return
  const o = x.createOscillator(), g = x.createGain()
  o.type = 'sine'; o.frequency.value = freq
  const tr = x.createOscillator(), tg = x.createGain()
  tr.type = 'sine'; tr.frequency.value = 6; tg.gain.value = 0.04
  tr.connect(tg); tg.connect(g.gain)
  g.gain.setValueAtTime(0.18, t); g.gain.exponentialRampToValueAtTime(0.001, t + ST * 3)
  o.connect(g); g.connect(d); o.start(t); o.stop(t + ST * 3); tr.start(t); tr.stop(t + ST * 3)
}

export function whistle(t: number, x: AudioContext, d: AudioNode, freq?: number): void {
  if (!freq) return
  const o = x.createOscillator(), g = x.createGain()
  o.type = 'sine'; o.frequency.value = freq
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.09, t + 0.04)
  g.gain.setValueAtTime(0.09, t + ST * 1.5); g.gain.exponentialRampToValueAtTime(0.001, t + ST * 3)
  o.connect(g); g.connect(d); o.start(t); o.stop(t + ST * 3)
}

export function pad(t: number, x: AudioContext, d: AudioNode, fs: number[]): void {
  const dur = ST * TOTAL_STEPS
  fs.forEach(f => {
    const o = x.createOscillator(), g = x.createGain()
    o.type = 'sine'; o.frequency.value = f
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.05, t + 0.4)
    g.gain.setValueAtTime(0.05, t + dur - 0.4); g.gain.linearRampToValueAtTime(0, t + dur)
    o.connect(g); g.connect(d); o.start(t); o.stop(t + dur + 0.1)
    const o2 = x.createOscillator(), g2 = x.createGain()
    o2.type = 'sine'; o2.frequency.value = f * 1.003
    g2.gain.setValueAtTime(0, t); g2.gain.linearRampToValueAtTime(0.03, t + 0.4)
    g2.gain.setValueAtTime(0.03, t + dur - 0.4); g2.gain.linearRampToValueAtTime(0, t + dur)
    o2.connect(g2); g2.connect(d); o2.start(t); o2.stop(t + dur + 0.1)
  })
}

export function sub(t: number, x: AudioContext, d: AudioNode, freq?: number): void {
  if (!freq) return
  const o = x.createOscillator(), g = x.createGain()
  o.type = 'sine'; o.frequency.value = freq
  g.gain.setValueAtTime(0.2, t); g.gain.exponentialRampToValueAtTime(0.001, t + ST * 4)
  o.connect(g); g.connect(d); o.start(t); o.stop(t + ST * 4)
}

export function vocal(t: number, x: AudioContext, d: AudioNode, freq?: number, tp: 'high' | 'low' | 'mid' = 'mid'): void {
  if (!freq) return
  const o = x.createOscillator(), g = x.createGain(), fl = x.createBiquadFilter()
  if (tp === 'high') { o.type = 'triangle'; fl.type = 'bandpass'; fl.frequency.value = freq; fl.Q.value = 3; g.gain.setValueAtTime(0.13, t) }
  else if (tp === 'low') { o.type = 'sawtooth'; fl.type = 'lowpass'; fl.frequency.value = freq * 2; g.gain.setValueAtTime(0.1, t) }
  else { o.type = 'triangle'; fl.type = 'bandpass'; fl.frequency.value = freq; fl.Q.value = 2; g.gain.setValueAtTime(0.11, t) }
  o.frequency.value = freq
  const v = x.createOscillator(), vg = x.createGain()
  v.type = 'sine'; v.frequency.value = 5.5; vg.gain.value = freq * 0.015
  v.connect(vg); vg.connect(o.frequency)
  g.gain.exponentialRampToValueAtTime(0.001, t + ST * 2)
  o.connect(fl); fl.connect(g); g.connect(d); o.start(t); o.stop(t + ST * 2.5); v.start(t); v.stop(t + ST * 2.5)
}

export function darkVocal(t: number, x: AudioContext, d: AudioNode, freq: number): void {
  const dur = ST * TOTAL_STEPS
  const o1 = x.createOscillator(), o2 = x.createOscillator(), g = x.createGain()
  o1.type = 'sawtooth'; o1.frequency.value = freq; o2.type = 'sawtooth'; o2.frequency.value = freq * 1.01
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.06, t + 0.8)
  g.gain.setValueAtTime(0.06, t + dur - 0.8); g.gain.linearRampToValueAtTime(0, t + dur)
  const fl = x.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 200
  o1.connect(fl); o2.connect(fl); fl.connect(g); g.connect(d)
  o1.start(t); o1.stop(t + dur + 0.1); o2.start(t); o2.stop(t + dur + 0.1)
}

export function darkVocal2(t: number, x: AudioContext, d: AudioNode, freq?: number): void {
  if (!freq) return
  const o = x.createOscillator(), g = x.createGain()
  o.type = 'sawtooth'; o.frequency.value = freq
  const fl = x.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 300
  g.gain.setValueAtTime(0.08, t); g.gain.exponentialRampToValueAtTime(0.001, t + ST * 3)
  o.connect(fl); fl.connect(g); g.connect(d); o.start(t); o.stop(t + ST * 3)
}

export function glitch(t: number, x: AudioContext, d: AudioNode): void {
  const o = x.createOscillator(), g = x.createGain()
  o.type = 'square'
  o.frequency.setValueAtTime(200 + Math.random() * 2000, t)
  o.frequency.setValueAtTime(100 + Math.random() * 3000, t + 0.02)
  g.gain.setValueAtTime(0.07, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.05)
  o.connect(g); g.connect(d); o.start(t); o.stop(t + 0.07)
}

export function robot(t: number, x: AudioContext, d: AudioNode, freq?: number): void {
  if (!freq) return
  const o = x.createOscillator(), g = x.createGain()
  o.type = 'square'; o.frequency.value = freq
  const fl = x.createBiquadFilter(); fl.type = 'bandpass'; fl.frequency.value = freq; fl.Q.value = 5
  g.gain.setValueAtTime(0.08, t); g.gain.exponentialRampToValueAtTime(0.001, t + ST * 1.5)
  o.connect(fl); fl.connect(g); g.connect(d); o.start(t); o.stop(t + ST * 2)
}
