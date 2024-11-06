const initialState = {
  cities: [],
  filteredCities: [],
  city: {},
  loading: false,
};

export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'LOADED':
      return {
        ...state,
        loading: false,
      };
    case 'GET_CITIES':
      return {
        ...state,
        cities: action.payload,
      };
    case 'VIEW_CITY': {
      const _id = action.payload;
      const city = state.cities.find(city => city._id === _id);
      return {
        ...state,
        city: city,
      };
    }
    case 'FILTER_CITIES': {
      const { search, getFavorites, sortByName } = action.payload;
      let filteredResult = state.cities;
      if (search !== '') {
        const searchExp = new RegExp(search, 'i');
        filteredResult = filteredResult.filter(city =>
          searchExp.test(city.city),
        );
      }
      if (getFavorites) {
        filteredResult = filteredResult.filter(city => city.favorite);
      }
      if (sortByName) {
        if (sortByName === '1') {
          filteredResult = filteredResult.sort((a, b) =>
            a.city.localeCompare(b.city),
          );
        }
        if (sortByName === '-1') {
          filteredResult = filteredResult.sort((a, b) =>
            b.city.localeCompare(a.city),
          );
        }
      }

      return {
        ...state,
        filteredCities: filteredResult,
      };
    }
    default:
      return state;
  }
};
