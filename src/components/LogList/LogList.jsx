import LogListItem from '../LogListItem/LogListItem';
import './LogList.css';
import { useContext } from 'react'
import FoodContext from '../../context/FoodContext/FoodContext';


export default function LogList() {
    const { foods, activeFood } = useContext(FoodContext);


    const foodItems = foods.map(f =>
      <LogListItem
        food={f}
        isSelected={f === activeFood} 
        key={f._id}
      />
    );
  
    return (
      <main className="FoodList">
        {foodItems.length ?
          foodItems
          :
          <span className="no-foodlogs">No Food Logs</span>
        }
      </main>
    );
  }
  