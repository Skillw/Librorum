import type { MarkdownOptions } from "vitepress";
import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import { BiDirectionalLinks } from "@nolebase/markdown-it-bi-directional-links";
import { UnlazyImages } from '@nolebase/markdown-it-unlazy-img'
import { cwd } from "node:process";
export const markdown: MarkdownOptions = {
  lineNumbers: true,

  config: (md) => {
    md.use(InlineLinkPreviewElementTransform)
    md.use(BiDirectionalLinks({ 
      dir: cwd(),
    }))
    md.use(UnlazyImages(), {
      imgElementTag: 'NolebaseUnlazyImg',
    })
  },
};
