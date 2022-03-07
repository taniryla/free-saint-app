import { createContext, useState } from 'react';

const FoodHistoryContext = createContext();

export default const FoodHistoryProvider = ({ children }) => {
    const [foods, setFoods] = useState([]);
    const [activeFood, setActiveFood] = useState(null);

    return (
        <FoodHistoryContext.Provider
          value={{
            users,
            loading
          }}
        >
          {children}
        </FoodHistoryContext.Provider>
      );
}