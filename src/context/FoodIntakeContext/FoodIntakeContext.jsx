import { createContext, useState } from 'react';

const FoodIntakeContext = createContext();


export const FoodIntakeProvider = ({ children }) => {
    const [foodItems, setFoodItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [log, setLog] = useState(null);

    return (
      <FoodIntakeContext.Provider
        value={{
          categories,
          log,
          setActiveCat,
          user,
          setUser,
          loading,
          setLoading,
          foodItems,
          handleAddToFoodLog,
          edamanData,
          food,
          handleChangeQty,
          handleFoodLog
        }}
      >
        {children}
      </FoodIntakeContext.Provider>
    );
}

export default FoodIntakeContext;



