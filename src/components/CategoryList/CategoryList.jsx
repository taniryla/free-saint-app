import './CategoryList.css';
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext/FoodContext';

export default function CategoryList({ categories }) {
  const { activeCat, setActiveCat, setFoodItem, setSearchWord } = useContext(FoodContext);

  function handleCatClick(cat){
    setFoodItem([]);
    setActiveCat(cat);
    setSearchWord('')
  }

  const cats = categories.map(cat =>
    <li
      key={cat}
      className={cat === activeCat ? 'active' : ''}
      // FYI, the below will also work, but will give a warning
      // className={cat === activeCat && 'active'}
      onClick={() => handleCatClick(cat)}
    >
      {cat}
    </li>
  );
  
  
  return (
    <ul className="CategoryList">
      {cats}
    </ul>
  );
}
