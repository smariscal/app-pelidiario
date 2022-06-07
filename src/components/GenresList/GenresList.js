import { Button, ButtonGroup, Box } from '@mui/material';
import { Link } from "react-router-dom";
import './GenresList.css';
import { useParams } from "react-router-dom";

export default function GenresList({genres}) {
  const { genreId } = useParams();

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
        genres.map( (genre) => {
          return(
            <Button key={genre.id} as={Link} className='btnGenreGroup' style={{textDecoration: "none"}} variant={Number(genreId) === genre.id ? 'contained' : 'outlined'} to={`/genre/${genre.id}`}>{genre.name}</Button>
          )
        })
        }
      </ButtonGroup>
    </Box>
  );
}