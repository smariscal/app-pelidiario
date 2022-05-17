import './ItemContainer.css';

const ItemContainer = ({titulo}) => {
  return (
    //JSX
    <div className='general-container'>
        <h2>{titulo}</h2>
    </div>
  );
}

export default ItemContainer;
