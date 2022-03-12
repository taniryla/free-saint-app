import { createContext, useEffect, useState , useRef} from 'react';
import * as foodAPI from '../../utilities/food-api';
import * as itemsAPI from '../../utilities/items-api';



const FoodContext = createContext();

const EDAMAN_APP_ID = process.env.REACT_APP_EDAMAN_APP_ID
const EDAMAN_APP_KEY = process.env.REACT_APP_EDAMAN_APP_KEY


export const FoodProvider = ({ children }) => {
    // Edaman
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [searchWord, setSearchWord] = useState('');
    // FoodIntake
    const [foodItems, setFoodItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [log, setLog] = useState(null);
    //FoodHistory
    const [foods, setFoods] = useState([]);
    const [activeFood, setActiveFood] = useState(null);
    const categoriesRef = useRef([]);

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
        const log = await ordersAPI.getFoodLog();
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

      return (
        <FoodContext.Provider
          value={{
            data,
            loading,
            setLoading,
            foods,
            setFoods,
            // food,
            activeFood,
            setActiveFood,
            // handleSelectFood,
            // categories,
            fetchEdamanData,
            foodItems,
            log,
            setLog,
            activeCat,
            setActiveCat,
            setFoodItems,
            searchWord,
            setSearchWord,
            handleAddToFoodLog,
            handleChangeQty,
            handleFoodLog
          }}
        >
          {children}
        </FoodContext.Provider>
      );
}

export default FoodContext;