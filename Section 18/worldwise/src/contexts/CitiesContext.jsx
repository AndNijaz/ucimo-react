import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
const URL = "http://localhost:9000";

const CitesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState({});

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

  // { cityName, country, date, notes }
  async function addCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data);
      setCities((cities) => [...cities, data]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
    // setCities(() => [...cities, city]);
  }

  async function removeCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${URL}/cities/${id}`, {
        method: "DELETE",
      });
      await res.json();
      // console.log(data);
      // setCurrentCity(data);
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      throw new Error("Failed To Fetch");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitesContext.Provider
      value={{
        cities: cities,
        isLoading: isLoading,
        addCity: addCity,
        getCity,
        currentCity,
        removeCity,
      }}
    >
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
