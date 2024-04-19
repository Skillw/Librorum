import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect'
import UnoCSS from 'unocss/vite'
import { ThumbnailHashImages } from '@nolebase/vitepress-plugin-thumbnail-hash/vite'
import { PageProperties, PagePropertiesMarkdownSection } from '@nolebase/vitepress-plugin-page-properties/vite'

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
      Inspect(),
      UnoCSS(),
      ThumbnailHashImages(),
      PageProperties(),
      PagePropertiesMarkdownSection({
        exclude(path:string){
          return excludes.find(b=>path.endsWith(b))
        }
      }),
    ],
  }
})