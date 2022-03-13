import * as itemsAPI from '../../utilities/items-api';   
import { useContext } from 'react'
import FoodContext from '../../context/FoodContext/FoodContext';



export default function SearchBar() {
    const { searchWord, setSearchWord, setFoodItems, foodItems } = useContext(FoodContext);


  function handleChange(evt) {
    setSearchWord(evt.target.value)
  }
  
  function search(evt){
    evt.preventDefault()
    setFoodItems(searchWord)
    setSearchWord('')
  }

  async function getAPI(searchWord) {
    const getAPI = await itemsAPI.getAll();
    if (foodItems === getAPI) {
      setFoodItems(searchWord)
    }
  }

  return (
    <>
      <form onSubmit={search}>
        <input value={searchWord} name="search" placeholder="search" onChange={handleChange}/>
        <button>Search</button>
      </form>
    </>
  )
}