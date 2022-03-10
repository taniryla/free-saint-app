import { createContext, useEffect, useState } from 'react';

const FoodContext = createContext();

const EDAMAN_APP_ID = process.env.REACT_APP_EDAMAN_APP_ID
const EDAMAN_APP_KEY = process.env.REACT_APP_EDAMAN_APP_KEY


export const FoodProvider = ({ children }) => {
    // Edaman
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchWord, setSearchWord] = useState('');
    // FoodIntake
    const [foodItems, setFoodItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [log, setLog] = useState(null);
    //FoodHistory
    const [foods, setFoods] = useState([]);
    const [activeFood, setActiveFood] = useState(null);

    
    async function fetchEdamanData (searchWord) {
        const res = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${EDAMAN_APP_ID}&app_key=${EDAMAN_APP_KEY}&ingr=${searchWord}`)
        let edamanData = await res.json();
        console.log(edamanData);
        setData(edamanData);
        setLoading(false);
      }
    
      useEffect(() => {
      fetchEdamanData();
    }, [])



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
            log,
            setLog,
            activeCat,
            setActiveCat,
            foodItems,
            setFoodItems,
            searchWord,
            setSearchWord,
            // handleAddToFoodLog,
            // handleChangeQty,
            // handleFoodLog
          }}
        >
          {children}
        </FoodContext.Provider>
      );
}

export default FoodContext;