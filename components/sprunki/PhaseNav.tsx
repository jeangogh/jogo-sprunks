'use client'

export default function PhaseNav({ currentPhase, totalPhases, phaseName, canGoRight, onNavigate }: { currentPhase: number; totalPhases: number; phaseName: string; canGoRight: boolean; onNavigate: (d: -1 | 1) => void }) {
  return (
    <div id="phase-nav">
      <button className={`phase-arrow ${currentPhase === 0 ? 'disabled' : ''}`} onClick={() => onNavigate(-1)} disabled={currentPhase === 0}>{'\u25C0'}</button>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 120 }}>
        <span id="phase-label">{phaseName}</span>
        <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 11, color: 'rgba(240,250,248,.4)', marginTop: 2 }}>{currentPhase + 1} / {totalPhases}</span>
      </div>
      <button className={`phase-arrow ${!canGoRight ? 'disabled' : ''}`} onClick={() => onNavigate(1)} disabled={!canGoRight}>{'\u25B6'}</button>
    </div>
  )
}
