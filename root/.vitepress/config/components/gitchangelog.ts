import { localesOf } from "../locales";

import { Locale } from '@nolebase/vitepress-plugin-git-changelog/client'

export const locales = localesOf<Locale>({ 
      'en': {
        noLogs: 'No recent changes',
        lastEdited: 'This page was last edited {{daysAgo}}',
        lastEditedDateFnsLocaleName: 'enUS',
        viewFullHistory: 'View full history',
        committedOn: ' on {{date}}', 
      },
      'zh-CN': {
        noLogs: '暂无最近变更历史',
        lastEdited: '本页面最后编辑于 {{daysAgo}}',
        lastEditedDateFnsLocaleName: 'zhCN',
        viewFullHistory: '查看完整历史',
        committedOn: '于 {{date}} 提交',
       },
     }
)