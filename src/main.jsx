import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import CitiesPage from "./pages/CitiesPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Add routes here */}
          <Route index element={<LandingPage/>} />
          <Route path="cities" element={<CitiesPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
