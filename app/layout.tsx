import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SPRUNKS! — Sequenciador Musical',
  description: 'Jogo musical com personagens customizáveis e fases surpresa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
