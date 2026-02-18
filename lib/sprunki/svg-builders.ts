type FeatureType = 'antennas' | 'horns' | 'antenna1' | 'dragon' | 'bunny' | 'horn1' | 'crown' | 'cat' | 'ears' | 'spikes' | 'robot' | 'tree' | 'sun' | 'plain'

export function sprunkiSVG(main: string, dark: string, feature: FeatureType): string {
  let f = ''
  switch (feature) {
    case 'antennas': f = `<line x1="28" y1="18" x2="24" y2="4" stroke="${dark}" stroke-width="3" stroke-linecap="round"/><line x1="44" y1="18" x2="48" y2="4" stroke="${dark}" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="3" r="3" fill="${main}"/><circle cx="48" cy="3" r="3" fill="${main}"/>`; break
    case 'horns': f = `<polygon points="22,18 18,2 26,14" fill="${dark}"/><polygon points="30,16 28,0 34,12" fill="${dark}"/><polygon points="36,14 36,0 42,12" fill="${dark}"/><polygon points="42,16 44,0 48,14" fill="${dark}"/><polygon points="50,18 54,2 46,14" fill="${dark}"/>`; break
    case 'antenna1': f = `<line x1="36" y1="16" x2="36" y2="2" stroke="${dark}" stroke-width="3" stroke-linecap="round"/><circle cx="36" cy="2" r="4" fill="${main}"/>`; break
    case 'dragon': f = `<polygon points="24,20 20,2 28,16" fill="${dark}"/><polygon points="48,20 52,2 44,16" fill="${dark}"/><ellipse cx="20" cy="32" rx="8" ry="5" fill="${dark}" opacity="0.6"/><ellipse cx="52" cy="32" rx="8" ry="5" fill="${dark}" opacity="0.6"/>`; break
    case 'bunny': f = `<ellipse cx="26" cy="10" rx="5" ry="14" fill="${main}" stroke="${dark}" stroke-width="1"/><ellipse cx="46" cy="10" rx="5" ry="14" fill="${main}" stroke="${dark}" stroke-width="1"/><circle cx="38" cy="18" r="3" fill="#FF3366"/>`; break
    case 'horn1': f = `<polygon points="36,18 32,0 40,0" fill="${dark}"/>`; break
    case 'crown': f = `<polygon points="24,18 20,6 28,12 36,2 44,12 52,6 48,18" fill="${dark}" opacity="0.7"/>`; break
    case 'cat': f = `<polygon points="20,24 16,6 30,20" fill="${main}" stroke="${dark}" stroke-width="1"/><polygon points="52,24 56,6 42,20" fill="${main}" stroke="${dark}" stroke-width="1"/>`; break
    case 'ears': f = `<ellipse cx="22" cy="16" rx="10" ry="8" fill="${main}"/><ellipse cx="50" cy="16" rx="10" ry="8" fill="${main}"/>`; break
    case 'spikes': f = `<polygon points="26,18 22,4 30,14" fill="${dark}"/><polygon points="36,16 36,0 40,12" fill="${dark}"/><polygon points="46,18 50,4 42,14" fill="${dark}"/>`; break
    case 'robot': f = `<rect x="26" y="8" width="20" height="8" rx="2" fill="${dark}"/><rect x="30" y="4" width="12" height="6" rx="2" fill="${main}" opacity="0.6"/>`; break
    case 'tree': f = `<ellipse cx="36" cy="8" rx="16" ry="12" fill="#2D6A2F"/><ellipse cx="30" cy="6" rx="10" ry="8" fill="#3A7A3A"/><ellipse cx="42" cy="6" rx="10" ry="8" fill="#3A7A3A"/>`; break
    case 'sun': f = `<circle cx="36" cy="8" r="10" fill="${main}"/><line x1="36" y1="-4" x2="36" y2="0" stroke="${dark}" stroke-width="2"/>`; break
    default: f = `<circle cx="36" cy="12" r="5" fill="${dark}"/>`
  }
  return `<svg viewBox="0 0 72 110" xmlns="http://www.w3.org/2000/svg">${f}<ellipse cx="36" cy="62" rx="24" ry="34" fill="${main}" stroke="${dark}" stroke-width="1.5"/><ellipse cx="36" cy="100" rx="16" ry="6" fill="${dark}" opacity="0.3"/><ellipse cx="28" cy="52" rx="5" ry="6" fill="#fff"/><ellipse cx="44" cy="52" rx="5" ry="6" fill="#fff"/><circle cx="28" cy="54" r="3.5" fill="#111"/><circle cx="44" cy="54" r="3.5" fill="#111"/><circle cx="29" cy="52" r="1.5" fill="#fff"/><circle cx="45" cy="52" r="1.5" fill="#fff"/><ellipse cx="36" cy="62" rx="5" ry="3" fill="${dark}" opacity="0.4"/></svg>`
}

