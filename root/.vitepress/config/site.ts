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
    description: '技术知识库，记录 & 分享个人碎片化、结构化、体系化的技术知识内容。',
    unknown: 'zh-CN/unknown.md',
  },
  'en':{
    title: 'Librorum Example',
    description: 'Personal technical knowledge base, recording & sharing personal fragmented, structured, and systematic technical knowledge content.',
    unknown: 'en/unknown.md',
  }
});