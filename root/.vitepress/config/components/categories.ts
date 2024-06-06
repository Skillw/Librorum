import { localesOf } from "../locales.js"

export type Category = {
    name:string,
    icon:string
}

type Config = Record<string,string>

export const locales = localesOf<Config>({
    'zh-CN': {
        docs: '文档',
        annoucements: '公告',
        none: '无分类'
    },
    'en': {
        docs: 'Docs',
        annoucements: 'Annoucements',
        none: 'No Category'
    }
})

export const categories:Record<string,Category> = {
    'docs': {
        name: 'dosc',
        icon: '/assets/components/categories/docs.svg'
    },
    'annoucements': {
        name: 'annoucements',
        icon: '/assets/components/categories/annoucements.svg'
    },
    'none': {
        name: 'none',
        icon: '/assets/components/categories/none.svg'
    }
}


export function genCategories(lang:string): any[]{
    return Object.keys(categories).map(key => {
        return {
            text: locales[lang][key],
            link: '/archive?category=' + key,
            activeMatch: '/archive?category=' + key
        }
    })
}
