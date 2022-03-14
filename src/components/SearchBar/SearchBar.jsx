import './SearchBar.css';
import * as itemsAPI from '../../utilities/items-api';   
import { useContext } from 'react'
import FoodContext from '../../context/FoodContext/FoodContext';



export default function SearchBar() {
    const { searchWord, handleChange, search } = useContext(FoodContext);

 
  return (
    <>
      <form className="SearchBar" onSubmit={search}>
        <p>
          <i className="fa fa-search input-icon" style={{fontSize: '3vmin'}} aria-hidden="true"></i>
          <input value={searchWord} name="search" placeholder="Search for your food" style={{width: '24vw'}} onChange={handleChange}/>
        </p>
      </form>
    </>
      )
}