import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getNowMovies } from '../../util/movies';
import { getGenres } from '../../util/genres';
import { Button } from '@mui/material'; 
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import GenresList from '../GenresList/GenresList';
import { useParams } from "react-router-dom";


const ItemListContainer = ({titulo}) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const { genreId } = useParams();
  const [loader, setLoader] = useState(true);

  useEffect( () => {

    getGenres()
    .then((response) =>{
      setGenres(response);
    })
    .catch((err) =>{

    });

    getNowMovies(1, genreId) // paso un 1 hardcodeado para la pagina
    .then( (response) => {
      setMovies(prevMovies => response);
      setLoader(false);
    })
    .catch( (err) => {
      /* console.log("Error: ", err) */
    });    
  }, [genreId])

  return (
    //JSX
    <>
      {
        loader
        ?
          <>
            <Loader
              cant = {20}
              v = 'rectangular'
              w = {210}
              h = {115}
            />
          </>
        :  
        <div className='general-container'>
          <h2>{titulo}</h2>
          <GenresList
            genres = {genres}
          />
          <ItemList
            movies = {movies}
          />
          <Button>Ver más</Button>
        </div>
      }
    </>
  );
}

export default ItemListContainer;
