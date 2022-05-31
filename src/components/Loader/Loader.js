import { Skeleton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Loader = ({v, w, h}) => {
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });  

  return (
    //JSX
    <ThemeProvider theme={lightTheme}>
      <Skeleton variant={v} width={w} height={h}/>
    </ThemeProvider>
  );
}

export default Loader;