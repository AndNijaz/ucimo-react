import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
const URL = "http://localhost:9000";

const CitesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function getData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.log("There was an error");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <CitesContext.Provider value={{ cities: cities, isLoading: isLoading }}>
      {children}
    </CitesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitesContext);
  if (context === undefined)
    throw new Error("You can't use cities context out of it's scope");
  return context;
}

export { CitiesProvider, useCities };
