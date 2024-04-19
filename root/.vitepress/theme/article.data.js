import { createContentLoader } from 'vitepress'
import {defaultLang, langs} from '../config/locales'
import { locales as tagLocales } from '../config/components/tag';

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
      var lang = page.url.split('/')[0];
      if(lang == ''){
        lang = page.url.split('/')[1]
      }
      if(!Object.keys(langs).includes(lang)){
        lang = defaultLang.lang
      }
      const locale = locales[lang] || (locales[lang] = []);
      if(!page.frontmatter.title){
        const start = page.src.indexOf('#');
        if(start !== -1){
          const end = page.src.indexOf('\n', start);
          page.frontmatter.title = page.src.slice(start + 2, end);
        } else {
          page.frontmatter.title = 'No Title'
        }
      }
      if(!page.frontmatter.tags){
        page.frontmatter.tags = [tagLocales[lang].none]
      }
      if(!page.frontmatter.category){
        page.frontmatter.category = 'none'
      }
      locale.push({
        ...page.frontmatter,
        path: page.url
      }); 
    })
    return  locales;
  },
})

