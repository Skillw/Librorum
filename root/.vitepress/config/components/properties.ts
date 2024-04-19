import { Property } from "@nolebase/vitepress-plugin-page-properties/client";
import { localesOf } from "../locales";

export const excludes = [
  'index.md','tag.md','archive.md'
]

export const properties = localesOf<Property<"progress" | "tags">[]>( {
  "zh-CN": [
    {
      key: "tags",
      type: "tags",
      title: "标签",
    },
    {
      key: "progress",
      type: "progress",
      title: "完成进度",
    },
    {
      key: "wordCount",
      type: "dynamic",
      title: "字数",
      options: {
        type: "wordsCount",
      },
    },
    {
      key: "readingTime",
      type: "dynamic",
      title: "阅读时间",
      options: {
        type: "readingTime",
        dateFnsLocaleName: "zhCN",
      },
    },
  ],
  en: [
    {
      key: "tags",
      type: "tags",
      title: "Tags",
    },
    {
      key: "progress",
      type: "progress",
      title: "Progress",
    },
    {
      key: "wordCount",
      type: "dynamic",
      title: "Word Count",
      options: {
        type: "wordsCount",
      },
    },
    {
      key: "readingTime",
      type: "dynamic",
      title: "Reading Time",
      options: {
        type: "readingTime",
        dateFnsLocaleName: "en",
      },
    },
  ],
})
