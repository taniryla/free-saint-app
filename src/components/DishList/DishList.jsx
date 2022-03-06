import DishListItem from '../DishListItem/DishListItem';
import './DishList.css';

export default function DishList({ dishes, activeDish, handleSelectDish }) {
  const dishItems = dishes.map(d =>
    <DishListItem
      dish={d}
      isSelected={d === activeDish} 
      handleSelectDish={handleSelectDish}
      key={d._id}
    />
  );

  return (
    <main className="DishList">
      {dishItems.length ?
        dishItems
        :
        <span className="no-dishes">No Dishes</span>
      }
    </main>
  );
}