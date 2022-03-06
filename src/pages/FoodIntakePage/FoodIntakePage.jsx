import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as foodAPI from '../../utilities/food-api';
import './FoodIntakePage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import FoodList from '../../components/FoodList/FoodList';
import CategoryList from '../../components/CategoryList/CategoryList';
import FoodDetail from '../../components/FoodDetail/FoodDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function FoodIntakePage({ user, setUser, edamanData, setLoading }) {
  const [foodItems, setFoodItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [log, setLog] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setFoodItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
    async function getFoodLog() {
      const log = await foodAPI.getFoodLog();
      setLog(log);
    }
    getFoodLog();
  }, []);
  // Providing an empty 'dependency array'
  // results in the effect running after
  // the FIRST render only




  /*-- Event Handlers --*/
  async function handleAddToFoodLog(itemId) {
    const updatedLog = await foodAPI.addItemToLog(itemId);
    setLog(updatedLog);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedLog = await foodAPI.setItemQtyInLog(itemId, newQty);
    setLog(updatedLog);
  }

  async function handleFoodLog() {
    await foodAPI.foodLog();
    navigate('/foods');
  }

  return (
    <main className="FoodIntakePage">
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          log={setLog}
          setActiveCat={setActiveCat}
        />
        <Link to="/foods" className="button btn-sm">FOOD LOG HISTORY</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <FoodList
        foodItems={foodItems.filter(item => item.category.name === activeCat)}
        handleAddToFoodLog={handleAddToFoodLog}
        edamanData={edamanData}
        setLoading={setLoading}
      />
      <FoodDetail
        food={log}
        handleChangeQty={handleChangeQty}
        handleFoodLog={handleFoodLog}
      />
    </main>
  );
}