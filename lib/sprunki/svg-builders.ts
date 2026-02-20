type FeatureType = 'antennas' | 'horns' | 'antenna1' | 'dragon' | 'bunny' | 'horn1' | 'crown' | 'cat' | 'ears' | 'spikes' | 'robot' | 'tree' | 'sun' | 'plain'

// Incredibox-style character builder
// Corpo pill alto, cabeça redonda separada, bracinhos, headphones/acessórios distintos

function headAccessory(feature: FeatureType, dark: string, main: string): string {
  switch (feature) {
    case 'antennas': return `<line x1="30" y1="14" x2="26" y2="2" stroke="${dark}" stroke-width="2.5" stroke-linecap="round"/><line x1="42" y1="14" x2="46" y2="2" stroke="${dark}" stroke-width="2.5" stroke-linecap="round"/><circle cx="26" cy="2" r="3" fill="#FFD166"/><circle cx="46" cy="2" r="3" fill="#FFD166"/>`
    case 'horns': return `<polygon points="24,16 18,0 30,12" fill="${dark}"/><polygon points="48,16 54,0 42,12" fill="${dark}"/>`
    case 'antenna1': return `<line x1="36" y1="12" x2="36" y2="0" stroke="${dark}" stroke-width="3" stroke-linecap="round"/><circle cx="36" cy="0" r="4" fill="#FFD166"/>`
    case 'dragon': return `<polygon points="24,16 18,0 30,12" fill="${dark}"/><polygon points="48,16 54,0 42,12" fill="${dark}"/><ellipse cx="18" cy="28" rx="6" ry="4" fill="${dark}" opacity="0.5"/><ellipse cx="54" cy="28" rx="6" ry="4" fill="${dark}" opacity="0.5"/>`
    case 'bunny': return `<ellipse cx="28" cy="6" rx="5" ry="16" fill="${main}" stroke="${dark}" stroke-width="1.2"/><ellipse cx="44" cy="6" rx="5" ry="16" fill="${main}" stroke="${dark}" stroke-width="1.2"/>`
    case 'horn1': return `<polygon points="36,14 30,-2 42,-2" fill="${dark}"/>`
    case 'crown': return `<polygon points="24,16 20,2 28,10 36,-2 44,10 52,2 48,16" fill="#FFD166" opacity="0.85"/>`
    case 'cat': return `<polygon points="22,20 16,2 32,16" fill="${main}" stroke="${dark}" stroke-width="1"/><polygon points="50,20 56,2 40,16" fill="${main}" stroke="${dark}" stroke-width="1"/>`
    case 'ears': return `<ellipse cx="18" cy="24" rx="8" ry="10" fill="${main}" stroke="${dark}" stroke-width="1"/><ellipse cx="54" cy="24" rx="8" ry="10" fill="${main}" stroke="${dark}" stroke-width="1"/>`
    case 'spikes': return `<polygon points="28,16 24,0 32,12" fill="${dark}"/><polygon points="36,14 36,-2 40,10" fill="${dark}"/><polygon points="44,16 48,0 40,12" fill="${dark}"/>`
    case 'robot': return `<rect x="26" y="6" width="20" height="10" rx="5" fill="${dark}"/><rect x="30" y="2" width="12" height="6" rx="3" fill="#FFD166" opacity="0.6"/>`
    case 'tree': return `<ellipse cx="36" cy="6" rx="16" ry="12" fill="#2A9D8F"/><ellipse cx="30" cy="4" rx="10" ry="8" fill="#3BC4B1"/><ellipse cx="42" cy="4" rx="10" ry="8" fill="#3BC4B1"/>`
    case 'sun': return `<circle cx="36" cy="6" r="10" fill="#FFD166"/><line x1="36" y1="-6" x2="36" y2="-2" stroke="#B45309" stroke-width="2"/><line x1="24" y1="0" x2="22" y2="-4" stroke="#B45309" stroke-width="1.5"/><line x1="48" y1="0" x2="50" y2="-4" stroke="#B45309" stroke-width="1.5"/>`
    default: return `<line x1="30" y1="14" x2="26" y2="4" stroke="${dark}" stroke-width="2" stroke-linecap="round" opacity="0.6"/><line x1="42" y1="14" x2="46" y2="4" stroke="${dark}" stroke-width="2" stroke-linecap="round" opacity="0.6"/><circle cx="26" cy="3" r="2.5" fill="#FFD166" opacity="0.8"/><circle cx="46" cy="3" r="2.5" fill="#FFD166" opacity="0.8"/>`
  }
}

