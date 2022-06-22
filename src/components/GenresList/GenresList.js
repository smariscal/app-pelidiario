import { Button, ButtonGroup, Box } from '@mui/material';
import './GenresList.css';
import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { getGenres } from '../../util/genres';
import React from 'react';

export default function GenresList() {
  const { genreId } = useParams();
  const [ genres, setGenres ] = useState([]);

  useEffect(() => {
    getGenres()
    .then((response) =>{
      setGenres(response);
    })
    .catch((err) =>{

    });
  }, [])

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
        <Button as={Link} className='btnGenreGroup' style={{textDecoration: "none"}} variant={genreId === undefined ? 'contained' : 'outlined'} to={`/Novedades`}>Todas</Button>
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