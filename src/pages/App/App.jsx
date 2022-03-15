import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import FoodIntakePage from '../FoodIntakePage/FoodIntakePage';
import FoodHistoryPage from '../FoodHistoryPage/FoodHistoryPage';
import { FoodProvider } from '../../context/FoodContext/FoodContext';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e2e2e3;
    min-height: 100vh;
    margin: 0;
    color: #6D6E71;
    font-family: esteban;
  }

  /* #quicksand {
    font-size: 2vmin;
    font-family: quicksand;
}

  #yellowtail {
    font-family: yellowtail;
    font-size: 15vmin;
} */
`;


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <FoodProvider >
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
    </FoodProvider>
  );
}
