import { LocalesConfig } from "./langs";

export const image = './assets/logo.png';

export interface Site{
  title:string,
  description:string,
  unknown:string
}

export const locales = new LocalesConfig<Site>({
  'zh-CN':{
    title: 'Glom的禁书目录',
    description: '个人技术知识库，记录 & 分享个人碎片化、结构化、体系化的技术知识内容。',
    unknown: 'zh-CN/unknown.md',
  },
  'en':{
    title: 'Glom\'s Librorum',
    description: 'Personal technical knowledge base, recording & sharing personal fragmented, structured, and systematic technical knowledge content.',
    unknown: 'en/unknown.md',
  }
});