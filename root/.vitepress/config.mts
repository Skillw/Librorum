import { defineConfig } from 'vitepress'
import{ defaultLang,langs } from './config/locales';
import { markdown } from './config/markdown';
import { getNav } from './config/nav'
import {outlines,level} from './config/outline'
import { locales as sidebarLocales } from './config/sidebar'
import { locales as siteLocales } from './config/site'
import {provider,search} from './config/components/search'

export const locales = (()=>{
  const config:any = {}
  for(const name in langs){
    const lang = langs[name];
    config[name] = {
      ...langs[name],
      ...siteLocales[name],
      themeConfig: {
        nav: getNav(lang.lang) ?? getNav(name),
        sidebar:  sidebarLocales()[lang.lang] ?? sidebarLocales()[name],
        outline: {
          label: outlines[lang.lang]?.outlineTitle ?? outlines[name]?.outlineTitle,
          level
        }
      }
    }
  }
  return config
})()

const defaultLocale = locales[defaultLang.lang]

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/assets/favicon.ico' }]],
  lang: defaultLang.lang,
  //更简洁的url，去掉.html
  cleanUrls: true,
  //页面元数据可缓存，减少服务器带宽
  metaChunk:true,
  //导入markdown配置
  markdown,
  //导入locales配置
  locales,
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },

  vite:{
  },

  themeConfig: {
    
    nav: [],
    sidebar: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Skillw/Librorum' }
    ],
    search:search[provider]
  }
})

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
  
];