import { createContext, useState } from 'react';

const FoodHistoryContext = createContext();

export const FoodHistoryProvider = ({ children }) => {
    const [foods, setFoods] = useState([]);
    const [activeFood, setActiveFood] = useState(null);

    return (
        <FoodHistoryContext.Provider
          value={{
            foods,
            food,
            activeFood,
            handleSelectFood
          }}
        >
          {children}
        </FoodHistoryContext.Provider>
      );
}

export default FoodHistoryContext;