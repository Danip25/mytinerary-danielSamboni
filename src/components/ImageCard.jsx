/* eslint-disable react/prop-types */
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";

const ImageCard = ({
  image,
  title,
  description = "",
  favorite = false,
  onFav = () => {},
  onClick = () => {},
}) => {
  return (
    <>
      <button
        className="absolute bg-transparent text-white p-2 rounded-lg w-[40px] h-[40px] z-10"
        onClick={onFav}
      >
        {favorite ? <SolidHeart color="#fff" className="text-red-600" /> : <OutlineHeart />}
      </button>
      <article className="relative rounded-lg overflow-hidden shadow-md h-full" onClick={onClick}>
        <span className="z-10">
          <img
            src={image}
            alt={title}
            className="w-full h-32 sm:h-96 object-cover"
          />
          <p className="text-md text-center font-bold py-4 bg-black text-white w-full px-2">
            {title}
          </p>
        </span>
        <h3 className="p-2 text-xs sm:text-sm text-justify">{description}</h3>
      </article>
    </>
  );
};

export default ImageCard;
