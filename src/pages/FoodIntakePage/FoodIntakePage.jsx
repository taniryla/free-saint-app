import { useContext, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as foodAPI from '../../utilities/food-api';
import './FoodIntakePage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import FoodList from '../../components/FoodList/FoodList';
import CategoryList from '../../components/CategoryList/CategoryList';
import FoodDetail from '../../components/FoodDetail/FoodDetail';
import SearchBar from '../../components/SearchBar/SearchBar';
import FoodContext from '../../context/FoodContext/FoodContext';
import { PageLayout } from '../../common/index';
import { StyledLink } from '../../common/Header';


export default function FoodIntakePage({ user, setUser }) {
  const { categoriesRef, setFoodItems, setActiveCat, setLog, foodItems, activeCat, log, userLogOut} = useContext(FoodContext);


  
  return (
    <PageLayout>
    <main className="FoodIntakePage">
      <aside>
        <Logo />
        <br></br>
      <FoodList
        foodItems={foodItems && foodItems.filter(item => item.category.name === activeCat)}
        />
      </aside>
      <aside>
        <CategoryList
          categories={categoriesRef.current}
          />
        <SearchBar />
        <br></br>
        <Link to='/foods' style={{fontSize: '1.5vmin', padding: '1vmin'}} className='btn-outline-dark'>Click Here For Food Log History</Link>
      <FoodDetail
        food={log}
        />
      </aside>
    </main>
    </PageLayout>
  );
}