import React, { useState, useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import FoodIntakePage from '../FoodIntakePage/FoodIntakePage';
import FoodHistoryPage from '../FoodHistoryPage/FoodHistoryPage';
import { FoodProvider } from '../../context/FoodContext/FoodContext';
import { createGlobalStyle } from 'styled-components';
import FoodContext from '../../context/FoodContext/FoodContext';
import * as itemsAPI from '../../utilities/items-api';
import * as foodAPI from '../../utilities/food-api';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e2e2e3;
    min-height: 100vh;
    margin: 0;
    color: #6D6E71;
    font-family: quicksand;
  }

  /* #esteban{
    font-size: 2vmin;
    font-family: esteban;
}

  #yellowtail {
    font-family: yellowtail;
    font-size: 15vmin;
} */
`;


export default function App() {
  const [user, setUser] = useState(getUser());
  const { setFoodItems, setActiveCat, setLog, setFoods, setActiveFood, categoriesRef } = useContext(FoodContext);


 

  useEffect(function() {
    if (!user) return;
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
    async function fetchFoodLogHistory() {
      const foods = await foodAPI.getFoodLogHistory();
      setFoods(foods);
      // If no orders, activeOrder will be set to null below
      setActiveFood(foods[0] || null);
    }
    fetchFoodLogHistory();
  }, [user]);

  return (
    <>
    <GlobalStyle />
    <main className="App">
      { user ?
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/foods/new" element={<FoodIntakePage user={user} setUser={setUser} />} />
            <Route path="/foods" element={<FoodHistoryPage user={user} setUser={setUser} />} />
            {/* redirect to /foods/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/foods/new" />} />
          </Routes>
        </>
        :
        <AuthPage user={user} setUser={setUser} />
      }
    </main>
    </>
  );
}
