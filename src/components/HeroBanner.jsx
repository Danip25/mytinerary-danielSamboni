import { useNavigate } from "react-router-dom";
import FligthVideo from "../assets/flight.mp4";

const HeroBanner = () => {

    const navigation = useNavigate();

    const handleNavigation = () => {
      navigation("/cities");
    };
  return (
    <section className="h-[100vh] w-full">
    <video
      src={FligthVideo}
      autoPlay
      autoFocus
      loop
      muted
      className="absolute top-0 left-0 h-[100vh] flex-1 object-cover w-full"
    ></video>
    <article className="z-[2] w-full h-full bg-[#0002] backdrop-blur-sm flex-1 flex flex-col gap-4 p-4 justify-center items-center m-auto">
      <h1 className="text-white text-6xl font-bold">My Trips</h1>
      <p className="text-white text-xl">
      Find your perfect trip, designed by insiders who know and love their cities!
      </p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
        onClick={handleNavigation}
      >
        Explore Now
      </button>
    </article>
  </section>
  )
}

export default HeroBanner