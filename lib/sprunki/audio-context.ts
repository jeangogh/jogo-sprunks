let audioCtx: AudioContext | null = null
let masterGain: GainNode | null = null

export function initAudio(): { ctx: AudioContext; master: GainNode } {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()
    masterGain = audioCtx.createGain()
    masterGain.gain.value = 0.8
    masterGain.connect(audioCtx.destination)
  }
  if (audioCtx.state === 'suspended') audioCtx.resume()
  return { ctx: audioCtx, master: masterGain! }
}

export function getAudioContext(): AudioContext | null { return audioCtx }
export function getMasterGain(): GainNode | null { return masterGain }

export function setMasterVolume(v: number): void {
  if (masterGain) masterGain.gain.value = Math.max(0, Math.min(1, v))
}

export function destroyAudio(): void {
  if (audioCtx) { audioCtx.close(); audioCtx = null; masterGain = null }
}
