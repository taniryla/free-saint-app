import { useContext, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as foodAPI from '../../utilities/food-api';
import './FoodIntakePage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import FoodList from '../../components/FoodList/FoodList';
import CategoryList from '../../components/CategoryList/CategoryList';
import FoodDetail from '../../components/FoodDetail/FoodDetail';
import SearchBar from '../../components/SearchBar/SearchBar';
import FoodContext from '../../context/FoodContext/FoodContext';

export default function FoodIntakePage() {
  const { categoriesRef, setFoodItems, setActiveCat, setLog, foodItems, activeCat, log } = useContext(FoodContext);


  
  return (
    <main className="FoodIntakePage">
      <asideleft>
        <SearchBar />
        <br></br>
      <FoodList
        foodItems={foodItems && foodItems.filter(item => item.category.name === activeCat)}
      />
      </asideleft>
      <asideright>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          />
        <Link to="/foods" className="button btn-sm">FOOD LOG HISTORY</Link>
          <br></br>
          <br></br>
        {/* <UserLogOut user={user} setUser={setUser} /> */}
          <br></br>
          <br></br>
      <FoodDetail
        food={log}
      />
      </asideright>
    </main>
  );
}