export function sprunkiSVG(main: string, dark: string, feature: FeatureType): string {
  const acc = headAccessory(feature, dark, main)
  // Headphones (assinatura Incredibox)
  const headphones = `<ellipse cx="16" cy="28" rx="6" ry="7" fill="${dark}" opacity="0.8"/><ellipse cx="56" cy="28" rx="6" ry="7" fill="${dark}" opacity="0.8"/><path d="M 16 21 Q 16 10 36 10 Q 56 10 56 21" stroke="${dark}" stroke-width="3" fill="none" opacity="0.6"/>`
  // Cabeça redonda
  const head = `<circle cx="36" cy="28" r="18" fill="${main}" stroke="${dark}" stroke-width="1.5"/>`
  // Olhos estilo Incredibox (retângulos arredondados brancos com pupilas)
  const eyes = `<rect x="26" y="24" width="8" height="10" rx="4" fill="#fff"/><rect x="38" y="24" width="8" height="10" rx="4" fill="#fff"/><circle cx="30" cy="30" r="3" fill="#134E4A"/><circle cx="42" cy="30" r="3" fill="#134E4A"/><circle cx="31" cy="28" r="1.2" fill="#fff"/><circle cx="43" cy="28" r="1.2" fill="#fff"/>`
  // Boca
  const mouth = `<ellipse cx="36" cy="38" rx="4" ry="2" fill="${dark}" opacity="0.3"/>`
  // Corpo pill alto (estilo Incredibox — retângulo arredondado)
  const body = `<rect x="22" y="46" width="28" height="44" rx="14" fill="${main}" stroke="${dark}" stroke-width="1.5"/>`
  // Bracinhos curtos nas laterais
  const arms = `<ellipse cx="18" cy="60" rx="6" ry="4" fill="${main}" stroke="${dark}" stroke-width="1" transform="rotate(-15,18,60)"/><ellipse cx="54" cy="60" rx="6" ry="4" fill="${main}" stroke="${dark}" stroke-width="1" transform="rotate(15,54,60)"/>`
  // Pezinhos
  const feet = `<ellipse cx="30" cy="92" rx="7" ry="4" fill="${dark}" opacity="0.7"/><ellipse cx="42" cy="92" rx="7" ry="4" fill="${dark}" opacity="0.7"/>`
  // Sombra chão
  const shadow = `<ellipse cx="36" cy="98" rx="16" ry="4" fill="${dark}" opacity="0.15"/>`
  // Bochechas
  const cheeks = `<circle cx="22" cy="34" r="3" fill="#FF8FAB" opacity="0.3"/><circle cx="50" cy="34" r="3" fill="#FF8FAB" opacity="0.3"/>`

  return `<svg viewBox="0 0 72 110" xmlns="http://www.w3.org/2000/svg">${acc}${headphones}${head}${eyes}${mouth}${cheeks}${body}${arms}${feet}${shadow}</svg>`
}

