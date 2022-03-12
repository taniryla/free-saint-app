import './LineItem.css';
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext/FoodContext';


export default function LineItem({ isLogged, lineItem }) {
  const { handleChangeQty } = useContext(FoodContext);


  return (
    <div className="LineItem">
      <div className="flex-ctr-ctr">{lineItem.item.emoji}</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineItem.item.name}</span>
        {/* <span>Calories: {Math.round(foodItem.price)}</span> */}
      </div>
      <div className="qty" style={{ justifyContent: isLogged && 'center' }}>
        {!isLogged &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
          >−</button>
        }
        <span>{lineItem.qty}</span>
        {!isLogged &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
          >+</button>
        }
      </div>
    </div>
  );
}