'use client'
import { useState } from 'react'
import type { ChildPreference } from '@/lib/sprunki/types'
import { getAvailableThemes } from '@/lib/sprunki/character-generator'

const THEMES = getAvailableThemes()
const LABELS: Record<string,string> = { sonic:'Sonic', mario:'Mario', pokemon:'Pokemon', 'dragon-ball':'Dragon Ball', minecraft:'Minecraft', naruto:'Naruto', 'one-piece':'One Piece', roblox:'Roblox', fortnite:'Fortnite', 'hello-kitty':'Hello Kitty' }
const COLORS = [{ v:'#FF0000',l:'Vermelho' },{ v:'#0066FF',l:'Azul' },{ v:'#00CC44',l:'Verde' },{ v:'#FFD700',l:'Amarelo' },{ v:'#FF69B4',l:'Rosa' },{ v:'#9B5DE5',l:'Roxo' },{ v:'#FF6600',l:'Laranja' },{ v:'#00CCCC',l:'Turquesa' }]

export default function ParentSetup({ onComplete, onSkip }: { onComplete: (p: ChildPreference) => void; onSkip: () => void }) {
  const [name, setName] = useState('')
  const [theme, setTheme] = useState('')
  const [colors, setColors] = useState<string[]>([])
  const [desc, setDesc] = useState('')
  const [step, setStep] = useState(0)

  function toggleColor(c: string) { setColors(p => p.includes(c) ? p.filter(x => x !== c) : p.length < 2 ? [...p, c] : [p[1], c]) }

  return (
    <div className="parent-setup">
      <div className="setup-card">
        {step === 0 && <>
          <h2 className="setup-title">Personalize o Jogo!</h2>
          <p className="setup-desc">Conte o que seu filho(a) mais gosta. O jogo vai criar fases surpresa especiais!</p>
          <label className="setup-label">Nome da crianca</label>
          <input type="text" className="setup-input" placeholder="Ex: Lucas" value={name} onChange={e => setName(e.target.value)} maxLength={20} />
          <div className="setup-actions">
            <button className="setup-btn secondary" onClick={onSkip}>Pular</button>
            <button className="setup-btn primary" onClick={() => setStep(1)}>Proximo</button>
          </div>
        </>}
        {step === 1 && <>
          <h2 className="setup-title">Personagem Favorito</h2>
          <p className="setup-desc">Qual universo {name || 'a crianca'} mais curte?</p>
          <div className="theme-grid">
            {THEMES.map(t => <button key={t} className={`theme-btn ${theme === t ? 'selected' : ''}`} onClick={() => setTheme(t)}>{LABELS[t] || t}</button>)}
          </div>
          <label className="setup-label" style={{ marginTop: 12 }}>Ou descreva com suas palavras:</label>
          <input type="text" className="setup-input" placeholder="Ex: gosta de dinossauros e robos" value={desc} onChange={e => setDesc(e.target.value)} />
          <div className="setup-actions">
            <button className="setup-btn secondary" onClick={() => setStep(0)}>Voltar</button>
            <button className="setup-btn primary" onClick={() => setStep(2)}>Proximo</button>
          </div>
        </>}
        {step === 2 && <>
          <h2 className="setup-title">Cores Favoritas</h2>
          <p className="setup-desc">Escolha ate 2 cores que {name || 'a crianca'} mais gosta.</p>
          <div className="color-grid">
            {COLORS.map(({ v, l }) => <button key={v} className={`color-btn ${colors.includes(v) ? 'selected' : ''}`} style={{ '--btn-color': v } as React.CSSProperties} onClick={() => toggleColor(v)}>
              <div className="color-swatch" style={{ background: v }} /><span>{l}</span>
            </button>)}
          </div>
          <div className="setup-actions">
            <button className="setup-btn secondary" onClick={() => setStep(1)}>Voltar</button>
            <button className="setup-btn primary" onClick={() => onComplete({ childName: name || 'Jogador', favoriteTheme: theme, favoriteColors: colors, parentDescription: desc })}>Comecar!</button>
          </div>
        </>}
      </div>
    </div>
  )
}
