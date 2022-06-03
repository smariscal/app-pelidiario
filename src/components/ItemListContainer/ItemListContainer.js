import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getNowMovies } from '../../util/movies';
import { getGenres } from '../../util/genres';
import ItemList from '../ItemList/ItemList';
import GenresList from '../GenresList/GenresList';
import { useParams, useNavigate } from "react-router-dom";


const ItemListContainer = ({titulo}) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const { genreId } = useParams();

  useEffect( () => {

    getGenres()
    .then((response) =>{
      setGenres(response);
    })
    .catch((err) =>{

    });

    getNowMovies(1, genreId) // paso un 1 hardcodeado para la pagina
    .then( (response) => {
      setMovies(response);
    })
    .catch( (err) => {
      /* console.log("Error: ", err) */
    });    
  }, [genreId])

  return (
    //JSX
    <div className='general-container'>
      <h2>{titulo}</h2>
      <GenresList
        genres = {genres}
      />
      <ItemList
        movies = {movies}
      />
    </div>
  );
}

export default ItemListContainer;
