import './ItemContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemContainer = ({titulo}) => {
  return (
    //JSX
    <div className='general-container'>
        <h2>{titulo}</h2>
        <ItemCount 
          stock={5} 
          initial={1}
        />
    </div>
  );
}

export default ItemContainer;
