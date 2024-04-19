import { localesOf } from "../../locales"


type Config = {
    title: string
    titlePost: string
    year: string,
    years: string[]
    months: string[]
}



export const locales = localesOf<Config>({
    'zh-CN': {
       title: '共 {count} 篇, 未完待续...',
       titlePost: '( 共 {count} 篇 )',
       year: '年',
       years: ['猴年', '鸡年', '狗年', '猪年', '鼠年', '牛年', '虎年', '兔年', '龙年', '蛇年', '马年', '羊年'],
       months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    'en': {
        title: '{count} posts, to be continued...',
        titlePost: '( {count} posts )',
        year: 'Year',
        years: ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
})