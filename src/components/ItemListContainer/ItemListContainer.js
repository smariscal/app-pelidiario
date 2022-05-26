import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import {getMovies} from '../../util/moviesMock'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({titulo}) => {

  const [movies, setMovies] = useState([])

  useEffect( () => {
    getMovies()
    .then( (response) => {
      setMovies(response)
    })
    .catch( (err) => {
      /* console.log("Error: ", err) */
    })
  }, [])

  return (
    //JSX
    <div className='general-container'>
      <h2>{titulo}</h2>
      <ItemList
        movies = {movies}
      />              
    </div>
  );
}

export default ItemListContainer;
