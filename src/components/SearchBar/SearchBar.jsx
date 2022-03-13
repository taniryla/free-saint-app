import * as itemsAPI from '../../utilities/items-api';   
import { useContext } from 'react'
import FoodContext from '../../context/FoodContext/FoodContext';



export default function SearchBar() {
    const { searchWord, setSearchWord, setFoodItems, foodItems } = useContext(FoodContext);

  // set evt.target.value to setSearchWord

  function handleChange(evt) {
    setSearchWord(evt.target.value)
  }
  
  // need to prevent default and get the searchWord from the database through itemsAPI.getall
  function search(evt){
    evt.preventDefault()
    // setFoodItems(searchWord)
    setSearchWord('')
  }

  async function getAPI(searchWord) {
    const getAPI = await itemsAPI.getAll();
    if (foodItems === getAPI) {
      setFoodItems(searchWord)
    }
    // add item to the food list


  }

  return (
    <>
      <form onSubmit={search}>
        <input value={searchWord} name="search" placeholder="Search for your food" onChange={handleChange}/>
      </form>
    </>
  )
}