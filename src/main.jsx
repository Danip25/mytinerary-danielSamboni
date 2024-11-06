import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import CitiesPage from './pages/CitiesPage.jsx';
import CityPage from './pages/CityPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import RegisterPage from './pages/RegisterPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Add routes here */}
          <Route index element={<LandingPage />} />
          <Route path="cities" element={<CitiesPage />} />
          <Route path="cities/:id" element={<CityPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
