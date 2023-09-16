import '@/styles/pokesprite.css';
import { Avatar, Card, CardActionArea, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info'

export default function PokemonCard({ pokemon, dex }) {
  function padding(number: number) {
    if (number < 10) {
      return `00${number}`
    } else if (number < 100) {
      return `0${number}`
    // } else if (number < 1000) {
    //   return `${number}`
    } else return number
  }

  return (
    <Card key={pokemon.entry_number} sx={{ width: 240 }}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="sprite">
              <i className={`pkicon pkicon-${padding(pokemon.entry_number)} ${dex}`} />
            </Avatar>
          }
          action={
            <IconButton aria-label="info">
              <InfoIcon />
            </IconButton>
          }
          title={pokemon.pokemon_species.name}
          subheader={`#${padding(pokemon.entry_number)}`}
        />
        {/* <CardMedia sx={{ height: 'fit-content' }}>
          <Avatar aria-label="sprite" sx={{ width: '100%', height: '110px', bgcolor: 'transparent' }} variant="square">
            <i className={`pkicon pkicon-${padding(pokemon.entry_number)} ${dex}`} style={{ transform: 'scale(3)' }} />
          </Avatar>
        </CardMedia> */}
        {/* <CardContent>
          <Typography>#{padding(pokemon.entry_number)}</Typography>
        </CardContent> */}
      </CardActionArea>
    </Card>
  )
}