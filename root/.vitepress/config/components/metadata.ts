import { localesOf } from "../locales.js"
 
export type Config = {
    author: string,
    authorLink:string,
    unknownTime: string,
    untitled: string,
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
        unknownTime: '未知时间',
        untitled: '无标题',
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
        unknownTime: 'Unknown time',
        untitled: 'No title',
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
