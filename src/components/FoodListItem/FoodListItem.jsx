import './FoodListItem.css';
import Spinner from '../Layout/Spinner';

export default function FoodListItem({ foodItem, handleAddToFoodLog, edamanData, loading, setLoading }) {
  
  // const {
  //   foodId,
  //   label,
  //   nutrients,
  //   category,
  //   categoryLabel,
  //   image
  // } = edamanData.parsed.food;
  
  if (!loading) {
    return (
      <>
        <div className='FoodListItem grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {/* {edamanData.map((data) => (
             
           <img src="{data.food.image}" alt="Food Image" />
            <div className="name">{data.parsed.food.label}</div>
            <div className="addtofoodlog">
                  <span>Calories: {data.food.nutrients}</span> 
                  <button className="btn-sm" onClick={() => handleAddToFoodLog(foodItem._id)}>
                   ADD
                   </button>
              </div>
         
          ))}  */}
        </div>
      </>
    )
  } else {
    return <Spinner />
  }
}