export function customSVG(primary: string, secondary: string, features: string[]): string {
  let extras = ''
  features.forEach(feat => {
    switch (feat) {
      case 'speed-spikes': extras += `<polygon points="44,16 60,4 48,20" fill="${primary}"/><polygon points="48,12 66,8 52,18" fill="${primary}"/>` ; break
      case 'wings': extras += `<ellipse cx="8" cy="60" rx="10" ry="18" fill="${primary}" opacity="0.4" transform="rotate(-15,8,60)"/><ellipse cx="64" cy="60" rx="10" ry="18" fill="${primary}" opacity="0.4" transform="rotate(15,64,60)"/>` ; break
      case 'tail-fire': extras += `<ellipse cx="36" cy="94" rx="8" ry="5" fill="#FB7185"/><ellipse cx="36" cy="92" rx="5" ry="3" fill="#FFD166"/>` ; break
      case 'electric-cheeks': extras += `<circle cx="20" cy="36" r="4" fill="#FFD166" opacity="0.5"/><circle cx="52" cy="36" r="4" fill="#FFD166" opacity="0.5"/>` ; break
      case 'cape': extras += `<path d="M 16 50 Q 12 75 22 94 L 50 94 Q 60 75 56 50 Z" fill="${secondary}" opacity="0.25"/>` ; break
      case 'hat-cap': extras += `<ellipse cx="36" cy="14" rx="22" ry="6" fill="${secondary}"/><path d="M 20 14 Q 20 2 36 0 Q 52 2 52 14 Z" fill="${primary}"/>` ; break
      case 'mustache': extras += `<path d="M 28 39 Q 32 43 36 39 Q 40 43 44 39" stroke="${secondary}" stroke-width="2" fill="none"/>` ; break
      case 'shell': extras += `<ellipse cx="36" cy="66" rx="18" ry="16" fill="${secondary}"/><line x1="36" y1="50" x2="36" y2="82" stroke="${primary}" stroke-width="1.5"/>` ; break
      case 'headband': extras += `<rect x="18" y="20" width="36" height="4" rx="2" fill="${secondary}"/><rect x="32" y="16" width="8" height="12" rx="2" fill="${secondary}"/>` ; break
      case 'saiyan-hair': extras += `<polygon points="36,14 28,-4 32,10" fill="${primary}"/><polygon points="30,16 20,-8 28,10" fill="${primary}"/><polygon points="42,16 52,-8 44,10" fill="${primary}"/>` ; break
      case 'long-ears': extras += `<ellipse cx="14" cy="24" rx="6" ry="18" fill="${primary}" transform="rotate(-15,14,24)"/><ellipse cx="58" cy="24" rx="6" ry="18" fill="${primary}" transform="rotate(15,58,24)"/>` ; break
      case 'crown-jewel': extras += `<polygon points="24,16 20,2 28,10 36,-2 44,10 52,2 48,16" fill="#FFD166"/><circle cx="36" cy="6" r="3" fill="#FB7185"/>` ; break
      case 'scarf': extras += `<path d="M 20 44 Q 36 48 52 44 L 54 48 Q 36 52 18 48 Z" fill="${secondary}"/>` ; break
      case 'star-eyes': extras += `<polygon points="30,28 28,24 32,26 26,26 30,24" fill="#FFD166"/><polygon points="42,28 40,24 44,26 38,26 42,24" fill="#FFD166"/>` ; break
    }
  })
  // Headphones
  const hp = `<ellipse cx="16" cy="28" rx="6" ry="7" fill="${secondary}" opacity="0.8"/><ellipse cx="56" cy="28" rx="6" ry="7" fill="${secondary}" opacity="0.8"/><path d="M 16 21 Q 16 10 36 10 Q 56 10 56 21" stroke="${secondary}" stroke-width="3" fill="none" opacity="0.6"/>`
  const head = `<circle cx="36" cy="28" r="18" fill="${primary}" stroke="${secondary}" stroke-width="1.5"/>`
  const eyes = `<rect x="26" y="24" width="8" height="10" rx="4" fill="#fff"/><rect x="38" y="24" width="8" height="10" rx="4" fill="#fff"/><circle cx="30" cy="30" r="3" fill="#134E4A"/><circle cx="42" cy="30" r="3" fill="#134E4A"/><circle cx="31" cy="28" r="1.2" fill="#fff"/><circle cx="43" cy="28" r="1.2" fill="#fff"/>`
  const mouth = `<ellipse cx="36" cy="38" rx="4" ry="2" fill="${secondary}" opacity="0.3"/>`
  const body = `<rect x="22" y="46" width="28" height="44" rx="14" fill="${primary}" stroke="${secondary}" stroke-width="1.5"/>`
  const arms = `<ellipse cx="18" cy="60" rx="6" ry="4" fill="${primary}" stroke="${secondary}" stroke-width="1" transform="rotate(-15,18,60)"/><ellipse cx="54" cy="60" rx="6" ry="4" fill="${primary}" stroke="${secondary}" stroke-width="1" transform="rotate(15,54,60)"/>`
  const feet = `<ellipse cx="30" cy="92" rx="7" ry="4" fill="${secondary}" opacity="0.7"/><ellipse cx="42" cy="92" rx="7" ry="4" fill="${secondary}" opacity="0.7"/>`
  const shadow = `<ellipse cx="36" cy="98" rx="16" ry="4" fill="rgba(0,0,0,0.15)"/>`
  const cheeks = `<circle cx="22" cy="34" r="3" fill="#FF8FAB" opacity="0.3"/><circle cx="50" cy="34" r="3" fill="#FF8FAB" opacity="0.3"/>`

  return `<svg viewBox="0 0 72 110" xmlns="http://www.w3.org/2000/svg">${extras}${hp}${head}${eyes}${mouth}${cheeks}${body}${arms}${feet}${shadow}</svg>`
}
