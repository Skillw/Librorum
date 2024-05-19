

type OutlineLocale = {
  outlineTitle: string;
}

/**
 * 大纲配置 / Ouline configuration
 */


export const outlines: Record<string,OutlineLocale> = {
    'zh-CN':{
      outlineTitle: '大纲',
      
    },
    en:{
      outlineTitle: 'On this page'
    }
};

export const level: number | [number, number] | 'deep' = [1,6]
