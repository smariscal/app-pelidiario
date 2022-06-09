import { Skeleton, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../Loader/Loader.css';

const Loader = ({cant, v, w, h}) => {
  // Fuerzo el tema light porque en dark no funciona
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });  

  const items = []
  for (let index = 0; index < cant; index++) {
    items.push(<Grid key={index} item xs={12} md={4} lg={3}><Skeleton className='itemSkeleton' variant={v} width={w} height={h}/></Grid>)
  }

  return (
    //JSX    
    <ThemeProvider theme={lightTheme}>
      <Grid className='loaderContainer' container spacing={2}>
        {items}
      </Grid>
    </ThemeProvider>
  );
}

export default Loader;