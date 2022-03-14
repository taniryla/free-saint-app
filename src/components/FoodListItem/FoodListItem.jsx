import './FoodListItem.css';
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext/FoodContext';

export default function FoodListItem({ food }) {
  const { handleAddToFoodLog } = useContext(FoodContext);


    return (
      <>
        <div className="card">
         <div className='FoodListItem grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            <img className="card-img-top img-fluid img-thumbnail rounded float-left" src={food.image} alt="Food Image" /> 
            <div className="addtofoodlog card=body">
                  <div className="card-title">{food.name}</div>
                  <span className="card-text">{food.calories} cal</span> 
                  <br></br>
                   <button className="btn btn-sm btn-block" onClick={() => handleAddToFoodLog(food._id)}>
                    ADD
                    </button> 
            </div>
          </div>
        </div>
      </>    
        )
}
