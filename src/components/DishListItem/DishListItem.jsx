import './DishListItem.css';

export default function DishListItem({ dish, isSelected, handleSelectDish }) {
  return (
    <div className={`DishListItem${isSelected ? ' selected' : ''}`} onClick={() => handleSelectDish(dish)}>
      <div>
        <div>Dish Id: <span className="smaller">{dish.dishId}</span></div>
        <div className="smaller">{new Date(dish.updatedAt).toLocaleDateString()}</div>
      </div>
      <div className="align-rt">
        <div className="smaller">{dish.totalQty} Item{dish.totalQty > 1 ? 's' : ''}</div>
      </div>
    </div>
  );
}