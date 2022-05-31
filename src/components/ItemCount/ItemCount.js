import './ItemCount.css';
import {Button, Grid} from '@mui/material'; 
import { useState } from 'react';

const ItemCount = ({stock, initial}) => {
    const[cant, setCant] = useState(initial);

    const addCant= () =>{
        if (cant < stock)
            setCant(prev => prev + 1);
    }

    const removeCant= () =>{
        if (cant > 1)
            setCant(prev => prev - 1 );
    }

    return (
        //JSX        
        <Grid container xs={4} sx={{margin:'auto', textAlign:'center'}} spacing={2}>
            <Grid item xs={6} md={4}>
                <Button variant="contained" onClick={removeCant}>-</Button>                
            </Grid>            
            <Grid item xs={9} md={4}>
                <Button variant="outlined" disabled>{cant}</Button>
            </Grid>
            <Grid item xs={6} md={4}>
                <Button variant="contained" onClick={addCant}>+</Button>
            </Grid>            
            <Grid item xs={12}>
                <Button variant="outlined">Agregar al carrito</Button>
            </Grid>            
        </Grid>
    );
}

export default ItemCount;
