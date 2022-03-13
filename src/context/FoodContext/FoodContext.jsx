import { createContext, useEffect, useState , useRef} from 'react';
import * as foodAPI from '../../utilities/food-api';
import * as itemsAPI from '../../utilities/items-api';
import { useNavigate } from 'react-router-dom';


const FoodContext = createContext();


export const FoodProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchWord, setSearchWord] = useState('');
    // FoodIntake
    const [foodItems, setFoodItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [log, setLog] = useState(null);
    //FoodHistory
    const [foods, setFoods] = useState([]);
    const [activeFood, setActiveFood] = useState(null);
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

function handleSelectFood(food) {
  setActiveFood(food);
}

console.log(foodItems);

      return (
        <FoodContext.Provider
          value={{
            loading,
            setLoading,
            foods,
            setFoods,
            activeFood,
            setActiveFood,
            handleSelectFood,
            foodItems,
            log,
            setLog,
            activeCat,
            setActiveCat,
            setFoodItems,
            handleAddToFoodLog,
            handleChangeQty,
            handleFoodLog,
            categoriesRef
          }}
        >
          {children}
        </FoodContext.Provider>
      );
}

export default FoodContext;