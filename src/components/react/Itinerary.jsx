import { useEffect, useState } from "react";
import ItineraryTag from "./ItineraryTag";
import { useTranslations } from '../../i18n/utils.js';

function Itinerary({ place, lang }) {
  const t = useTranslations(lang);
  const itineraryData = t('itinerary');
  const [selectedItinerary, setSelectedItinerary] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const matchingItineraries = itineraryData.filter((item) => 
    item.place.includes(place)
  );

  const handleItineraryClick = (title) => {
    setSelectedItinerary(title);
    setDropdownOpen(false);
    document.dispatchEvent(new CustomEvent('itineraryChange', { detail: title }));
  };

  useEffect(() => {
    if (matchingItineraries.length > 0 && !selectedItinerary) {
      handleItineraryClick(matchingItineraries[0].title);
    }
  }, [matchingItineraries]);

  if (isMobile) {
    return (
      <div className="relative w-full max-w-xs mx-auto">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="
            w-full 
            bg-white/20 dark:bg-gray-700/80
            border border-white/30
            rounded-lg
            px-4 py-3
            text-left
            flex justify-between items-center
          "
        >
          <span className="text-white font-medium">
            {selectedItinerary || matchingItineraries[0]?.title}
          </span>
          <svg
            className={`w-5 h-5 ml-2 text-white transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {dropdownOpen && (
          <div className="
            absolute 
            z-10 
            w-full 
            mt-1 
            bg-white/90 dark:bg-gray-800/90
            backdrop-blur-sm
            rounded-lg
            shadow-lg
            border border-white/20
            overflow-hidden
          ">
            {matchingItineraries.map(item => (
              <button
                key={item.title}
                onClick={() => handleItineraryClick(item.title)}
                className={`
                  w-full 
                  px-4 
                  py-3 
                  text-left 
                  transition-colors
                  ${
                    selectedItinerary === item.title
                      ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
              >
                {item.title}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {matchingItineraries.map(item => (
        <div key={item.title} className="flex-shrink-0">
          <ItineraryTag
            title={item.title}
            isSelected={selectedItinerary === item.title}
            onClick={handleItineraryClick}
          />
        </div>
      ))}
    </div>
  );
}

export default Itinerary;
