export type Lang = {
  lang: string;
  label: string;
};

export const langs: Record<string, Lang> = {
  "zh-CN": {
    lang: "zh-CN",
    label: "简体中文",
  },
  en: {
    lang: "en",
    label: "English",
  },
};
/**
 * 慎重考慮下我决定加入这个选项
 * 开启后会在langs里自动添加以下内容:
 * ```
 * root: {
 *  lang: defaultLang,
 *  label: langs[defaultLang].label
 * }
 * ```
 * 并且vitepress的locales中的root会全部导入deafulLang的内容
 * 
 */

export const rootMode = false;

export const defaultLang = langs["zh-CN"];

export type LocalesConfig<Config = any> = Record<string, Config>;

export function localesOf<Config = any>(
  data: Record<string, Config>
): LocalesConfig<Config> {
  return data;
}

export function parseLang(link: string): string {
  var lang = link.split("/")[0];
  if (lang == "") {
    lang = link.split("/")[1];
  }
  if (!Object.keys(langs).includes(lang)) {
    lang = defaultLang.lang;
  }
  return lang;
}
