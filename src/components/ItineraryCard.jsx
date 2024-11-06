import {
  CurrencyDollarIcon as CurrencyDollarIconSolid,
  HandThumbUpIcon as HandThumbUpIconSolid,
} from '@heroicons/react/24/solid';
import {
  CurrencyDollarIcon as CurrencyDollarIconOutline,
  HandThumbUpIcon as HandThumbUpIconOutlined,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
const ItineraryCard = itinerary => {
  const [expanded, setExpanded] = useState(false);
  return (
    <tr key={itinerary._id}>
      <td className="">
        <article className="p-2 border-b border-b-black cursor-pointer mb-2 hover:bg-blue-100 transition-colors ">
          <span className="font-bold">{itinerary.name}</span>
          <p>{itinerary.duration} hours</p>
          <span className="flex gap-2">
            {Array.from({ length: 5 })
              .fill('o', itinerary.price)
              .map((value, i) => (
                <span key={i}>
                  {!value ? (
                    <CurrencyDollarIconSolid className="w-6 h-6 text-green-700" />
                  ) : (
                    <CurrencyDollarIconOutline className="w-6 h-6 text-green-700" />
                  )}
                </span>
              ))}
          </span>
          <p className="font-bolder text-xs">{itinerary.hashtags.join(' ')}</p>
          <section className="flex gap-4 items-center justify-between">
            <span className="flex gap-2">
              {itinerary.likes.length > 0 ? (
                <span className="flex gap-2 items-center">
                  <HandThumbUpIconSolid className="w-6 h-6 text-blue-700" />
                  <p>{itinerary.likes}</p>
                </span>
              ) : (
                <span className="flex gap-2 items-center">
                  <HandThumbUpIconOutlined className="w-6 h-6 text-blue-700" />
                </span>
              )}
            </span>
            <span className="flex items-center gap-2">
              <img
                src={itinerary.author.avatar}
                alt={itinerary.author.name}
                className="w-8 h-8 rounded-full"
              />
              <p className="text-xs">{itinerary.author.name}</p>
            </span>
          </section>
          {expanded && (
            <section className="border-t border-b border-gray-900 my-4 bg-black animate-pulse transition-all rounded-md">
              <p className="text-center min-h-20 flex items-center justify-center text-white">
                Under Construction
              </p>
            </section>
          )}
          <button
            className="p-2 rounded-lg text-center cursor-pointer font-extrabold text-xs w-full"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>
        </article>
      </td>
    </tr>
  );
};

export default ItineraryCard;
