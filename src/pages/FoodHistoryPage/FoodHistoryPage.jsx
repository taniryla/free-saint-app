import './FoodHistoryPage.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as foodAPI from '../../utilities/food-api';
import Logo from '../../components/Logo/Logo';
import FoodList from '../../components/FoodList/FoodList';
import FoodDetail from '../../components/FoodDetail/FoodDetail';
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext/FoodContext';

export default function FoodHistoryPage() {
  const { setFoods, setActiveFood, activeFood } = useContext(FoodContext);


  useEffect(function () {
    // Load previous foods
    async function fetchFoodLogHistory() {
      const foods = await foodAPI.getFoodLogHistory();
      setFoods(foods);
      // If no orders, activeOrder will be set to null below
      setActiveFood(foods[0] || null);
    }
    fetchFoodLogHistory();
  }, []);

  

  /*--- Rendered UI --- */
  return (
    <main className="FoodHistoryPage">
      <aside>
        <Logo />
        <Link to="/foods/new" className="button btn-sm">NEW FOOD</Link>
        {/* <UserLogOut user={user} setUser={setUser} /> */}
      </aside>
      <FoodList
      />
      <FoodDetail
        food={activeFood}
      />
    </main>
  );
}