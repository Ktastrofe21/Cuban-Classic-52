// import {places} from '../../data/prov'
import { useTranslations } from '../../i18n/utils.js';


const ButtonsPlaces = ({placeName, lang}) => {

const t = useTranslations(lang);

const elementos = t('prov');
 const prov = elementos.places

  const currentIndex = prov.findIndex(place => place.name === placeName);
  const previousPlace = currentIndex > 0 ? prov[currentIndex - 1] : null;
  const nextPlace = currentIndex < prov.length - 1 ? prov[currentIndex + 1] : null;

  return (
    <div className='px-5 flex sm:flex-row flex-col  gap-5'>
      <a href="https://api.whatsapp.com/send?phone=5358118657"target='_blank'>
       <button className="bg-palete-blue-dark xl:px-10 xl:py-3 py-2 px-5  rounded-lg hover:shadow-lg hover:shadow-palete-blue-light transition">Book Now</button>
       </a>
       <div className='flex justify-around sm:gap-5'>
       {
        previousPlace ? (
          <a href={lang === 'en' ? `/${previousPlace.slug}` : `/${lang}/${previousPlace.slug}`}>
          <button className='border-2 border-white xl:px-10 xl:py-3 py-2 px-5  rounded-lg hover:shadow-lg hover:shadow-white transition'>{previousPlace.name}</button>
          </a>
        ): null
       }
        {
        nextPlace ? (
          <a href={lang === 'en' ? `/${nextPlace.slug}` : `/${lang}/${nextPlace.slug}`}>
          <button  className='border-2 border-white xl:px-10 xl:py-3 py-2 px-5  rounded-lg hover:shadow-lg hover:shadow-white transition'>{nextPlace.name}</button>
          </a>
        ): null
       }
       </div>
    </div>
  )
}

export default ButtonsPlaces