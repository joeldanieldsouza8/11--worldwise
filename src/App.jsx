// 3rd Party Imports
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Import pages
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:8000";

function App() {
  // Define state
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Define side effects
  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const json = await response.json();
        setCities(json);
        // console.log(json); // debug
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  console.log(cities); // debug

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate to="cities" replace />} />
          {/* <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          /> */}
          {/* This uses params to get the id. See Notion for more explanation. */}
          <Route path="cities/:cityID" element={<City />} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
