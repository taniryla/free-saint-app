import './LogListItem.css';

export default function FoodListItem({ food, isSelected, handleSelectFood }) {
  return (
    <div className={`FoodListItem${isSelected ? ' selected' : ''}`} onClick={() => handleSelectFood(food)}>
      <div>
        <div>Food Id: <span className="smaller">{food.foodId}</span></div>
        <div className="smaller">{new Date(food.updatedAt).toLocaleDateString()}</div>
      </div>
      <div className="align-rt">
        <div>{food.calorieTotal}</div>
        <div className="smaller">{food.totalQty} Item{food.totalQty > 1 ? 's' : ''}</div>
      </div>
    </div>
  );
}