import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [loadedData, setLoadedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedDetailsType, setSelectedDetailsType] = useState("");

  const loadData = (apiName) => {
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

  const loadMore = (url) => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (response?.status === 200) {
          setLoadedData((prevData) => ({
            ...prevData,
            results: [...prevData.results, ...response.data.results],
            next: response.data.next,
          }));
        } else {
          alert("Error Fetching More Data From Api");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <DataContext.Provider
      value={{
        loadedData,
        loading,
        loadData,
        loadMore,
        setSelectedCharacter,
        selectedCharacter,
        setSelectedData,
        selectedData,
        setLoading,
        setSelectedDetailsType,
        selectedDetailsType,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
