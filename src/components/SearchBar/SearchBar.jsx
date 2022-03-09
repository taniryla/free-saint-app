
   
import { useState, useContext } from 'react'
import FoodContext from '../../context/FoodContext/FoodContext';



export default function SearchBar() {
    const { user, setUser, edamanData, loading, setLoading, searchWord, setSearchWord, fetchEdamanData } = useContext(FoodContext);

    const { foodId, label, nutrients: { ENERC_KCAL }, image} = edamanData.parsed.food;

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