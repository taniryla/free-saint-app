import { createContext, useState } from 'react';

const FoodIntakeContext = createContext();


export default const FoodIntakeProvider = ({ children }) => {
    const [foodItems, setFoodItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [log, setLog] = useState(null);

    return (
      <FoodIntakeContext.Provider
        value={{
          users,
          loading
        }}
      >
        {children}
      </FoodIntakeContext.Provider>
    );
}



