import { useEffect, useMemo, useState } from 'react';
import ImageCard from '../components/ImageCard';
import FiltersBar from '../components/FiltersBar';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Toggle from '../components/Toggle';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterCitiesAction,
  viewCityAction,
} from '../store/actions/cities.actions';

const CitiesPage = () => {
  // const [cities, setCities] = useState([]);
  const [search, setSearch] = useState('');
  const [getFavorites, setGetFavorites] = useState(false);
  const [sortByName, setSortByName] = useState(false);
  const [sortOrder, setSortOrder] = useState('1');

  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const cities = useSelector(state => state.cities);

  const filteredCities = useSelector(state => state.filteredCities);

  const citiesToRender = useMemo(() => {
    if (search || getFavorites || sortByName) return filteredCities;
    return cities;
  }, [search, getFavorites, sortByName, filteredCities, cities]);

  useEffect(() => {
    let sortByNameValue = undefined;

    if (sortByName) {
      sortByNameValue = sortOrder;
    }

    dispatch(filterCitiesAction(search, getFavorites, sortByNameValue));
  }, [search, getFavorites, sortByName, sortOrder, dispatch]);

  const navigation = useNavigate();

  const goToCityDetail = _id => {
    dispatch(viewCityAction(_id));
    navigation(`/cities/detail`);
  };

  // const onFav = async (id, favorite) => {
  //   try {
  //     await setFavorite(id, !favorite);
  //     await fetchCities();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const fetchCities = useCallback(async () => {
  //   try {
  //       console.log({sortOrder});
  //     setLoading(true);
  //     const cities = await getCities({
  //       search: search.trim(),
  //       getFavorites,
  //       sortByName: sortByName ? (sortOrder) : undefined,
  //     });
  //     setCities(cities);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1000);

  //   }
  // }, [getFavorites, search, sortByName, sortOrder]);

  // useEffect(() => {
  //   fetchCities();
  // }, [fetchCities]);

  return (
    <div className="flex-1 min-h-[100vh] flex flex-col">
      <main className="flex-1 flex flex-col items-center gap-4 p-4">
        <FiltersBar
          onSearch={setSearch}
          value={search}
          buttons={
            <>
              <Toggle label="See Favorites" onChange={setGetFavorites} />
              <section className="flex gap-4 items-center sm:px-4 py-2  rounded-md border border-dashed bg-white">
                <Toggle label="Sort by name" onChange={setSortByName} />
                <label
                  htmlFor="sortByName"
                  className="flex items-center cursor-pointer"
                >
                  <select
                    id="sortByName"
                    className="sm:p-2 border border-gray-300 rounded-lg w-full text-xs"
                    onChange={e => setSortOrder(e.target.value)}
                    disabled={!sortByName}
                  >
                    <option value="-1">Ascendente</option>
                    <option value="1">Descendente</option>
                  </select>
                </label>
              </section>
            </>
          }
        />
        {loading && <Loader />}
        {!loading && (
          <section className="w-full p-4 grid sm:grid-cols-3 gap-4 my-4 flex-1">
            {!!citiesToRender.length &&
              citiesToRender.map(city => (
                <main key={city._id} className="flex">
                  <ImageCard
                    key={city._id}
                    image={city.image}
                    title={city.city}
                    favorite={city.favorite}
                    description={city.description}
                    // onFav={() => onFav(city)}
                    onClick={() => goToCityDetail(city._id)}
                  />
                </main>
              ))}
            {!citiesToRender.length && (
              <section className="col-span-3">
                <h3 className="text-black text-4xl text-center font-bold">
                  OH NO
                </h3>
                <img src="/earth_sad.svg" className="w-40 h-40 mx-auto my-4" />
                <p className="text-center text-gray-400 text-xl ">
                  No cities found, try with other search criteria
                </p>
              </section>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default CitiesPage;
