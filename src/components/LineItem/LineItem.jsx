import './LineItem.css';
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext/FoodContext';


export default function LineItem({ isLogged, lineItem }) {
  const { handleSelectFood, handleChangeQty } = useContext(FoodContext);

console.log(lineItem.counter, 'lineItem.counter');
  return (
    <>
    <div className={ `LineItem${isLogged ? 'selected' : '' }`} onClick={() => handleSelectFood(lineItem)} >
      <div className="flex-ctr-ctr">{lineItem.item.calories} cal</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineItem.item.name}</span>
      </div>
      <div className="qty" style={{ justifyContent: isLogged && 'center' }}>
        {!isLogged &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.counter - 1)}
          >−</button>
        }
        
        <span>&nbsp;{lineItem.counter}&nbsp;</span>
        {!isLogged &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.counter + 1)}
          >+</button>
        }
      </div>
    </div>
    </>
  );
}