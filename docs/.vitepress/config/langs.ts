import { lang } from "../locales";


 interface Lang{
    lang:string,
    label:string,
    dir?:string
  }
  
  export const langs : Record<string,Lang> = {
    'zh-CN':{
      lang: 'zh-CN',
      label: '简体中文',
    },
    en:{
      lang: 'en',
      label: 'English',
    }
  }
  
  export const defaultLang = langs['zh-CN'];

  export class LocalesConfig<Config = any> {
    data: Record<string, Config>;
    constructor(locales: Record<string, Config>) {
      this.data = locales
    };
    get(): Config {
      return this.data[lang()];
    }; 
  }
