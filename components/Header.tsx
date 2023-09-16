'use client'

import { SyntheticEvent, useState } from 'react'
import Link from 'next/link'
import { AppBar, Tab, Tabs, Toolbar } from '@mui/material'

export default function Header() {
  const [openPage, setOpenPage] = useState("home");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    console.log(event.target)

    setOpenPage(newValue)
  }

  return (
    <AppBar>
      <Toolbar variant="dense">
        <Tabs
          textColor="inherit"
          indicatorColor="secondary"
          value={openPage}
          onChange={handleChange}
          aria-label="tabs"
        >
          <Tab label="Home" component={Link} href="/" value="home" />
          <Tab label="Dex" component={Link} href="/dex" value="dex" />
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}