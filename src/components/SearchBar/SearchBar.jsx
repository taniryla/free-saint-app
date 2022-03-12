
   
import { useContext } from 'react'
import FoodContext from '../../context/FoodContext/FoodContext';



export default function SearchBar() {
    const { searchWord, setSearchWord, fetchEdamanData } = useContext(FoodContext);


  function handleChange(evt) {
    setSearchWord(evt.target.value)
  }
  
  function search(evt){
    evt.preventDefault()
    fetchEdamanData(searchWord)
    setSearchWord('')
  }

  return (
    <>
      <h1>Hi</h1>
      <form onSubmit={search}>
        <input value={searchWord} name="search" placeholder="search" onChange={handleChange}/>
        <button>Search</button>
      </form>
    </>
  )
}