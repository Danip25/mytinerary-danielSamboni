import { useState, useEffect, useMemo, useCallback } from 'react';
import _cities from '../api/carousel.json';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { viewCityAction } from '../store/actions/cities.actions';

const Carousel = () => {
  const isMobile = useMemo(() => window.innerWidth < 768, []);
  const citiesPerSlide = useMemo(() => (isMobile ? 2 : 4), [isMobile]); // Número de ciudades por slide
  const [slideActual, setSlideActual] = useState(0);

  const dispatch = useDispatch();
  const loadCities = useSelector(state => state.cities);
  const isLoading = useSelector(state => state.loading);

  const cities = useMemo(() => {
    if (!isLoading && loadCities.length === 0) return _cities;
    return loadCities;
  }, [loadCities, isLoading]);

  const totalSlides = useMemo(
    () => Math.ceil(cities.length / citiesPerSlide),
    [cities, citiesPerSlide],
  );

  const navigation = useNavigate();

  // const fetchCities = useCallback(async () => {
  //   try {
  //     setIsLoading(true);
  //     const citiesData = await getCities();
  //     console.log(citiesData);
  //     setCities(citiesData);
  //   } catch (error) {
  //     console.error(error);
  //     setCities(_cities);
  //   } finally {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 1000);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchCities();
  // }, [fetchCities]);

  const goToDetails = id => {
    dispatch(viewCityAction(id));
    navigation(`/cities/${id}`);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideActual(prevSlide => (prevSlide + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(intervalo);
  }, [totalSlides, slideActual]);

  const handlePrev = () => {
    setSlideActual(prevSlide => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const handleNext = useCallback(() => {
    setSlideActual(prevSlide => (prevSlide + 1) % totalSlides);
  }, [totalSlides]);

  const _renderCities = useCallback(
    index => {
      const totalCities = cities.slice(
        index * citiesPerSlide,
        (index + 1) * citiesPerSlide,
      );
      return (
        <div
          className={`grid grid-cols-${totalCities.length} gap-4 transition-all fade-custom w-full`}
        >
          {totalCities.map((city, i) => (
            <div
              key={city.place}
              className="opacity-0 text-center relative rounded-md overflow-hidden transition-all fade-custom"
              onClick={() =>
                cities?.every(c => Object.keys(c).includes('_id')) &&
                goToDetails(city._id)
              }
              style={{ animationDelay: i * 0.3 + 's' }}
            >
              <img
                src={city.image}
                alt={city.place}
                className="w-full h-96 object-cover"
              />
              <p className="absolute text-xs bottom-0 py-4 bg-black text-white w-full px-2">
                {city.place}
              </p>
            </div>
          ))}
        </div>
      );
    },
    [cities, citiesPerSlide, navigation],
  );

  if (isLoading)
    return (
      <div className="min-h-[80vh] px-4 md:px-24 py-8 flex flex-col gap-16 items-center justify-center">
        <h2 className="text-3xl font-bold text-center">Popular Trips</h2>
        <div className="flex w-full">
          <div
            className={`grid grid-cols-${citiesPerSlide} gap-4 transition-all fade-custom w-full`}
          >
            {Array.from({ length: citiesPerSlide }).map((_, index) => (
              <div
                key={`slide-${index}`}
                className="text-center relative rounded-md overflow-hidden transition-all fade-custom"
              >
                <div className="animate-pulse bg-gray-300 h-96 w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  return (
    <section className="min-h-[80vh] px-4 md:px-24 py-8 flex flex-col gap-16 items-center justify-center">
      <h2 className="text-3xl font-bold text-center">Popular Trips</h2>
      <div className="relative">
        <div className="flex flex-col">
          <button
            onClick={handlePrev}
            className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-16 w-16 z-[1000]"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-16 w-16 z-[1000]"
          >
            &#10095;
          </button>
          <div className="flex w-full">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={`slide-${index}`}
                className={`w-full ${
                  index === slideActual ? 'block' : 'hidden'
                }`}
              >
                {_renderCities(index)}
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={`slide-${index}`}
                  onClick={() => setSlideActual(index)}
                  className={` transition-all w-4 h-4 rounded-full mx-2 ${
                    index === slideActual ? 'bg-blue-950' : 'bg-blue-200'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
