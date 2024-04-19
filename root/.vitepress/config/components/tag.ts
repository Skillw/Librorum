
import { localesOf  } from "../locales.js"


export type Config = {
    title:string,
    count:string,
    none:string,
    description:string,
}



export const locales = localesOf<Config>({
    'zh-CN' : {
        title: '标签',
        count: '共 {count} 篇',
        none: '无标签',
        description: '点击标签查看相关文章',
    },
    'en' : {
        title: 'Tags',
        count: '{count} articles',
        none: 'No tags',
        description: 'Click to view related articles',
    }
})