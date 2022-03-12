import './FoodListItem.css';
import Spinner from '../Layout/Spinner';
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext/FoodContext';

export default function FoodListItem() {
  const { edamanData, handleAddToFoodLog, foodItem } = useContext(FoodContext);

  
    return (
      <>
      {edamanData.map(data => {
        <div className='FoodListItem grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
           <img src={data.image} alt="Food Image" />
            <div className="name">{data.name}</div>
            <div className="addtofoodlog">
                  <span>Calories: {data.calories}</span> 
                  <button className="btn-sm" onClick={() => handleAddToFoodLog(foodItem._id)}>
                   ADD
                   </button>
              </div>
        </div> 
      })} 
      </>
      )
  
}
