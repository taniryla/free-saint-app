  import { useEffect } from 'react';
  
  

  // retrieve food data from Edaman
  export default function EdamanData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchEdamanData()
    }, []);
  
   
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