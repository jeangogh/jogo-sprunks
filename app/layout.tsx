import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Signal Kids',
  description: 'Companheiro de IA para crianças superdotadas e twice-exceptional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, background: '#0f1117', color: '#f0ece2', fontFamily: 'DM Sans, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
