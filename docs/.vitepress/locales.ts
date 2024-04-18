import  {LocaleConfig } from 'vitepress'
import { locales as siteLocales } from './config/site'
import { langs,defaultLang } from './config/langs'
import { getNav } from './config/nav'


export const locales = genLocales()

export function lang() {
  return currentLang.lang;
}
export let currentLang = {
  lang: defaultLang.lang
};

function genLocales():LocaleConfig{
    const config:any = {}
    for(const name in langs){
      const lang = langs[name];
      config[name] = {
        ...langs[name],
        ...siteLocales.data[name],
        themeConfig:{
          nav: getNav(lang.lang),
        }
      }
    }
    return config
 }