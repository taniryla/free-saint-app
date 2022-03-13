import './FoodListItem.css';
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext/FoodContext';

export default function FoodListItem({ food }) {
  const { handleAddToFoodLog } = useContext(FoodContext);


    return (
      <>
         <div className='FoodListItem grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            <img src={food.image} alt="Food Image" /> 
            <div className="addtofoodlog">
                  <div className="name">{food.name}</div>
                  <span>Calories: {food.calories}</span> 
                  <br></br>
                   <button className="btn-sm" onClick={() => handleAddToFoodLog(food._id)}>
                    ADD
                    </button> 
            </div>
          </div>
      </>    
        )
}
