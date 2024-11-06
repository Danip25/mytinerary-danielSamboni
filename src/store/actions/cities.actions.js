import { getCities } from '../../services/cities.services';
import { store } from '../store';
export const getCitiesAction = async () => {
  try {
    store.dispatch({
      type: 'LOADING',
    });
    const cities = await getCities();
    return {
      type: 'GET_CITIES',
      payload: cities,
    };
  } catch (error) {
    return {
      type: 'ERROR',
      payload: error,
    };
  } finally {
    setTimeout(() => {
      store.dispatch({
        type: 'LOADED',
      });
    }, 1000);
  }
};

export const viewCityAction = _id => {
  return {
    type: 'VIEW_CITY',
    payload: _id,
  };
};

export const setFavoriteAction = city => {
  return {
    type: 'SET_FAVORITE',
    payload: city,
  };
};

export const filterCitiesAction = (search, getFavorites, sortByName) => {
  return {
    type: 'FILTER_CITIES',
    payload: { search, getFavorites, sortByName },
  };
};