export function customSVG(primary: string, secondary: string, features: string[]): string {
  let extras = ''
  features.forEach(feat => {
    switch (feat) {
      case 'speed-spikes': extras += `<polygon points="44,20 60,8 48,24" fill="${primary}"/><polygon points="48,16 66,12 52,22" fill="${primary}"/><polygon points="42,14 54,4 46,20" fill="${primary}"/>`; break
      case 'wings': extras += `<ellipse cx="10" cy="60" rx="12" ry="20" fill="${primary}" opacity="0.6" transform="rotate(-15,10,60)"/><ellipse cx="62" cy="60" rx="12" ry="20" fill="${primary}" opacity="0.6" transform="rotate(15,62,60)"/>`; break
      case 'tail-fire': extras += `<ellipse cx="36" cy="98" rx="8" ry="6" fill="#FF6600"/><ellipse cx="36" cy="96" rx="5" ry="4" fill="#FFAA00"/>`; break
      case 'electric-cheeks': extras += `<circle cx="18" cy="64" r="5" fill="#FFD700" opacity="0.6"/><circle cx="54" cy="64" r="5" fill="#FFD700" opacity="0.6"/>`; break
      case 'cape': extras += `<path d="M 14 45 Q 10 80 20 100 L 52 100 Q 62 80 58 45 Z" fill="${secondary}" opacity="0.4"/>`; break
      case 'hat-cap': extras += `<ellipse cx="36" cy="26" rx="22" ry="6" fill="${secondary}"/><path d="M 20 26 Q 20 10 36 8 Q 52 10 52 26 Z" fill="${primary}"/>`; break
      case 'mustache': extras += `<path d="M 28 65 Q 32 70 36 65 Q 40 70 44 65" stroke="${secondary}" stroke-width="2" fill="none"/>`; break
      case 'shell': extras += `<ellipse cx="36" cy="68" rx="22" ry="18" fill="${secondary}"/><line x1="36" y1="50" x2="36" y2="86" stroke="${primary}" stroke-width="1.5"/>`; break
      case 'headband': extras += `<rect x="18" y="38" width="36" height="4" rx="2" fill="${secondary}"/><rect x="32" y="34" width="8" height="12" rx="2" fill="${secondary}"/>`; break
      case 'saiyan-hair': extras += `<polygon points="36,22 28,0 32,18" fill="${primary}"/><polygon points="30,24 20,-4 28,18" fill="${primary}"/><polygon points="42,24 52,-4 44,18" fill="${primary}"/>`; break
      case 'long-ears': extras += `<ellipse cx="16" cy="30" rx="6" ry="18" fill="${primary}" transform="rotate(-15,16,30)"/><ellipse cx="56" cy="30" rx="6" ry="18" fill="${primary}" transform="rotate(15,56,30)"/>`; break
      case 'crown-jewel': extras += `<polygon points="24,24 20,6 28,16 36,2 44,16 52,6 48,24" fill="#FFD700"/><circle cx="36" cy="10" r="3" fill="#FF0066"/>`; break
      case 'scarf': extras += `<path d="M 18 42 Q 36 48 54 42 L 58 46 Q 36 52 14 46 Z" fill="${secondary}"/>`; break
      case 'star-eyes': extras += `<polygon points="28,52 26,48 30,50 24,50 28,48" fill="#FFD700"/><polygon points="44,52 42,48 46,50 40,50 44,48" fill="#FFD700"/>`; break
    }
  })
  return `<svg viewBox="0 0 72 110" xmlns="http://www.w3.org/2000/svg">${extras}<ellipse cx="36" cy="62" rx="24" ry="34" fill="${primary}" stroke="${secondary}" stroke-width="2"/><ellipse cx="36" cy="100" rx="14" ry="5" fill="rgba(0,0,0,0.2)"/><ellipse cx="28" cy="52" rx="5" ry="6" fill="#fff"/><ellipse cx="44" cy="52" rx="5" ry="6" fill="#fff"/><circle cx="28" cy="54" r="3.5" fill="#111"/><circle cx="44" cy="54" r="3.5" fill="#111"/><circle cx="29" cy="52" r="1.5" fill="#fff"/><circle cx="45" cy="52" r="1.5" fill="#fff"/></svg>`
}
