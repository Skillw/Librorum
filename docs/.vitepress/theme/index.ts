import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'
import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu,
  Options,
  InjectionKey
} from '@nolebase/vitepress-plugin-enhanced-readabilities'
import { 
  NolebaseInlineLinkPreviewPlugin, 
} from '@nolebase/vitepress-plugin-inline-link-preview'
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";
import '@nolebase/vitepress-plugin-inline-link-preview/dist/style.css'

// import './styles/vars.css'
// import './styles/main.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/dist/style.css'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 为较宽的屏幕的导航栏添加阅读增强菜单
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
    })
  },
  enhanceApp({app}) {
    app.provide(InjectionKey, {
      spotlight:{
        defaultToggle: true
      }
    } as Options)
    app.use(NolebaseInlineLinkPreviewPlugin) 
  },
  // setup(){
  //   const { frontmatter } = toRefs(useData());
  //   const route = useRoute();
  //
  //   // 评论组件 - https://giscus.app/
  //   giscusTalk({
  //         repo: 'https://github.com/Glomzzz/Librorum',
  //         repoId: 'Librorum',
  //         category: 'General', // 默认: `General`
  //         categoryId: 'Librorum',
  //         mapping: 'pathname', // 默认: `pathname`
  //         inputPosition: 'top', // 默认: `top`
  //         lang: 'zh-CN', // 默认: `zh-CN`
  //         lightTheme: 'light', // 默认: `light`
  //         darkTheme: 'transparent_dark', // 默认: `transparent_dark`
  //         // ...
  //       }, {
  //         frontmatter, route
  //       },
  //       // 是否全部页面启动评论区。
  //       // 默认为 true，表示启用，此参数可忽略；
  //       // 如果为 false，表示不启用。
  //       // 可以在页面使用 `comment: true` 前言单独启用
  //       true
  //   );
  // }
}

export default Theme
