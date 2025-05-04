import { ui, defaultLang } from './ui';

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return detectNavigationTranslate();
  return detectNavigationTranslate();
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

function detectNavigationTranslate (){
  const browserLang = navigator.language;
  console.log("lenguaje navegador"+browserLang);
  if (browserLang.includes("es")){
    return "es";
  }
  else{
    return "en";
  }
}