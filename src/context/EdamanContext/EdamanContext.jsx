import { createContext, useState } from 'react';

const EdamanContext = createContext();

const EDAMAN_URL = process.env.REACT_APP_GITHUB_URL
const EDAMAN_APP_ID = process.env.REACT_APP_EDAMAN_APP_ID
const EDAMAN_APP_KEY = process.env.REACT_APP_EDAMAN_APP_KEY


export default const EdamanProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchEdamanData = async() => {
        const res = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${EDAMAN_APP_ID}&app_key=${EDAMAN_APP_KEY}&ingr='banana'`)
        let edamanData = await res.json();
        edamanData = JSON.parse(edamanData).data;
        console.log(edamanData);
        setData(edamanData);
        setLoading(false);
      }

      return (
        <EdamanContext.Provider
          value={{
            users,
            loading
          }}
        >
          {children}
        </EdamanContext.Provider>
      );
}