import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import {getMovie} from '../../util/moviesMock'
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
  const [movie, setMovie] = useState([]);

  useEffect( () => {
    getMovie()
    .then( (response) => {
      setMovie(response);
    })
    .catch( (err) => {
      /* console.log("Error: ", err) */
    })
  }, [])

  return (
    //JSX
    <div className='general-container'>
      {Object.keys(movie).length > 0 && <ItemDetail movie={movie} />}
    </div>
  );
}

export default ItemDetailContainer;
