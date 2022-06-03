import { Button, ButtonGroup, Box } from '@mui/material';
import { Link } from "react-router-dom";
import './GenresList.css';

export default function GenresList({genres}) {

  return (
    <Box        
      className='boxGenres'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        {
        genres.map( (g) => {
          return(
            <Button key={g.id} as={Link} to={`/genre/${g.id}`}>{g.name}</Button>
          )
        })
        }
      </ButtonGroup>
    </Box>
  );
}