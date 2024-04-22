<template>
  <div class="timeline-wrap">
    <!-- 时间轴头部 -->
    <div class="timeline-header">
      <a-tag
        v-if="$category"
        class="content"
        closable
        @close="goToLink(lang,'/archive')"
      >
      <img width="22" src="/assets/components/archive/archive.svg"></img> &ensp;
        {{ $categoryDisplay }} {{ locale.titlePost.replace('{count}',$articleData.length+'')  }}
      </a-tag>
      <a-tag
        v-else-if="$tag"
        class="content"
        closable
        @close="goToLink(lang,'/archive')"
      >
      <img width="22" src="/assets/components/archive/archive.svg"></img> &ensp;
        {{ $tag }} {{ locale.titlePost.replace('{count}',$articleData.length+'')  }}
      </a-tag>
      <a-tag
        v-else-if="$year"
        class="content"
        closable
        @close="goToLink(lang,'/archive')"
      >
        <img width="22" src="/assets/components/archive/archive.svg"></img> &ensp;
        {{ $year }}{{ locale.year  }} {{ locale.titlePost.replace('{count}',$articleData.length+'')  }}
      </a-tag>
      <a-tag
        v-else
        class="content"
      >
        <img width="22" src="/assets/components/archive/archive.svg"></img> &ensp;
        {{ locale.title.replace('{count}',$articleData.length+'')  }}
      </a-tag>
    </div>

    <!-- 时间轴主体 -->
    <div class="timeline-item" v-for="year in $years">
      <div class="year" @click="goToLink(lang,'/archive', 'year', year+'')">
        <img class="chinese-zodiac" width="20"  :src="'/assets/components/archive/chinese-zodiac/' + getChineseZodiac(year) + '.svg'" :title="year != 0 ? locale.years[year % 12] : locale.unknownYear" :alt="locale.zodiac"/>
        <a >{{ year != 0 ? year + locale.year : locale.unknownYear }}</a>
      </div>
      <div class="timeline-item-content">
        <div v-for="(articles, month) in archiveData[year]">
          <span class="month">
            {{ month != 0 ? locale.months[month] : locale.unkownMouth }}
          </span>
          <div class="articles">
            <span v-for="article in articles" class="article">
              <img @click="goToLink(lang,'/archive', 'category', article.category)" width="16" :src="article.categoryIcon" :title="article.categoryDisplay"></img>
              <a :href="article.path" class="title" target="_blank">{{ article.title }}</a>
              <br>
              <ArticleMetadata :article="article" />
            </span>
          </div>
        </div>
      </div>
      <div id="main"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useData } from "vitepress";
  import { getQueryParam, goToLink } from '../utils';
  import { categories,locales as categoryLocales } from "../../config/components/categories"; 
  import { locales as archiveLocales } from "../../config/components/archive"; 

//@ts-ignore
import { data as localesData } from "../article.data.js";
const { lang } = useData()

const articleData = localesData[lang.value];

const locale = archiveLocales[lang.value];

/**
 * 获取生肖图标
 *
 * @param year 年份
 */
function getChineseZodiac(year:number) {
  if(year == 0) return 'question';
  const arr = ['monkey', 'rooster', 'dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat'];
  return arr[year % 12];
}

  // 文章原始数据和归档数据
  let $articleData:any[];
  let archiveData:any;

  // 要筛选的分类、标签、年份
  let $category: string | null;
  let $categoryDisplay: string;
  let $tag: string | null;
  let $year: string | null;

  let $years:number[] = [];

  /**
   * 初始化时间轴
   */
  function initTimeline() {
    $articleData = [];
    archiveData = {};

    // 如果URL路径有category或tag或year参数, 默认筛选出指定category或tag或year的文章数据
    // 例如: /archives?category=Bug万象集
    // 例如: /archives?tag=JVM
    // 例如: /archives?year=2020
    $category = getQueryParam('category');
    $categoryDisplay = $category ? categoryLocales[lang.value][$category] : categoryLocales[lang.value]['none'];
    $tag = getQueryParam('tag');
    $year = getQueryParam('year');
    if ($category && $category.trim() != '') {
      for (let i = 0; i < articleData.length; i++) {
        let article = articleData[i];
        if (article.category && article.category == $category) {
          $articleData.push(article);
        }
      }
    } else if ($tag && $tag.trim() != '') {
      for (let i = 0; i < articleData.length; i++) {
        let article = articleData[i];
        if (article.tags && article.tags.includes($tag)) {
          $articleData.push(article);
        }
      }
    } else if ($year && $year.trim() != '') {
      for (let i = 0; i < articleData.length; i++) {
        let article = articleData[i];
        if (article.date && new Date(article.date).getFullYear() == Number.parseInt($year)) {
          $articleData.push(article);
        }
      }
    } else if(articleData != undefined) {
      $articleData.push(...articleData);
    }

    // 文章数据归档处理
    // 1.对文章数据进行降序排序
    $articleData.sort((a, b) => b.date?.localeCompare(a.date) ?? true);
    
    // 2.按年、月进行归档
    for (let i = $articleData.length-1; i >= 0; i--) {
      const article = $articleData[i];
      let date = article.date ? new Date(article.date) : null;
      let year = date?.getFullYear() ?? 0;
      let month = date?.getMonth() ?? 0;
      if($years.indexOf(year) == -1) $years.push(year)
      if (!archiveData[year]) {
        archiveData[year] = {};
      }
      if (!(archiveData[year][month])) {
        archiveData[year][month] = [];
      }
      article.categoryDisplay = categoryLocales[lang.value][article.category] ?? categoryLocales[lang.value]['none'];
      article.categoryIcon = categories[article.category].icon ?? categories['none'].icon;
      archiveData[year][month].push(article);
    }
    $years.sort((a,b) => b - a);
  }
  initTimeline();
</script>

<style src="@theme/styles/Archive.css" scoped></style>