import type { DefaultTheme } from "vitepress/theme";
import { type SiteConfig } from "vitepress";
import { localesOf, parseLang } from "./locales";
import { completeData } from "../config/markdown";
import fg from "fast-glob";
import matter from "gray-matter";
import { type Plugin, type ViteDevServer } from "vite";
const sync = fg.sync;

export const locales = ()=>{
  return localesOf<DefaultTheme.Sidebar>({
    "zh-CN": {
      'zh-CN/blogs/': genSidebar({ path: "zh-CN/blogs" })
    },
    en:  {
      'en/blogs/': genSidebar({ path: "en/blogs" })
    },
  })
};

type SidebarOptions = {
  path: string;
  sortBy?: "date" | "link" | "title";
};
function genSidebar(options: SidebarOptions): DefaultTheme.SidebarItem[] {
  const articles: any[] = [];
  sync(`root/${options.path}/*.md`).forEach((file) => {
    const link = file.replace("root/", "");
    const md = matter.read(file);
    const lang = parseLang(link);
    completeData(lang, md.data, md.content);
    const date = md.data.date;
    if (date) {
      md.data.date = new Date(date);
    }
    articles.push({
      ...md.data,
      link,
    });
  });
  articles.sort((a, b) => {
    switch (options.sortBy) {
      case "date":
        return b?.date.localeCompare(a.date) ?? true;
      case "link":
        return a.link.localeCompare(b.link);
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });
  return articles.map((article) => {
    return {
      text: article.title,
      link: article.link,
    };
  });
}

export interface UserConfig {
  vitepress: SiteConfig;
}

export default function AutoSidebar(): Plugin {
  return {
    name: "auto-sidebar",
    configureServer({ watcher, restart}: ViteDevServer) {
      const fsWatcher = watcher.add("*.md");
      fsWatcher.on("all", async (event, path) => {
        if (path.endsWith(".md")) {
          try {
            await restart();
            console.log("update sidebar... "+path);
          } catch {
            console.log(`${event} ${path}`);
            console.log("update sidebar failed");
          }
        }
      });
    },
    config(config) {
      const barLocales = locales()
      const siteLocales = (config as UserConfig).vitepress.site.locales
      for (const key in barLocales) {
        const locale = barLocales[key]
        siteLocales[key].themeConfig.sidebar = locale
      }
      console.log("injected sidebar data successfully");
      return config;
    },
  };
}
