import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './pages/News';
import Favorites from './pages/Favorites';
import Calendar from './pages/Calendar';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    //JSX
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar/>              
        <Routes>
          <Route path='*' element={<h1>404 - Página no encontrada</h1>} />
          <Route path="/" element={<News />} />
          <Route path="/Novedades" element={<News />} />
          <Route path="/Favoritos" element={<Favorites />} />
          <Route path="/Calendario" element={<Calendar />} />
        </Routes>          
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


