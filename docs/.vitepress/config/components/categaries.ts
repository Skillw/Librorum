import { LocalesConfig } from "../langs"

type Categary = {
    name:string,
    path:string,
    icon:string
}

type Config = Record<string,string>

export const locales = new LocalesConfig<Config>({
    'zh-CN': {
        tech: '分类',
        life: '生活'
    },
    'en': {
        tech: 'Tech',
        life: 'Life'
    }
})

export const categaries:Record<string,Categary> = {
    'tech': {
        name: 'tech',
        path: '/categaries/tech',
        icon: '/assets/categaries/tech.svg'
    },
    'life': {
        name: 'life',
        path: '/categaries/life',
        icon: '/assets/categaries/life.svg'
    }
}


