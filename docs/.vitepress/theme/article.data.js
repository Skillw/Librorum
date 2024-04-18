import { createContentLoader } from 'vitepress'

const excludedFiles = ['index.md', 'tag.md', 'archives.md', 'me.md'];

export default createContentLoader('*.md',{
  includeSrc:true,
  transform(raw){
    const articles = raw.filter(raw => {
      let name = (raw.url.lastIndexOf('/') === -1 ? raw.url : raw.url.slice(raw.url.lastIndexOf('/') + 1)) + '.md';
      if(name == '.md' || name.endsWith('/.md')){
        name = name.replace('.md', 'index.md');
      }
      return !excludedFiles.includes(name);
    });
    return articles.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    }).map((page) => {
      if(!page.frontmatter.title){
        const start = page.src.indexOf('#');
        if(start !== -1){
          const end = page.src.indexOf('\n', start);
          page.frontmatter.title = page.src.slice(start + 2, end);
        } else {
          page.frontmatter.title = 'No Title'
        }
      }
      return {
        ...page.frontmatter,
        path: page.url
      }
    })
  },
})

