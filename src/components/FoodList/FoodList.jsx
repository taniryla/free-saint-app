import './FoodList.css';
import FoodListItem from '../FoodListItem/FoodListItem';
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext/FoodContext';


export default function FoodList() {
  const { foodItems, foodItem } = useContext(FoodContext);

  const searchItems = foodItem && foodItem.map(searchItem =>
    <FoodListItem
      key={searchItem._id}
      food={searchItem}
  />
  );
  const items = foodItems && foodItems.map(item =>
    <FoodListItem
      key={item._id}
      food={item}
  />
  );
  return (
    <main className="FoodList">
      { searchItems && searchItems.length ? searchItems : items }
    </main>
  );
}