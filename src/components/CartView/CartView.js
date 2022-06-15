import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CardMedia, Tooltip, Grid, Container, Button }  from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TMDB from '../../util/TMDB';
import CartContext from '../../context/CartContext';
import './CartView.css';

export default function BasicTable() {
  const { deleteMovie, deleteMovies, cartMovies, totalMovies } = useContext(CartContext);

  return (
    <Container maxWidth="xl">
      {totalMovies > 0 
        ? 
        <Grid container sx={{marginTop:'15px', marginBottom:'15px'}} spacing={2}>
          <Grid item xs={12} md={8} sx={{margin:'auto'}}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" sx={{fontWeight:'700'}}>Portada</TableCell>
                    <TableCell align="left" sx={{fontWeight:'700'}}>Titulo</TableCell>
                    <TableCell align="left" sx={{fontWeight:'700'}}>Descripción</TableCell>
                    <TableCell align="right" sx={{fontWeight:'700'}}>Cantidad</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartMovies.map((movie) => (
                    <TableRow
                      key={movie.title}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Tooltip title={movie.title}>
                          <CardMedia
                            component="img"
                            sx={{ width: 150}}
                            image={TMDB.image_base_url + movie.poster_path}
                            alt={movie.title}
                          />
                        </Tooltip>
                      </TableCell>
                      <TableCell align="left">{movie.title}</TableCell>
                      <TableCell align="left">{movie.overview}</TableCell>
                      <TableCell align="right">{movie.quantity}</TableCell>
                      <TableCell>
                        <Tooltip title="Eliminar">
                          <DeleteIcon sx={{cursor:'pointer'}} onClick={() => deleteMovie(movie)}/>
                        </Tooltip>
                      </TableCell>              
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={10} md={5} sx={{margin:'auto', textAlign:'center'}}>
            <Button onClick={deleteMovies} variant="outlined" color="error" endIcon={<DeleteIcon />}>
              Eliminar todo
            </Button>
          </Grid>
          <Grid item xs={10} md={5} sx={{margin:'auto', textAlign:'center'}}>
            <Button variant="contained" color="success">
              Finalizar compra
            </Button>
          </Grid>          
        </Grid>
        :
        <Grid container sx={{marginTop:'15px'}}>
          <div className='general-container'>
            <h2>Tu carrito está vacío.</h2>            
            <Link to='/Novedades' style={{textDecoration: "none", color:'white'}}>
              <Button variant="contained">Ver novedades</Button>
            </Link>
          </div>          
        </Grid>
      }
    </Container>    
  );
}

