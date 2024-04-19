import { localesOf } from "../../locales"

export type Category = {
    name:string,
    path:string,
    icon:string
}

type Config = Record<string,string>

export const locales = localesOf<Config>({
    'zh-CN': {
        tech: '技术',
        life: '生活',
        none: '无'
    },
    'en': {
        tech: 'Tech',
        life: 'Life',
        none: 'None'
    }
})

export const categories:Record<string,Category> = {
    'tech': {
        name: 'tech',
        path: '/blogs/tech/',
        icon: '/assets/components/categories/tech.svg'
    },
    'life': {
        name: 'life',
        path: '/blogs/life/',
        icon: '/assets/components/categories/life.svg'
    },
    'none': {
        name: 'none',
        path: '/blogs/none/',
        icon: '/assets/components/categories/none.svg'
    }
}


export function genCategories(lang:string): any[]{
    return Object.keys(categories).map(key => {
        return {
            text: locales[lang][key],
            link: categories[key].path,
            activeMatch: categories[key].path
        }
    })
}
