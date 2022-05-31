import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const News = () => {
  return (
    //JSX
    <>
      <ItemListContainer
          titulo='Novedades'
      />
      <ItemDetailContainer/>
    </>
  );
}

export default News;