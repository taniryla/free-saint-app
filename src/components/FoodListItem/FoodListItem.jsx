import './FoodListItem.css';

export default function FoodListItem({ foodItem, handleAddToFoodLog }) {
  return (
    <div className="FoodListItem">
      <div className="emoji flex-ctr-ctr">{foodItem.emoji}</div>
      <div className="name">{foodItem.name}</div>
      <div className="buy">
        <span>Calories: {Math.round(foodItem.price)}</span>
        <button className="btn-sm" onClick={() => handleAddToFoodLog(foodItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}