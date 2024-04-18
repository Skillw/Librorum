import { createContentLoader } from 'vitepress'
import { locales } from '../config/components/metadata'

const excludedFiles = ['index.md', 'tags.md', 'archives.md', 'me.md'];

export default createContentLoader('*.md',{
  includeSrc:true,
  transform(raw){
    const articles = raw.filter(raw => {
      const name = (raw.url.lastIndexOf('/') === -1 ? raw.url : raw.url.slice(raw.url.lastIndexOf('/') + 1)) + '.md';
      return !excludedFiles.includes(name);
    });
    return raw.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    }).map((page) => {
      if(!page.frontmatter.title){
        const start = page.src.indexOf('#');
        if(index !== -1){
          const end = page.src.indexOf('\n', start);
          page.frontmatter.title = page.src.slice(start + 1, end);
        } else {
          page.frontmatter.title = locales.get().nullTitle
        }
      }
      return {
        ...page.frontmatter,
        path: page.url
      }
    })
  },
})

