import {Box, Card, CardContent, CardMedia, Typography, Button} from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ id, title, voteAverage, posterUrl }) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 150}}
        image={'https://image.tmdb.org/t/p/w1280' + posterUrl}
        alt={title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {'Puntuacion: ' + voteAverage}
          </Typography>
        </CardContent>
        <Button variant="outlined" as={Link} to={`/movie/${id}`} sx={{ width: 100, margin: 'auto' }}>+ Info</Button>
      </Box>       
    </Card>
  );
}

export default Item;

