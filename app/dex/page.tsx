'use client'

import PokedexSelector from '@/components/PokedexSelector'
import { Container, Toolbar } from '@mui/material'

export default function Dex() {
  return (
    <>
      <Toolbar />
      <Container maxWidth="md" sx={{ mt: 2, mb: 4 }}>
        {/* <Toolbar /> */}
        <h1>Dex</h1>
        <PokedexSelector />
      </Container>
    </>
  )
}