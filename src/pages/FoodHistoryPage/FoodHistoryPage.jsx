import './FoodHistoryPage.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as foodAPI from '../../utilities/food-api';
import Logo from '../../components/Logo/Logo';
import LogList from '../../components/LogList/LogList';
import FoodDetail from '../../components/FoodDetail/FoodDetail';
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext/FoodContext';
import { PageLayout } from '../../common/index';


export default function FoodHistoryPage() {
  const { setFoods, setActiveFood, activeFood, foods } = useContext(FoodContext);
  

  /*--- Rendered UI --- */
  return (
    <PageLayout user={user} setUser={setUser}>
      <main className="FoodHistoryPage">
        <aside>
          <Link to="/foods/new" className="button btn-sm">NEW FOOD</Link>
        </aside>
        <LogList />
        <FoodDetail
          food={activeFood}
          />
      </main>
    </PageLayout>
  );
}