import Link from 'next/link'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      gap: '2rem',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0, letterSpacing: '-0.02em' }}>
          Signal <span style={{ color: '#C9A84C' }}>Kids</span>
        </h1>
        <p style={{ color: '#888', marginTop: '0.5rem', fontSize: '1rem' }}>
          Companheiro de IA para mentes que pensam diferente
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '1rem',
        width: '100%',
        maxWidth: '600px',
      }}>
        <Link href="/sprunki" style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          border: '1px solid #C9A84C33',
          borderRadius: '16px',
          padding: '1.5rem',
          textDecoration: 'none',
          color: '#f0ece2',
          textAlign: 'center',
          transition: 'border-color 0.2s, transform 0.2s',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎵</div>
          <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Sprunki Mix</div>
          <div style={{ color: '#888', fontSize: '0.8rem', marginTop: '0.25rem' }}>Crie beats e melodias</div>
        </Link>

        <div style={{
          background: '#1a1a2e44',
          border: '1px solid #ffffff11',
          borderRadius: '16px',
          padding: '1.5rem',
          textAlign: 'center',
          opacity: 0.4,
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🪞</div>
          <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Eco ou Voz</div>
          <div style={{ color: '#888', fontSize: '0.8rem', marginTop: '0.25rem' }}>Em breve</div>
        </div>

        <div style={{
          background: '#1a1a2e44',
          border: '1px solid #ffffff11',
          borderRadius: '16px',
          padding: '1.5rem',
          textAlign: 'center',
          opacity: 0.4,
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🧩</div>
          <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>QuebraPassos</div>
          <div style={{ color: '#888', fontSize: '0.8rem', marginTop: '0.25rem' }}>Em breve</div>
        </div>

        <div style={{
          background: '#1a1a2e44',
          border: '1px solid #ffffff11',
          borderRadius: '16px',
          padding: '1.5rem',
          textAlign: 'center',
          opacity: 0.4,
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎯</div>
          <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Foco Visual</div>
          <div style={{ color: '#888', fontSize: '0.8rem', marginTop: '0.25rem' }}>Em breve</div>
        </div>
      </div>
    </div>
  )
}
