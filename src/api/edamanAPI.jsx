import { useEffect } from 'react';
import { createContext, useEffect, useState , useRef} from 'react';
import * as itemsAPI from '../../utilities/items-api';
  
  
  const EDAMAN_APP_ID = process.env.REACT_APP_EDAMAN_APP_ID
  const EDAMAN_APP_KEY = process.env.REACT_APP_EDAMAN_APP_KEY

  // retrieve food data from Edaman
  export default function EdamanData() {
    const [data, setData] = useState([]);
  
    async function fetchEdamanData (searchWord) {
      const res = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${EDAMAN_APP_ID}&app_key=${EDAMAN_APP_KEY}&ingr=${searchWord}`)
      let edamanData = await res.json();
      console.log(edamanData);
      setData(edamanData);
      setLoading(false);

      useEffect(function() {
        async function getItems() {
          const items = await itemsAPI.getAll();
          categoriesRef.current = items.reduce((cats, item) => {
          const cat = item.category.name;
          return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setFoodItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
    async function getFoodLog() {
      const log = await ordersAPI.getFoodLog();
      setLog(log);
    }
    getFoodLog();
  }, []);



    useEffect(() => {
    fetchEdamanData();
  }, [])
   
    return (
        <div>
        {data.map(() => {
                <FoodIntakePage 
                edamanData={edamanData}
                setLoading={setLoading}
                loading={loading}
                />
            })}
        </div>

    )
  }
}