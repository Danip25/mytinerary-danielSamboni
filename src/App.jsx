import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCitiesAction } from './store/actions/cities.actions.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCities = async () => {
      dispatch(await getCitiesAction());
    };
    fetchCities();
  }, []);
  return (
    <div className="min-h-[100vh] flex flex-col overflow-x-hidden">
      <Navbar />
      <Outlet className="flex-1" />
      <Footer />
    </div>
  );
}

export default App;
