import {
  useContext,
  useState,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import { createContext } from "react";
const URL = "http://localhost:9000";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };
    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    dispatch({ type: "loading" });

    async function getData() {
      try {
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "Error while fetching the cities.",
        });
      }
    }
    getData();
  }, []);

  // { cityName, country, date, notes }
  async function addCity(newCity) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "Error while creating the city.",
      });
    }
  }

  async function removeCity(id) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${URL}/cities/${id}`, {
        method: "DELETE",
      });
      await res.json();

      dispatch({ type: "city/deleted", payload: id });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "Error while deleting the city.",
      });
    }
  }

  const getCity = useCallback(async function getCity(id) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "Error while setting the current city.",
      });
    }
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        addCity,
        getCity,
        currentCity,
        removeCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("You can't use cities context out of its scope");
  return context;
}

export { CitiesProvider, useCities };
