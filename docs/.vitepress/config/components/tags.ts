
import { LocalesConfig } from "../langs"


 type Config = {
    title:string,
    count:string,
    description:string,
}



export const locales = new LocalesConfig<Config>({
    'zh-CN' : {
        title: '标签',
        count: '共 {count} 篇',
        description: '点击标签查看相关文章',
    },
    'en' : {
        title: 'Tags',
        count: '{count} articles',
        description: 'Click to view related articles',
    }
})