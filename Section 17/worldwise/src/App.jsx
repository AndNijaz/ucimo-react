import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { useEffect, useState } from "react";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

const URL = "http://localhost:9000";

function App() {
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
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<p>Form</p>} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
