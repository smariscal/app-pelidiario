import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Calendar from './pages/Calendar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() { 

  return (
    //JSX
    <CartProvider>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Navbar/>              
          <Routes>
            <Route path='*' element={<h1>404 - Página no encontrada</h1>} />
            <Route exact path="/" element={<ItemListContainer titulo='Novedades' option='Novedades' />} />
            <Route path="/Novedades" element={<ItemListContainer titulo='Novedades' option='Novedades' />} />
            <Route path="/Populares" element={<ItemListContainer titulo='Populares' option='Populares'/>} />
            <Route path="/Contacto" element={<Contact />} />
            <Route path="/Carrito" element={<Cart />} />
            <Route path='/movie/:id' element={<ItemDetailContainer />} />
            <Route path='/Novedades/genre/:genreId' element={<ItemListContainer titulo='Novedades' option='Novedades' />} />
            <Route path='/Populares/genre/:genreId' element={<ItemListContainer titulo='Populares' option='Populares' />} />
            <Route path="/Calendario" element={<Calendar />} />
          </Routes>          
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;



