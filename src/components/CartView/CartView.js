import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CardMedia, Tooltip, Grid, Container, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField }  from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../util/firebase';
import TMDB from '../../util/TMDB';
import CartContext from '../../context/CartContext';
import './CartView.css';

export default function BasicTable() {
  const { deleteMovie, deleteMovies, cartMovies, totalMovies } = useContext(CartContext);
  const [ openDialog, setOpenDialog ] = useState(false);
  const [ formSubmit, setFormSumbit ] = useState(false);  
  const [ buySuccess, setBuySuccess ] = useState(0);
  const [ formValue, setFormValue ] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const order = {
    movies: cartMovies.map((movie) => {
      return{
        id: movie.id,
        title: movie.title,
        quantity: movie.quantity
      }    
    }),
    totalMovies: totalMovies 
  };

  const handleChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  };

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleSubmit = () => {
    setFormSumbit(true);    
    if ((formValue.name !== '' && formValue.name !== null) && (formValue.email !== '' && formValue.email !== null) && (formValue.phoneNumber !== '' && formValue.phoneNumber !== null && !isNaN(formValue.phoneNumber))) {
      saveData({...order, buyer: formValue});
    }      
  };

  const handleCloseDialog = () => {
    setFormSumbit(false);
    setOpenDialog(false);
  };
  
  const saveData = async (newOrder) => {
    const orderFirebase = collection(db, 'ordenes');
    const orderDoc = await addDoc(orderFirebase, newOrder);
    setBuySuccess(orderDoc.id);
    deleteMovies();
  };

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
                  {cartMovies.map((movie) => {
                    const { id, title, overview, poster_path, quantity } = movie;
                    return(
                      <TableRow                      
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >                      
                        <TableCell component="th" scope="row">
                          <Tooltip title={title}>
                            <CardMedia
                              component="img"
                              sx={{ width: 150}}
                              image={TMDB.image_base_url + poster_path}
                              alt={title}
                            />
                          </Tooltip>
                        </TableCell>
                        <TableCell align="left">{title}</TableCell>
                        <TableCell align="left">{overview}</TableCell>
                        <TableCell align="right">{quantity}</TableCell>
                        <TableCell>
                          <Tooltip title="Eliminar">
                            <DeleteIcon sx={{cursor:'pointer'}} onClick={() => deleteMovie(movie)}/>
                          </Tooltip>
                        </TableCell>              
                      </TableRow>
                    )
                  })}
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
            <Button variant="contained" color="success" onClick={handleClickOpenDialog}>
              Finalizar compra
            </Button>
          </Grid>          
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Finalizar compra</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Esta a punto de finalizar la compra, por favor complete los siguientes datos.
              </DialogContentText>
              <TextField
                error = {formSubmit && (formValue.name === '' || formValue.name == null)}
                autoFocus
                required
                name="name"
                margin="dense"
                id="standard-required"
                label="Nombre"
                variant="standard"
                value={formValue.name}
                onChange={handleChange} 
              />
              <TextField                
                required
                error = {formSubmit && (formValue.email === '' || formValue.email == null)}
                margin="dense"
                name="email"
                id="name"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                value={formValue.email}
                onChange={handleChange} 
              />
              <TextField
                required
                error = {formSubmit && (formValue.phoneNumber === '' || formValue.phoneNumber == null || isNaN(formValue.phoneNumber))}
                margin="dense"
                id="standard-number"
                name='phoneNumber'
                label="Telefono"
                type="tel"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                value={formValue.phoneNumber}
                onChange={handleChange} 
              />  
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancelar</Button>
              <Button onClick={handleSubmit}>Finalizar</Button>
            </DialogActions>
          </Dialog>
        </Grid>        
        :
        <Grid container sx={{marginTop:'15px'}}>
          <div className='general-container'>
            { buySuccess !== 0
              ?
                <>
                  <h2>Compra finalizada</h2>
                  <h3>
                    Su id de compra es: {buySuccess}
                  </h3>
                </>
              :
                <h2>Tu carrito está vacío.</h2>
            }                        
            <Link to='/Novedades' style={{textDecoration: "none", color:'white'}}>
              <Button variant="contained">Ver novedades</Button>
            </Link>            
          </div>          
        </Grid>
      }
    </Container>    
  );
}

