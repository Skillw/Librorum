import { createContentLoader } from 'vitepress'
import { parseLang} from '../config/locales'
import { locales as tagLocales } from '../config/components/tag';
import {locales as metadataLocales } from '../config/components/metadata'
import { completeData } from '../config/markdown'

const excludedFiles = ['tag.md', 'archive.md', 'me.md'];

export default createContentLoader(['*.md','**/*.md'],{
  includeSrc:true,
  transform(raw){
    const articles = raw.filter(raw => {
      let name = (raw.url.lastIndexOf('/') === -1 ? raw.url : raw.url.slice(raw.url.lastIndexOf('/') + 1)) + '.md';
      return !excludedFiles.includes(name);
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

