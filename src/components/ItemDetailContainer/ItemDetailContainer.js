import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetail } from '../../util/movies';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {  
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const moviesLenght =  Object.keys(movie).length;  // controlo si existe la pelicula

  useEffect(() => {
    getMovieDetail(id)
    .then( (response) => {
      (response.success === false) ? navigate('/notFound') : setMovie(response);
    })
    .catch( (err) => {
      /* console.log("Error: ", err) */
    })
  }, [id])

  return (
    //JSX
    <div className='general-container'>
      {moviesLenght  > 0 && <ItemDetail movie={movie} />}
    </div>
  );
}

export default ItemDetailContainer;
