import { useState } from 'react';
import { TextField, TextareaAutosize, Button, Grid, Paper, Typography, Snackbar, Alert }  from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { send } from 'emailjs-com';

export default function ContactForm() {  
  const [ formSubmit, setFormSumbit ] = useState(false)
  const [ openSnackBar, setOpenSnackBar] = useState(false);
  const [ severitySnackBar, setSeveritySnackBar] = useState('success');
  const [ textSnackBar, setTextSnackBar] = useState('');
  const [ formValue, setFormValue ] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    setFormSumbit(true);
    if ((formValue.name !== '' && formValue.name !== null) && (formValue.email !== '' && formValue.email !== null) && (formValue.phoneNumber !== '' && formValue.phoneNumber !== null && !isNaN(formValue.phoneNumber))) {
      sendMail({formValue});
    }      
  };

  const sendMail = () => {
    send(
      'service_tskwvmf',
      'template_1z1v1sc',
      formValue,
      'Tcv5SbJ158k233Fer'
    ).then((response) => {
        handleResetForm();
        setSeveritySnackBar('success');
        setTextSnackBar('Email enviado correctamente');
      })
      .catch((err) => {
        setSeveritySnackBar('error');
        setTextSnackBar('Error al enviar el mail');
        console.log(err);
      })
      .finally( () => {
        setOpenSnackBar(true);
      });      
  }

  const handleResetForm = () => {
    setFormValue({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    })
  }



  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };

  return(
    <Grid container sx={{marginTop:'15px', marginBottom:'15px'}} spacing={2}>      
      <Paper sx={{margin:'auto'}} elevation={5}>
        <Grid item xs={10} sx={{margin:'auto'}}>
          <h2>Enviar comentarios</h2>
          <h3>Complete los datos para enviar el mail.</h3>
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
          <Typography variant="caption" display="block" gutterBottom>
            Mensaje
          </Typography>
          <TextareaAutosize
            required
            name='message'
            minRows={3}
            placeholder="Mensaje..."
            style={{ width: '100%' }}
            value={formValue.message}
            onChange={handleChange} 
          />    
        </Grid>
        <Grid container sx={{marginTop:'15px', marginBottom:'15px'}} spacing={2}>      
          <Grid item xs={12} md={6} sx={{textAlign:'center'}}>
            <Button variant="outlined" color="error" endIcon={<DeleteIcon />} onClick={handleResetForm}>
              Borrar
            </Button>
          </Grid>
          <Grid item xs={12} md={6} sx={{textAlign:'center'}}>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Paper>      
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
        <Alert onClose={handleCloseSnackBar} severity={severitySnackBar} sx={{ width: '100%' }}>
          {textSnackBar}
        </Alert>
      </Snackbar>
    </Grid> 
  )
}