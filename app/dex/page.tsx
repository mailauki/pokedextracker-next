'use client'

import PokedexSelector from '@/components/PokedexSelector'
import { Container, Toolbar } from '@mui/material'

export default function Dex() {
  return (
    <Container maxWidth="md">
      <Toolbar />
      <h1>Dex</h1>
      <PokedexSelector />
    </Container>
  )
}