import {Grid} from '@mui/material'; 
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ movies }) => {
  return (
    //JSX
    <div className='container'>
      <Grid container spacing={3}>
        {        
          movies.map( (m) => {
            return(
              <Grid item xs={12} md={4} lg={3} key={m.id}>
                <Item id={m.id} title={m.title} voteAverage={m.vote_average} posterUrl={m.poster_path}/>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  );
}

export default ItemList;