// import {places} from '../../data/prov'
import { useTranslations } from '../../i18n/utils.js';

const ButtonsPlaces = ({ placeName, lang }) => {
  const t = useTranslations(lang);
  
  const elementos = t('prov');
  const prov = elementos.places;
  
  const currentIndex = prov.findIndex(place => place.name === placeName);
  const previousPlace = currentIndex > 0 ? prov[currentIndex - 1] : null;
  const nextPlace = currentIndex < prov.length - 1 ? prov[currentIndex + 1] : null;

  // Textos traducidos
  const bookNowText = {
    en: "Book Now",
    es: "Reservar Ahora",
    ru: "Забронируйте сейчас",
    pt: "Reservar Agora",
    de: "Jetzt buchen",
    fr: "Réservez maintenant",
    it: "Prenota ora"
  }[lang] || "Book Now";

  const buttonClass = "w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1";
  const navButtonClass = 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-emerald-500 dark:border-emerald-400 py-3 px-6 rounded-lg hover:shadow hover:shadow-emerald-500/30 transition-all duration-200 whitespace-nowrap';

  return (
    <div className='px-5 flex flex-col sm:flex-row gap-4 w-full'>
      {/* Botón principal (WhatsApp) */}
      <a 
        href="https://api.whatsapp.com/send?phone=5354560600" 
        target='_blank'
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        <button className={buttonClass}>
          {bookNowText}
        </button>
      </a>

      {/* Navegación entre lugares */}
      <div className='flex gap-3 w-full sm:w-auto overflow-x-auto pb-2'>
        {previousPlace && (
          <a 
            href={lang === 'en' ? `/${previousPlace.slug}` : `/${lang}/${previousPlace.slug}`}
            className="flex-shrink-0"
          >
            <button className={navButtonClass}>
              ← {previousPlace.name}
            </button>
          </a>
        )}
        
        {nextPlace && (
          <a 
            href={lang === 'en' ? `/${nextPlace.slug}` : `/${lang}/${nextPlace.slug}`}
            className="flex-shrink-0"
          >
            <button className={navButtonClass}>
              {nextPlace.name} →
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ButtonsPlaces;