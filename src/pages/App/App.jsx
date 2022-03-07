import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import FoodIntakePage from '../FoodIntakePage/FoodIntakePage';
import FoodHistoryPage from '../FoodHistoryPage/FoodHistoryPage';
import { FoodProvider } from '../../context/FoodContext/FoodContext';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <FoodContext>
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
        <AuthPage setUser={setUser} />
      }
    </main>
    </FoodContext>
  );
}
