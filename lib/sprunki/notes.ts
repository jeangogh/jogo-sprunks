export const NOTES = {
  C2: 65.41, Eb2: 77.78, F2: 87.31, G2: 98, Bb2: 116.54,
  C3: 130.81, D3: 146.83, Eb3: 155.56, F3: 174.61, G3: 196, Ab3: 207.65, Bb3: 233.08,
  C4: 261.63, D4: 293.66, Eb4: 311.13, F4: 349.23, G4: 392, Ab4: 415.3, Bb4: 466.16,
  C5: 523.25, Eb5: 622.25, F5: 698.46, G5: 784, Bb5: 932.33, C6: 1046.5,
} as const

export const BPM = 90
export const STEP_DURATION = (60 / BPM) / 4
export const TOTAL_STEPS = 16
