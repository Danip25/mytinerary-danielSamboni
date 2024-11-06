import { useNavigate } from 'react-router-dom';
import {
  HeartIcon as HeartSolid,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import {
  ArrowLeftCircleIcon,
  HeartIcon as HeartOutline,
} from '@heroicons/react/24/outline';
import GoogleMap from '../components/GoogleMap';
import Loader from '../components/Loader';
import { useSelector } from 'react-redux';
import ItineraryCard from '../components/ItineraryCard';

const CityPage = () => {
  const city = useSelector(state => state?.city);
  const loading = useSelector(state => state?.loading);
  // const [city, setCity] = useState(null);
  // const { id } = useParams();
  const navigate = useNavigate();

  // const fetchCity = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     const city = await getCity(id);
  //     console.log(city, id);
  //     setCity(city);
  //   } catch (error) {
  //     console.error(error);
  //     navigate("/cities");
  //   } finally {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1000);
  //   }
  // }, [id, navigate]);
  // const onFav = async () => {
  //   try {
  //     await setFavorite(city._id, !city.favorite);
  //     fetchCity();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchCity();
  // }, [id, fetchCity]);
  if(!city || !Object.keys(city).length) {
    navigate("/cities")
    return (
      <div className='flex-1 p-4 flex flex-col justify-center h-full'>
         <Loader />
      </div>
    )
  }

  return (
    <div className="flex-1 p-4 flex flex-col justify-center h-full">
      {loading && <Loader />}
      {!loading && city && (
        <article className="flex flex-col gap-4 max-w-[1280px] mx-auto">
          <span className="relative flex items-center gap-4">
            <span>
              <h2 className="text-2xl font-bold">{city.city}</h2>
              <p className="italic text-gray-400 text-lg">{city.country}</p>
            </span>
            {
              false && (
                <>
                <button
              className="bg-red-400 hover:bg-red-600 text-white p-2 rounded-lg w-[40px] h-[40px] transition-colors"
              onClick={() => navigate('/cities')}
            >
              <TrashIcon />
            </button>
            <button
              className="bg-amber-400 hover:bg-amber-600 text-white p-2 rounded-lg w-[40px] h-[40px] transition-colors"
              onClick={() => navigate('/cities')}
            >
              <PencilIcon />
            </button></>
              )
            }
            <button
              className="absolute right-0 bg-black text-white p-2 rounded-lg w-[40px] h-[40px]"
              onClick={() => navigate('/cities')}
            >
              <ArrowLeftCircleIcon />
            </button>
          </span>
          <section className="flex flex-col relative overflow-hidden rounded-md">
            <img
              src={city.image}
              alt={city.city}
              className="w-full h-96 object-cover"
            />
            <span className="flex-1 w-full bg-gradient-to-t from-[#000] to-transparent absolute bottom-0 text-white font-bold text-lg p-4 min-h-[30%] flex items-end justify-between">
              <p className="">{city.place}</p>
              <button
                className="text-white"
                // onClick={onFav}
              >
                {city.favorite ? (
                  <HeartSolid color="#f00" className="w-6 h-6" />
                ) : (
                  <HeartOutline color="#fff" className="w-6 h-6" />
                )}
              </button>
            </span>
          </section>
          <p>{city.description}</p>
          <div className="flex gap-4 px-4 justify-center flex-col items-center">
            <section className="w-full sm:w-3/4 rounded-md overflow-hidden shadow-2xl">
              <GoogleMap lat={city.location.lat} long={city.location.long} />
            </section>
            <table className="w-full sm:w-3/4 border border-[#0005] rounded-md overflow-hidden">
              <thead>
                <tr>
                  <th className="bg-black text-white p-2">Itineraries</th>
                </tr>
              </thead>
              <tbody>
                {city.itineraries.map(itinerary => (
                  <ItineraryCard key={itinerary._id} {...itinerary} />
                ))}
                {city.itineraries.length === 0 && (
                  <tr>
                    <td className="p-2">
                      <section>
                        <h3 className="text-black text-4xl text-center font-bold">
                          OH NO
                        </h3>
                        <img
                          src="/earth_sad.svg"
                          className="w-40 h-40 mx-auto my-4"
                        />
                        <p className="text-center text-gray-400 text-xl ">
                          No itineraries yet for this city
                        </p>
                      </section>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <a
            className="bg-black text-white p-2 rounded-lg text-center font-bold cursor-pointer"
            href={`https://www.booking.com/searchresults.es.html?ss=${city.city.replace(
              ' ',
              '+',
            )}&map=1&efdco=1&lang=es&ac_langcode=es&ac_suggestion_list_length=5&search_selected=true&checkin=2024-10-20&checkout=2024-10-21&group_adults=1&no_rooms=1&group_children=0#map_opened/`}
            target="_blank"
          >
            Book Now
          </a>
        </article>
      )}
    </div>
  );
};

export default CityPage;