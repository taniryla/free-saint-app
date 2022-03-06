import './FoodListItem.css';

export default function FoodListItem({ foodItem, handleAddToFoodLog, edamanData, setLoading }) {
  return (
    <>
      <div className='FoodListItem grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
         {/* {edamanData.map((data) => ( */}
           
        {/* // <img src="{data.food.image}" alt="Food Image" />
          // <div className="name">{data.text}</div>
          // <div className="addtofoodlog">
          //      {/* <span>Calories: {edamanData.food.nutrients}</span> */}
                 {/* <button className="btn-sm" onClick={() => handleAddToFoodLog(foodItem._id)}>
                 ADD
                 </button>
            </div>
         ))} */}
      </div>
    </>
  )
}