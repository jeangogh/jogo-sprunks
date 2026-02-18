'use client'

export default function PhaseNav({ currentPhase, phaseName, canGoRight, onNavigate }: { currentPhase: number; totalPhases: number; phaseName: string; canGoRight: boolean; onNavigate: (d: -1 | 1) => void }) {
  return (
    <div id="phase-nav">
      <button className={`phase-arrow ${currentPhase === 0 ? 'disabled' : ''}`} onClick={() => onNavigate(-1)} disabled={currentPhase === 0}>{'\u25C0'}</button>
      <span id="phase-label">{phaseName}</span>
      <button className={`phase-arrow ${!canGoRight ? 'disabled' : ''}`} onClick={() => onNavigate(1)} disabled={!canGoRight}>{'\u25B6'}</button>
    </div>
  )
}
