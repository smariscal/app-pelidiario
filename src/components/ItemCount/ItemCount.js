import './ItemCount.css';
import {Button, Grid, Typography} from '@mui/material'; 
import { useState } from 'react';

const ItemCount = ({stock, initial}) => {
    const[cant, setCant] = useState(initial);

    const addCant= () =>{
        if (cant < stock)
            setCant(cant + 1);
    }

    const removeCant= () =>{
        if (cant > 1)
            setCant(cant - 1);
    }

    return (
        //JSX
        <div className='general-container'>
            <Grid sx={{width: 300}} container spacing={2}>
                <Grid item xs={4}>
                    <Button variant="contained" onClick={removeCant}>-</Button>                
                </Grid>
                <Grid item xs={3}>
                    <Typography textAlign="center">{cant}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" onClick={addCant}>+</Button>
                </Grid>
                <Grid item xs={11}>
                    <Button variant="outlined">Agregar al carrito</Button>
                </Grid>            
            </Grid>            
        </div>
    );
}

export default ItemCount;
