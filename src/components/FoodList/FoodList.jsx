import './FoodList.css';
import FoodListItem from '../FoodListItem/FoodListItem';

export default function FoodList({ foodItems, handleAddToFoodLog, edamanData, setLoading }) {
  const items = foodItems.map(item =>
    <FoodListItem
      key={item._id}
      handleAddToFoodLog={handleAddToFoodLog}
      foodItem={item}
      edamanData={edamanData}
      setLoading={setLoading}
    />
  );
  return (
    <main className="FoodList">
      {items}
    </main>
  );
}