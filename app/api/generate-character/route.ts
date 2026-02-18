// ============================================================
// SPRUNKS — API Route: Gerar Personagem por Prompt
// POST /api/generate-character
// ============================================================

import { NextRequest, NextResponse } from 'next/server'
import type { ChildPreference } from '@/lib/sprunki/types'
import { generateSurpriseCharacters } from '@/lib/sprunki/character-generator'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ChildPreference

    if (!body.favoriteTheme && !body.parentDescription) {
      return NextResponse.json(
        { error: 'Precisa de pelo menos um tema ou descrição' },
        { status: 400 }
      )
    }

    const characters = generateSurpriseCharacters({
      childName: body.childName || 'Jogador',
      favoriteTheme: body.favoriteTheme || '',
      favoriteColors: body.favoriteColors || [],
      parentDescription: body.parentDescription || '',
    })

    const serialized = characters.map(c => ({
      name: c.name,
      color: c.color,
      type: c.type,
      description: c.description,
      pattern: c.pattern,
      notes: c.notes,
      isSurprise: c.isSurprise,
      theme: c.theme,
    }))

    return NextResponse.json({
      success: true,
      characters: serialized,
      theme: characters[0]?.theme || 'custom',
    })
  } catch {
    return NextResponse.json(
      { error: 'Erro ao gerar personagens' },
      { status: 500 }
    )
  }
}
