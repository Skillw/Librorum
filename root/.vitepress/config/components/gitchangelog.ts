import { localesOf } from "../locales";

import { Locale } from '@nolebase/vitepress-plugin-git-changelog/vite'

export const locales = localesOf<Locale>({ 
    'zh-CN': { 
      gitChangelogMarkdownSectionTitles: { 
        changelog: '文件历史', 
        contributors: '贡献者', 
      }, 
    }, 
    'en': { 
      gitChangelogMarkdownSectionTitles: { 
        changelog: 'File History', 
        contributors: 'Contributors', 
      }, 
    }, 
  })