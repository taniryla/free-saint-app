  import { useEffect } from 'react';
  
  

  // retrieve food data from Edaman
  export default function EdamanData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchEdamanData()
    }, []);
  
    const fetchEdamanData = async() => {
      const res = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_EDAMAN_APP_ID}&app_key=${process.env.REACT_APP_EDAMAN_APP_KEY}&ingr='banana'`)
      let edamanData = await res.json();
      edamanData = JSON.parse(edamanData).data;
      console.log(edamanData);
      setData(edamanData);
      setLoading(false);
    }
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