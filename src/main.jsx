import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import CitiesPage from "./pages/CitiesPage.jsx";
import CityPage from "./pages/CityPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* Add routes here */}
        <Route index element={<LandingPage />} />
        <Route path="cities" element={<CitiesPage />} />
        <Route path="cities/:id" element={<CityPage />} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
