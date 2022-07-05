import './ItemListContainer.css';
import { useEffect, useRef, useState } from 'react';
import { getNowMovies, getPopularMovies } from '../../util/movies';
import { Button } from '@mui/material'; 
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import GenresList from '../GenresList/GenresList';
import { useParams } from "react-router-dom";


const ItemListContainer = ({titulo, option: opt}) => {  
  const prevOption = useRef(opt);
  const [ movies, setMovies ] = useState([]);  
  const [ option, setOption ] = useState(opt);  
  const [ page, setPage ] = useState(1);
  const { genreId } = useParams();
  const [ loader, setLoader ] = useState(true);
  const [ filterMovies, setFilterMovies ] = useState([]);

  useEffect(() => {
    if (opt !== prevOption) {
      setOption(opt);
      setMovies([]);
      setFilterMovies([]);
    }
  }, [opt])

  useEffect(() => {
    switch (option) {
      case 'Populares':
        getPopularMovies(page)
        .then( (response) => {
          setMovies(prevMovies => [...prevMovies, ...response]);
          setLoader(false);
        })
        .catch( (err) => {
          console.error(err);
        });
        break
      default:
        getNowMovies(page)
        .then( (response) => {
          setMovies(prevMovies => [...prevMovies, ...response]);
          setLoader(false);
        })
        .catch( (err) => {
          console.error(err);
        });
        break    
    }  
  }, [page, option])

  useEffect(() => {
    setFilterMovies(prevMovies => {
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
          <GenresList 
            option = {option}
          />
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
