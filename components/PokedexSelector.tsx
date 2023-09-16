'use client'

import { useEffect, useState } from 'react'
import { GameClient } from 'pokenode-ts'; // import the GameClient
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Pokedex from './Pokedex';

export default function PokedexSelector() {
  const [pokedex, setPokedex] = useState('');
  const [pokedexes, setPokedexes] = useState([{ name: '', url: '' }]);

  const handleChange = (event: SelectChangeEvent) => {
    setPokedex(event.target.value as string);
  };

  (async () => {
    const api = new GameClient(); // create a GameClient

    await api
      .listPokedexes()
      .then((data) => setPokedexes(data.results))
      .catch((error) => console.error(error));
  })();

  return (
    <>
      <FormControl fullWidth disabled>
        <InputLabel id="pokedex-select-label">Select a Pokedex</InputLabel>
        <Select
          labelId="pokedex-select-label"
          id="pokedex-select"
          value={pokedex}
          label="Select a Pokedex"
          onChange={handleChange}
        >
          <MenuItem>Select a Pokedex</MenuItem>
          {pokedexes.map((pokedex) => (
            <MenuItem key={pokedex.name}  value={pokedex.name}>{pokedex.name.split("-").map((name) => name.charAt(0).toUpperCase() + name.slice(1)).join(" ")}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Pokedex pokedexName={pokedex} />
    </>
  )
}