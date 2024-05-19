import { localesOf } from "../locales";

import { Locale } from "@nolebase/vitepress-plugin-git-changelog/client";

export const locales = localesOf<Locale>({
  en: {
    changelog: {
      title: "Changelog",
      noData: "No recent changes",
      lastEdited: "Last edited {{daysAgo}}",
      lastEditedDateFnsLocaleName: "enUS",
      viewFullHistory: "View full history",
      committedOn: " on {{date}}",
    },
    contributors: {
      title: "Contributors",
      noData: "No contributors",
    },
  },
  'zh-CN': {
    changelog: {
      title: "页面历史",
      noData: "暂无最近变更历史",
      lastEdited: "最后编辑于 {{daysAgo}}",
      lastEditedDateFnsLocaleName: "zhCN",
      viewFullHistory: "查看完整历史",
      committedOn: " 于 {{date}}",
    },

    contributors: {
      title: "贡献者",
      noData: "暂无相关贡献者",
    },
  },
});
