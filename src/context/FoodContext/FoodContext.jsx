import { createContext, useEffect, useState , useRef} from 'react';
import * as foodAPI from '../../utilities/food-api';
import * as itemsAPI from '../../utilities/items-api';
import { useNavigate } from 'react-router-dom';


const FoodContext = createContext();


export const FoodProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchWord, setSearchWord] = useState('');
    const [foodItem, setFoodItem] = useState([]);
    // FoodIntake
    const [foodItems, setFoodItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [log, setLog] = useState(null);
    //FoodHistory
    const [foods, setFoods] = useState([]);
    const [activeFood, setActiveFood] = useState(null);
    const categoriesRef = useRef([]);
    const navigate = useNavigate();



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


 /*-- Search --*/

function handleChange(evt) {
  setSearchWord(evt.target.value)
}

// need to prevent default and get the searchWord from the database through itemsAPI.getall
function search(evt){
  evt.preventDefault()
  searchResults(searchWord);
}

// find in the foodItems array an exact match to the searchWord
function searchResults(searchWord) {
  const foodItem = foodItems.filter(food => food.name.includes(searchWord))
  setFoodItem(foodItem);
}


      return (
        <FoodContext.Provider
          value={{
            loading,
            foodItem,
            setFoodItem,
            searchWord,
            setSearchWord,
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
            categoriesRef,
            handleChange,
            search,
            searchResults
          }}
        >
          {children}
        </FoodContext.Provider>
      );
}

export default FoodContext;