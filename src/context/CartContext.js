import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cartMovies, setCartMovies] = useState([])
  
  const addMovieToCart = (movie) => {
      setCartMovies(prevMovies => {
        const existe = prevMovies.findIndex(cartMovie => cartMovie.id === movie.id);
        if (existe === -1)
          return [...prevMovies, movie]
        else{        
          prevMovies[existe].quantity += movie.quantity;
          return prevMovies   // ver si hace falta
        }          
      })
  }

  const deleteMovie = (movie) => {
    setCartMovies(cartMovies.filter( cartMovie => cartMovie.id !== movie.id))
  }

  const deleteMovies = () =>{
    setCartMovies(prevMovies => []);
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