import { useEffect, useState } from "react";
import ItineraryTag from "./ItineraryTag";
import {  useTranslations } from '../../i18n/utils.js';

function Itinerary({place, lang}) {
const t = useTranslations(lang);


const itineraryData = t('itinerary');

  const [itinerary, setItinerary] = useState();
  const matchingItineraries = itineraryData.filter((item) =>
    item.place.includes(place)
    
  );
  const handleItineraryChanges = (item) => {
    setItinerary(item);
    document.dispatchEvent(new CustomEvent('itineraryChange', { detail:`${item}`}))
};

  useEffect(() => {
    const firstItinerary = matchingItineraries[0];
      document.dispatchEvent(new CustomEvent('itineraryChange', { detail:`${firstItinerary.title}`}))
      setItinerary(firstItinerary.title );    
  
  }, [setItinerary]);
  
 
  return (
    <div className="flex z-20 lg:justify-center justify-start w-full items-center lg:overflow-x-hidden overflow-auto lg:whitespace-normal whitespace-nowrap ">
      {
        matchingItineraries.map(item => (
          <div key={item.title} className="flex items-center ">

                <ItineraryTag
                  title={item.title}
                  isSelected={itinerary === `${item.title}`}
                  onClick={() => handleItineraryChanges(item.title)}
                  itinerary = {item.title}
                />
      </div>
        ))
      }
   
</div>
  )
}

export default Itinerary
