'use client'

export default function HUD({ phaseNumber, activeCount, totalCount, phaseName, isSurprise }: { phaseNumber: number; activeCount: number; totalCount: number; phaseName: string; isSurprise: boolean }) {
  const pct = totalCount > 0 ? (activeCount / totalCount) * 100 : 0
  return (
    <>
      <div id="hud">
        <span id="hud-phase">{isSurprise ? '\u2605 SURPRESA' : `FASE ${phaseNumber}`}</span>
        <span id="hud-title">{phaseName}</span>
        <span id="hud-score">{activeCount}/{totalCount}</span>
      </div>
      <div id="prog-wrap"><div id="prog-bar" style={{ width: `${pct}%` }} /></div>
      <div id="prog-text">{activeCount === totalCount && totalCount > 0 ? 'COMPLETO!' : 'Ative todos para completar'}</div>
    </>
  )
}
