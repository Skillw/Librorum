import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect'
import UnoCSS from 'unocss/vite'
import { ThumbnailHashImages } from '@nolebase/vitepress-plugin-thumbnail-hash/vite'
import { PageProperties, PagePropertiesMarkdownSection } from '@nolebase/vitepress-plugin-page-properties/vite'
import {repoURL} from './.vitepress/config/site'
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

import { locales as gitchangelog } from './.vitepress/config/components/gitchangelog'

import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import {excludes} from './.vitepress/config/components/properties'

export default defineConfig(() => {
  return {
    
    optimizeDeps: {
      include: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas', 
      ], 
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        'vitepress'
      ], 
    },
    ssr: { 
      noExternal: [ 
        '@nolebase/vitepress-plugin-highlight-targeted-heading', 
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
      ], 
    }, 
    plugins: [
      Components({
        dirs: ['.vitepress/theme/components'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [ArcoResolver({ sideEffect: true, resolveIcons: true })]
      }),
      GitChangelog({ 
        rewritePaths: {
          'root/': '',
        },
        repoURL: () => repoURL, 
        
      }), 
      GitChangelogMarkdownSection({
        locales:{
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
        }
      }),
      Inspect(),
      UnoCSS(),
      ThumbnailHashImages(),
      PageProperties(),
      PagePropertiesMarkdownSection({
        exclude(path:string):boolean{
          // 这里的type是strict的，所以需要显式的返回boolean
          return excludes.find(b=> path.endsWith(b)) ? true : false;
        }
      })
    ],
  }
})