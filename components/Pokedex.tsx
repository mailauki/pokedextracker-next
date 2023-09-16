'use client'

import { useEffect, useState } from 'react'
import { GameClient } from 'pokenode-ts'; // import the GameClient

export default function Pokedex(props: {pokedexName: string}) {
  const [pokedex, setPokedex] = useState({ pokemon_entries: [] });

  useEffect(() => {
    if(props.pokedexName) {
      (async () => {
        const api = new GameClient(); // create a GameClient
      
        await api
          .getPokedexByName(props.pokedexName)
          .then((data) => setPokedex(data))
          .catch((error) => console.error(error));
      })();
    }
  }, [props])
  

  return (
    <>
      <ul>
        {pokedex.pokemon_entries && pokedex.pokemon_entries.map((entry) => <li key={entry.entry_number}>{entry.entry_number} - {entry.pokemon_species.name}</li>)}
      </ul>
    </>
  )
}