import {Box, Card, CardContent, CardMedia, Typography, Grid} from '@mui/material';
import ItemCount from '../../components/ItemCount/ItemCount'

const Item = ({ movie }) => {
  return (
    <Grid container spacing={3}>
      <Grid sx={{ margin:'auto' }} item xs={10} key={movie.id}>
        <Card>
          <CardMedia
            component="img"
            image={'https://image.tmdb.org/t/p/w1280' + movie.backdrop_path}
            alt={movie.title}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h4">
                {movie.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {movie.overview}
              </Typography>
            </CardContent>                    
          </Box>    
          <ItemCount
            stock={15}
            initial={1}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Item;