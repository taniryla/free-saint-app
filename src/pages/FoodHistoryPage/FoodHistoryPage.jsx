import './FoodHistoryPage.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as foodAPI from '../../utilities/food-api';
import Logo from '../../components/Logo/Logo';
import FoodList from '../../components/FoodList/FoodList';
import FoodDetail from '../../components/FoodDetail/FoodDetail';

export default function FoodHistoryPage({ user, setUser, setFoods, setActiveFood, activeFood }) {
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

  /*--- Event Handlers --- */
  function handleSelectFood(food) {
    setActiveFood(food);
  }

  /*--- Rendered UI --- */
  return (
    <main className="FoodHistoryPage">
      <aside>
        <Logo />
        <Link to="/foods/new" className="button btn-sm">NEW FOOD</Link>
        {/* <UserLogOut user={user} setUser={setUser} /> */}
      </aside>
      <FoodList
        handleSelectFood={handleSelectFood}
      />
      <FoodDetail
        food={activeFood}
      />
    </main>
  );
}