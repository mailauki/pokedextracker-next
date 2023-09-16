'use client'

import { SyntheticEvent, useState } from 'react'
import Link from 'next/link'
import { AppBar, Avatar, Container, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname();

  return (
    <AppBar>
      <Container maxWidth="md">
        <Toolbar variant="dense">
          <Link 
            href="/" 
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <Avatar
              alt="Gotta catch 'em all!"
              src="/pokeball.svg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="h6" sx={{ ml: 1, mr: 1 }}>PokedexTracker</Typography>
          </Link>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={pathname}
            aria-label="tabs"
          >
            <Tab label="Home" component={Link} href="/" value="/" />
            <Tab label="Dex" component={Link} href="/dex" value="/dex" />
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  )
}