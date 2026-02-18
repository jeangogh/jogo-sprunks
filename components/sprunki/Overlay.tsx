'use client'

export function TransitionOverlay({ visible, phaseName, phaseSubtitle, isSurprise }: { visible: boolean; phaseName: string; phaseSubtitle: string; isSurprise: boolean }) {
  return (
    <div id="overlay" className={visible ? 'show' : ''}>
      <div id="overlay-text">{isSurprise && '\u2605 '}{phaseName}{isSurprise && ' \u2605'}</div>
      <div id="overlay-sub">{phaseSubtitle}</div>
    </div>
  )
}

export function WinScreen({ visible, onRestart }: { visible: boolean; onRestart: () => void }) {
  return (
    <div id="win" className={visible ? 'show' : ''}>
      <h1>PARABENS!</h1>
      <p>Voce completou todas as fases!</p>
      <button onClick={onRestart}>JOGAR DE NOVO</button>
    </div>
  )
}
