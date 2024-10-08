import { useState, useEffect } from "react";
import cities from "../api/carousel.json";

const citiesPerSlide = 4; // Número de ciudades por slide
const totalSlides = Math.ceil(cities.length / citiesPerSlide);

const Carousel = () => {
  const [slideActual, setSlideActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideActual((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  const handlePrev = () => {
    setSlideActual((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setSlideActual((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const [isAutoPlay] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isAutoPlay) {
      intervalId = setInterval(() => {
        handleNext();
      }, 5000); // Cambiar cada 5 segundos
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlay])

  return (
    <section className="min-h-[80vh] px-4 md:px-24 py-8 flex flex-col gap-16 items-center justify-center">
        <h2 className="text-3xl font-bold text-center">Popular Mytineraries</h2>
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
                key={index}
                className={`w-full ${
                  index === slideActual ? "block" : "hidden"
                }`}
              >
                <div className="grid grid-cols-4 gap-4 transition-all fade-custom">
                  {cities
                    .slice(index * citiesPerSlide, (index + 1) * citiesPerSlide)
                    .map((city) => (
                      <div key={city.place} className="text-center relative rounded-md overflow-hidden transition-all fade-custom">
                        <img
                          src={city.image}
                          alt={city.place}
                          className="w-full h-96 object-cover"
                        />
                        <p className="absolute text-xs bottom-0 py-4 bg-black text-white w-full px-2">{city.place}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSlideActual(index)}
                  className={` transition-all w-4 h-4 rounded-full mx-2 ${
                    index === slideActual ? "bg-blue-950" : "bg-blue-200"
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
