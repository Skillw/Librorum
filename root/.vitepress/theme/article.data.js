import { createContentLoader } from 'vitepress'
import { parseLang} from '../config/locales'
import { locales as tagLocales } from '../config/components/tag';
import {locales as metadataLocales } from '../config/components/metadata'
import { completeData } from '../config/markdown'

export default createContentLoader(['*.md','**/*.md'],{
  includeSrc:true,
  transform(raw){
    const articles = raw.filter(raw => {
      return raw.frontmatter.metadata != false
    });
    let locales = {};

    articles.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    }).forEach((page) => {
      var lang = parseLang(page.url)
      completeData(lang,page.frontmatter,page.src)
      const locale = locales[lang] || (locales[lang] = []);
      locale.push({
        ...page.frontmatter,
        path: page.url
      }); 
    })
    return  locales;
  },
})

