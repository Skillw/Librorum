import type { DefaultTheme } from 'vitepress/theme';
import { localesOf } from "./locales";
import fg from 'fast-glob';
import matter from 'gray-matter';
const sync = fg.sync;

export const locales = localesOf<DefaultTheme.Sidebar>({
  'zh-CN': genSidebar({  path: 'zh-CN/blogs', }),
  'en': genSidebar({  path: 'en/blogs', }),
})

type Options = {
  path: string,
  sortBy?: 'date'|'link'|'title'
}
function genSidebar(options:Options): DefaultTheme.SidebarItem[] {
  const bar: DefaultTheme.SidebarItem[] = [];
  sync(`root/${options.path}/*.md`).forEach((file) => {
    const link = file.replace('root/', '');
    const a = matter.read(file);
    console.log(a);
  });
  return bar
}