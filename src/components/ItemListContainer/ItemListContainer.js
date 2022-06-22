import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getNowMovies } from '../../util/movies';
import { Button } from '@mui/material'; 
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import GenresList from '../GenresList/GenresList';
import { useParams } from "react-router-dom";


const ItemListContainer = ({titulo}) => {
  const [ movies, setMovies ] = useState([]);  
  const [ page, setPage ] = useState(1);
  const { genreId } = useParams();
  const [ loader, setLoader ] = useState(true);
  const [ filterMovies, setFilterMovies ] = useState([]);

  useEffect(() => {    
    getNowMovies(page)
    .then( (response) => {
      setMovies(prevMovies => [...prevMovies, ...response]);
      setLoader(false);
    })
    .catch( (err) => {
      console.error(err);
    });    
  }, [page])

  useEffect(() => {
    setFilterMovies(prevMovies => {

      console.log(prevMovies);

      if (genreId === undefined)
        return movies;
      else
        return movies.filter( (movie) => {
          return movie.genre_ids.includes(Number(genreId))
        })    
    });    
  }, [genreId, movies])

  const handleViewMore = () => {
    setPage(prevPage => prevPage + 1)
  }

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
          <GenresList />
          <ItemList
            movies = {filterMovies}
          />
          <Button onClick={handleViewMore}>Ver más</Button>
        </div>
      }
    </>
  );
}

export default ItemListContainer;
