import './FoodList.css';
import FoodListItem from '../FoodListItem/FoodListItem';

export default function FoodList({ foodItems, handleAddToFoodLog }) {
  const items = foodItems.map(item =>
    <FoodListItem
      key={item._id}
      handleAddToFoodLog={handleAddToFoodLog}
      foodItem={item}
    />
  );
  return (
    <main className="FoodList">
      {items}
    </main>
  );
}