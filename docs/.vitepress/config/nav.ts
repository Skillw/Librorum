import type { DefaultTheme } from 'vitepress';
/**
 * 导航栏配置 / Navigation configuration
 */
 const navs: Record<string,DefaultTheme.Config['nav']> = {
    'zh-CN':[
        {
            text: '文章',
            link: '/blogs',
            activeMatch: '/blogs'
        },
        {
          text: '标签',
          link: '/tags',
          activeMatch: '/tags'
        },
        {
          text: '归档',
          link: '/archives',
          activeMatch: '/archives'
        },
        {
          text: '关于',
          items: [
            { text: '关于禁书目录', link: '/about/index', activeMatch: '/about/index' },
            { text: '关于我', link: '/about/me', activeMatch: '/about/me' }
          ],
          activeMatch: '/about/'
        },
      ],
    en:[
        {
            text: 'Blog',
            link: '/blogs',
            activeMatch: '/blogs'
        },
        {
          text: 'Tags',
          link: '/tags',
          activeMatch: '/tags'
        },
        {
          text: 'Archives',
          link: '/archives',
          activeMatch: '/archives'
        },
        {
          text: 'About',
          items: [
            { text: 'About Nolebase', link: '/about/index', activeMatch: '/about/index' },
            { text: 'About Me', link: '/about/me', activeMatch: '/about/me' }
          ],
          activeMatch: '/about/'
        },
      ]
};


export function getNav(lang:string,dir?:string):DefaultTheme.Config['nav']{
  const nav = navs[lang]!;
  addDir(dir ?? lang,nav);
  return nav;
}

function addDir(dir:string,item:any){
  if(Array.isArray(item)){
    item.forEach(i=>addDir(dir,i));
  }else{
    item.link = prefix(dir,item.link);
    item.activeMatch = prefix(dir,item.activeMatch);
    if(item.items){
      addDir(dir,item.items);
    }
  }
}

function prefix(dir:string,item?:string):string|undefined{
  return item ? item.startsWith("!") ? item : `${dir}/${item}` : undefined;
}