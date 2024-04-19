import { LocaleConfig } from 'vitepress'
import { locales as siteLocales } from './config/site'
import { langs,defaultLang } from './config/langs'
import { getNav } from './config/nav'

export type LocalesConfig<Config = any> = Record<string, Config>

export function localesOf<Config = any>(data:Record<string, Config>):LocalesConfig<Config>{
  return data;
}

export const locales = genLocales()

function genLocales():LocaleConfig{
    const config:any = {}
    for(const name in langs){
      const lang = langs[name];
      config[name] = {
        ...langs[name],
        ...siteLocales[name],
        themeConfig: {
          nav: getNav(lang.lang),
        }
      }
    }
    return config
 }