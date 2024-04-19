import { createContentLoader } from 'vitepress'
import {defaultLang, langs} from '../config/langs'

const excludedFiles = ['index.md', 'tag.md', 'archive.md', 'me.md'];

export default createContentLoader(['*.md','**/*.md'],{
  includeSrc:true,
  transform(raw){
    const articles = raw.filter(raw => {
      let name = (raw.url.lastIndexOf('/') === -1 ? raw.url : raw.url.slice(raw.url.lastIndexOf('/') + 1)) + '.md';
      if(name == '.md' || name.endsWith('/.md')){
        name = name.replace('.md', 'index.md');
      }
      return !excludedFiles.includes(name);
    });
    let locales = {};

    articles.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    }).forEach((page) => {
      var lang = page.url.slice(0, page.url.indexOf('/'));
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
      if(!page.frontmatter.date){
        page.frontmatter.date = '1919/08/10 11:45'
      }
      if(!page.frontmatter.tags){
        page.frontmatter.tags = []
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

