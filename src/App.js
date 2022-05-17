import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemContainer from './components/ItemContainer/ItemContainer.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    //JSX
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Navbar/>
        <ItemContainer
          titulo='Contenedor'
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
