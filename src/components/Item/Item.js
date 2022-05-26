import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ title, voteAverage, posterUrl }) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 150}}
        image={'https://image.tmdb.org/t/p/w1280' + posterUrl}
        alt={title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {'Puntuacion: ' + voteAverage}
          </Typography>
        </CardContent>
        <ItemCount 
          stock={5} 
          initial={1}
        />
      </Box>       
    </Card>
  );
}

export default Item;