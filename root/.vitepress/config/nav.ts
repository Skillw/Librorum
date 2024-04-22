import type { DefaultTheme } from 'vitepress';
import { genCategories } from './components/categories';
/**
 * 导航栏配置 / Navigation configuration
 */
 const navs: Record<string,DefaultTheme.Config['nav']> = {
    'zh-CN':[
        {
            text: '文章',
            items: genCategories('zh-CN'),
            activeMatch: 'blogs'
        },
        {
          text: '标签',
          link: '/tag',
          activeMatch: 'tag'
        },
        {
          text: '时光轴',
          link: '/archive',
          activeMatch: '/archive'
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
            items: genCategories('en'),
            activeMatch: '/blogs'
        },
        {
          text: 'Tags',
          link: '/tag',
          activeMatch: '/tag'
        },
        {
          text: 'Archive',
          link: '/archive',
          activeMatch: '/archive'
        },
        {
          text: 'About',
          items: [
            { text: 'About Librorum', link: '/about/index', activeMatch: '/about/index' },
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
  if(item.routed) return;
  item.routed = true;
  if(Array.isArray(item)){
    item.forEach((i)=>addDir(dir,i));
  }else{
    item.link = prefix(dir,item.link);
    item.activeMatch = prefix(dir,item.activeMatch);
    if(item.items){
      addDir(dir,item.items);
    }
  }
}

function prefix(dir:string,item?:string):string|undefined{
  return item ? (item.startsWith("!") ? item : `${dir}${item}`) : undefined;
}