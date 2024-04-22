<template>
  <div class="main-container-tag">
    <!-- Head -->
    <div class="tag-header-wrapper">
      <span class="tag-breadcrumb-icon">
        <img
          role="img"
          viewBox="0 0 1024 1024"
          width="1em"
          height="1em"
          class="larkui-icon icon-svg index-module_size_wVASz"
          style="width: 16px; min-width: 16px; height: 16px"
          src="/assets/components/tag/tag.svg"
        />
      </span>
      <span class="tag-breadcrumb-item">{{ locale.title }}</span>
    </div>

    <!-- Content -->
    <div>
      <!-- 标签云 -->
      <WordCloud
        :dataList="dataList"
        :style="{ width: '100%', height: '130px' }"
      />
      <a-row :gutter="24">
        <!-- 标签列表区域 -->
        <a-col :span="24">
          <a-card :style="{ width: '100%', marginBottom: '20px' }">
            <a-tag
              @click="toggleTag(tagName)"
              v-for="(tag, tagName) in tags"
              :class="
                selectTag === tagName
                  ? 'tag-checkable-checked tag-item'
                  : 'tag-item'
              "
            >
              <span class="tag-title">{{ tagName }}</span>
              <span>{{ tag.length }}</span>
            </a-tag>
          </a-card>
        </a-col>

        <!-- 文章列表区域 -->
        <a-col :span="24">
          <a-list v-if="selectTag" :style="{ width: '100%' }">
            <template #header>
              {{ locale.count.replace("{count}", tags[selectTag].length) }}
            </template>
            <a-list-item v-for="(article, index) in tags[selectTag]">
              <div class="result-item">
                <h3 class="result-item-title">
                  <a :href="article.path" class="title" target="_blank">{{
                    article.title
                  }}</a>
                </h3>
                <p class="result-item-description"></p>
                <!-- 文章元数据信息 -->
                <ArticleMetadata :article="article" :key="md5(article.date)" />
              </div>
            </a-list-item>
          </a-list>
          <a-card
            :style="{ width: '100%' }"
            class="no-result"
            v-if="!selectTag"
          >
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
              "
            >
              <img
                role="img"
                width="20%"
                height="20%"
                src="/assets/components/tag/none.svg"
              />
            </div>
            <p>{{ locale.description }}</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
//@ts-ignore
import md5 from "blueimp-md5/js/md5.js";
import { getQueryParam } from "../utils";
//@ts-ignore
import { data as localesData } from "../article.data.js";
import { locales } from "../../config/components/tag";
import { useData } from "vitepress";

const { lang } = useData()

const articleData = localesData[lang.value] ?? [];
const locale = locales[lang.value];
/**
 * 标签数据
 * {tagTitle1: [article1, article2, ...}
 */
const tags = computed(() => {
  let tags : any = {};
  articleData.forEach((article:any) => {
    const articleTags = article.tags;
    if (!Array.isArray(articleTags)) return;
    articleTags.forEach((tagName:string) => {
      let tag = tags[tagName];
      if (!tag) {
        tags[tagName] = [article];
        return;
      }
      tag.push(article);
      tag.sort((a:any, b:any) => b.date?.localeCompare(a.date) ?? true); // 按时间倒序
    });
  });
  return tags;
});

// 选中的Tag
let selectTag = ref("");
const toggleTag = (tagName: string) => {
  // 如果标签不存在, 则不处理
  if (!(tagName in tags.value)) return;
  // 切换选中状态
  if (selectTag.value == tagName) selectTag.value = "";
  else selectTag.value = tagName;
};

// 如果URL路径有tag参数, 默认选中指定Tag, 例如: /tags?tag=Git
let tag = getQueryParam("tag");
if (tag && tag.trim() != "") {
  toggleTag(tag);
}

/**
 * 词云数据
 * [{"name": xx, "value": xx}]
 */
const dataList = computed(() => {
  const dataList: any[] = [];
  for (let tag in tags.value) {
    dataList.push({ name: tag, value: tags.value[tag].length });
  }
  return dataList;
});
</script>

<style src="@theme/styles/Tag.css" scoped></style>
