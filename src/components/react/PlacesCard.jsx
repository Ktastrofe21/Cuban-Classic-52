
import { useEffect, useState } from "react";
import '../../utils/animation.css'
import {  useTranslations } from '../../i18n/utils.js';
const PlacesCard = ({placeName, lang}) => {

    const t = useTranslations(lang);
    
    const itineraryData = t('itinerary');
    const placesData = t('places')
    const matchingItineraries = itineraryData.find((item) =>
    item.place.includes(placeName)
    );
    const [selectedItinerary, setSelectedItinerary] = useState(matchingItineraries.title);

    const handleItineraryChange = (event) => {
        setSelectedItinerary(event.detail);
    };
    useEffect(() => {
        document.addEventListener('itineraryChange', handleItineraryChange);  
    }, []);

    const filteredPlaces = placesData.filter((place) =>
       place.itinerary.includes(selectedItinerary)
    );
   
    return (
    <div className='p-10'>
        <ul className='sm:grid flex-col flex md:grid-cols-3 sm:grid-cols-2 gap-10 '>
        {
            filteredPlaces.map(element =>(
                <li key={element.title} className=' bg-[#202020] w-full rounded-lg flex-col section'>
                   <div className='aspect-[4/3]'>
                    <img src={element.image} alt={element.title} className='object-cover rounded-lg aspect-[4/3]'/>
                   </div>
                   <div className='py-5 text-start px-5'>
                    <h4 className=' py-2 text-2xl font-bold '>{element.title}</h4>
                    <p className='text-palete-white-blue'>{element.description}</p>
                    </div>
                </li>
            ))
        }
        </ul>
    </div>

  )
}

export default PlacesCard