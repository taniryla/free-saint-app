import './FoodList.css';
import FoodListItem from '../FoodListItem/FoodListItem';
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext/FoodContext';


export default function FoodList() {
  const { foodItems } = useContext(FoodContext);


  const items = foodItems && foodItems.map(item =>
    <FoodListItem
      key={item._id}
      food={item}
  />
  );
  return (
    <main className="FoodList">
      {items}
    </main>
  );
}