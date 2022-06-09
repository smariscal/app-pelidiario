import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cartMovies, setCartMovies] = useState([])
  
  const addMovieToCart = (movie) => {
      setCartMovies(prevMovies => {
        const existe = prevMovies.find(cartMovie => cartMovie.id === movie.id);
        if (!existe)
          return [...prevMovies, movie]
        return prevMovies   // ver si hace falta
      })
  }

  const deleteMovie = (movie) => {
    setCartMovies(cartMovies.filter( cartMovie => cartMovie.id !== movie.id))
  }

  const deleteMovies = () =>{
    setCartMovies(prev => []);
  }

  const data = {
    cartMovies,
    addMovieToCart,
    totalMovies:cartMovies.length,
    deleteMovie,
    deleteMovies
  }

  return(
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider }
export default CartContext