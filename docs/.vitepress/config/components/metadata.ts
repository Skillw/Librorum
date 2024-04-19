import {localesOf } from "../../locales"
 
export type Config = {
    author: string,
    authorLink:string,
    original:{
        name:string,
        time:string,
    }
    reprint:{
        name:string,
        time:string,
    },
    viewCount:string,
    category:string,
    tags:string
}

export const config = {
    showViewCount: false
}

export const locales = localesOf<Config>({
    'zh-CN' : {
        author: '作者',
        authorLink:'进入作者主页',
        original:{
            name:'原创',
            time: '发布时间',
        },
        reprint:{
            name:'转载',
            time: '转载时间',
        },
        viewCount:'阅读量',
        category:'所属分类',
        tags:'标签列表',
    },
    'en': {
        author: 'Author',
        authorLink: 'Visit author\'s homepage',
        original: {
            name: 'Original',
            time: 'Publication time',
        },
        reprint: {
            name: 'Reprint',
            time: 'Reprint time',
        },
        viewCount: 'View count',
        category: 'Category',
        tags: 'Tags',
    },
})