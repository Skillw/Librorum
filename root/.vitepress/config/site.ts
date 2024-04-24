import { localesOf } from "./locales";

export const image = './assets/logo.png';

export const repoURL = 'https://github.com/Glomzzz/Librorum'

export interface Site{
  title:string,
  description:string,
  unknown:string
}

export const locales = localesOf({
  'zh-CN':{
    title: '禁书目录例子',
    description: '技术知识库。',
    link: '/zh-CN/',
    unknown: 'zh-CN/unknown.md',
  },
  'en':{
    title: 'Librorum Example',
    description: 'Technical knowledge base.',
    link: '/en/',
    unknown: 'en/unknown.md',
  }
});