import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip, CardMedia } from '@mui/material';
import IconCart from '@mui/icons-material/Shop';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import TMDB from '../../util/TMDB';
import { useState, useContext } from "react";
import CartContext from '../../context/CartContext';
import './CartWidget.css';

export default function AccountMenu() {
  const { deleteMovie, deleteMovies, cartMovies } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Mi carrito">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}><IconCart/></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}        
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to='/Carrito' style={{textDecoration: "none", color:'white'}}>
          <MenuItem>
            <ListItemIcon>
              <ShoppingCartIcon fontSize="small" />
            </ListItemIcon>
            Comprar
          </MenuItem>
        </Link>
        <MenuItem onClick={deleteMovies}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          Eliminar
        </MenuItem>
        <Divider />
        {cartMovies.map((movie) => {
          const { id, title, poster_path, quantity } = movie;
          return(
            <MenuItem key={id} sx={{cursor:'default'}}>
              {quantity}
              <CardMedia
                component="img"
                sx={{ width: 50, marginRight:2, marginLeft:1}}
                image={TMDB.image_base_url + poster_path}
                alt={title}
              />
              {title}
              <DeleteIcon sx={{cursor:'pointer'}} onClick={() => deleteMovie(movie)}/>
            </MenuItem>
          )
        })}
      </Menu>
    </>
  );
}