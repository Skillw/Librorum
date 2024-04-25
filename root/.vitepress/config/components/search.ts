import  { DefaultTheme } from 'vitepress/theme';


export const localSearchOptions: DefaultTheme.LocalSearchOptions = {
  locales: {
    'zh-CN': {
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          noResultsText: '无法找到相关结果',
          resetButtonTitle: '清除查询条件',
          footer: {
            selectText: '选择',
            navigateText: '切换'
          }
        }
      }
    }
  }
};

export const algoliaSearchOptions: DefaultTheme.AlgoliaSearchOptions = {
  // 如果使用 Algolia 搜索，需要在这里设置对应的参数
  appId: '',
  apiKey: '',
  indexName: '',
  locales: {
    'zh-CN': {
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈'
          }
        }
      }
    }
  }
};

export const provider = 'local';

export const search :Record<string, { provider: 'local'; options?: DefaultTheme.LocalSearchOptions }
| { provider: 'algolia'; options: DefaultTheme.AlgoliaSearchOptions }> = {
  'local':{
    provider: 'local',
    options: localSearchOptions
  },
  'algolia':{
    provider: 'algolia',
    options: algoliaSearchOptions
  }
}