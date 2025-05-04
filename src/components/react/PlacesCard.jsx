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
        <div className='px-6 pb-12 pt-6 flex-1'> {/* Cambiado a flex-1 */}
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
            {
                filteredPlaces.map(element =>(
                    <li key={element.title} className='bg-gray-800 rounded-lg flex-col section w-full max-w-[400px]'>
                        <div className='aspect-[4/3]'>
                            <img 
                                src={element.image} 
                                alt={element.title} 
                                className='object-cover w-full h-full rounded-t-lg'
                            />
                        </div>
                        <div className='py-5 px-5 text-start'>
                            <h4 className='text-xl font-semibold mb-3'>{element.title}</h4>
                            <p className='text-palete-white-blue text-base'>{element.description}</p>
                        </div>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default PlacesCard