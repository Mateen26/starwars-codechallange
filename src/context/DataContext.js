import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [loadedData, setLoadedData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = (apiName) => {
    debugger;
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/${apiName}`)
      .then((response) => {
        if (response?.status === 200) {
          setLoadedData(response.data);
        } else {
          alert("Error Fetching Data From Api");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <DataContext.Provider value={{ loadedData, loading, loadData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
