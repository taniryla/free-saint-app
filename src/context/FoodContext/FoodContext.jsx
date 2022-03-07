import { createContext, useState } from 'react';

const FoodContext = createContext();

const EDAMAN_URL = process.env.REACT_APP_GITHUB_URL
const EDAMAN_APP_ID = process.env.REACT_APP_EDAMAN_APP_ID
const EDAMAN_APP_KEY = process.env.REACT_APP_EDAMAN_APP_KEY


export const FoodProvider = ({ children }) => {
    // Edaman
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // FoodIntake
    const [foodItems, setFoodItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [log, setLog] = useState(null);
    //FoodHistory
    const [foods, setFoods] = useState([]);
    const [activeFood, setActiveFood] = useState(null);

    const fetchEdamanData = async() => {
        const res = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${EDAMAN_APP_ID}&app_key=${EDAMAN_APP_KEY}&ingr='banana'`)
        let edamanData = await res.json();
        edamanData = JSON.parse(edamanData).data;
        console.log(edamanData);
        setData(edamanData);
        setLoading(false);
      }

      return (
        <FoodContext.Provider
          value={{
            edamanData,
            loading,
            setLoading,
            // foods,
            // food,
            // activeFood,
            // handleSelectFood,
            // categories,
            // log,
            // setActiveCat,
            user,
            setUser,
            // foodItems,
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