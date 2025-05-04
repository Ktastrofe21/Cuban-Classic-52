import { useEffect, useState } from "react";
import '../../utils/animation.css'
import { useTranslations } from '../../i18n/utils.js';

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
        <div className='p-6'>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                filteredPlaces.map(element =>(
                    <li key={element.title} className='bg-gray-800 rounded-lg flex-col section w-full max-w-[350px] mx-auto'>
                        <div className='aspect-[4/3]'>
                            <img 
                                src={element.image} 
                                alt={element.title} 
                                className='object-cover w-full h-full rounded-t-lg'
                            />
                        </div>
                        <div className='py-4 px-4 text-start'>
                            <h4 className='text-xl font-semibold mb-2'>{element.title}</h4>
                            <p className='text-palete-white-blue text-sm'>{element.description}</p>
                        </div>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default PlacesCard