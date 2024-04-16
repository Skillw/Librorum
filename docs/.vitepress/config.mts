import { defineConfig } from "vitepress";

import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/dist/markdown-it'

import { BiDirectionalLinks, } from '@nolebase/markdown-it-bi-directional-links'
import { cwd } from 'process';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Glomzzz's Home",
  description: "Glomzzz's sweet home",
  vite: { 
    optimizeDeps: { 
      include: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas', 
      ], 
    }, 
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
      ], 
    }, 
  }, 


  markdown:{
    config: (md) => {
      md.use(InlineLinkPreviewElementTransform);
      md.use(BiDirectionalLinks({ 
        dir: cwd(),
      })) 
    }
  },


  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "Glomzzz的家",
      link: '/zh-CN/',
      themeConfig: {
        nav: [
          { text: "博客", link: "/zh-CN/blog/" },
          { text: "朋友们", link: "/zh-CN/friends" },
        ],

        sidebar: {},
        search: {
          provider: "local",
          options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      themeConfig:{
        nav: [
          { text: "Home", link: "/" },
          { text: "Examples", link: "/markdown-examples" },
        ],

        sidebar: [
          {
            text: "Examples",
            items: [
              { text: "Markdown Examples", link: "/markdown-examples" },
              { text: "Runtime API Examples", link: "/api-examples" },
            ],
          },
        ],
      }
    },
  },
  lastUpdated: true,
  ignoreDeadLinks: [
    // Site Config | VitePress
    // https://vitepress.dev/reference/site-config#ignoredeadlinks
    //
    // ignore all localhost links
    /^https?:\/\/localhost/,
  ],
  themeConfig: {
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    logo: "/assets/logo.png",

    siteTitle: "El psy congroo.",

    socialLinks: [
      { icon: "github", link: "https://github.com/Glomzzz" },
      { icon: "discord", link: "https://discord.com/users/747730162577178624" },
      // { icon: 'instagram', link: 'https://www.instagram.com/glomzzz0/' },
      { icon: "youtube", link: "https://www.youtube.com/@Glomzzz" },
      { icon: "x", link: "https://x.com/Glomzzz0" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Glomzzz",
    },

    i18nRouting: true,
  },
});
