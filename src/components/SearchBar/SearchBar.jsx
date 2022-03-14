import * as itemsAPI from '../../utilities/items-api';   
import { useContext } from 'react'
import FoodContext from '../../context/FoodContext/FoodContext';



export default function SearchBar() {
    const { searchWord, handleChange, search } = useContext(FoodContext);

 
  return (
    <>
      <form onSubmit={search}>
        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
        <input value={searchWord} name="search" placeholder="Search food + category" onChange={handleChange}/>
      </form>
    </>
  )
}