'use client'

import { useEffect, useState } from 'react'
import { GameClient } from 'pokenode-ts'; // import the GameClient
import PokemonCard from './PokemonCard';
import { Stack } from '@mui/material';

export default function Pokedex(props: {pokedexName: string}) {
  const [pokedex, setPokedex] = useState({ pokemon_entries: [] });

  // useEffect(() => {
  //   if(props.pokedexName) {
  //     (async () => {
  //       const api = new GameClient(); // create a GameClient
      
  //       await api
  //         .getPokedexByName(props.pokedexName)
  //         .then((data) => setPokedex(data))
  //         .catch((error) => console.error(error));
  //     })();
  //   }
  // }, [props])

  useEffect(() => {
    (async () => {
      const api = new GameClient(); // create a GameClient
    
      await api
        .getPokedexByName('kanto')
        .then((data) => setPokedex(data))
        .catch((error) => console.error(error));
    })();
  }, [])
  

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      useFlexGap
      spacing={2}
      sx={{ mt: 4 }}
    >
      {pokedex.pokemon_entries && pokedex.pokemon_entries.map((entry) => <PokemonCard pokemon={entry} dex={pokedex.name} />)}
    </Stack>
  )
}