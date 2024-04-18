<template>
  <div class="meta-wrapper">
    <div class="meta-item original">
      <a-tag v-if="isOriginal" color="green">
        <img width="14" src="/assets/shared/award.svg" />
        {{ locale.original.name }}
      </a-tag>
      <a-tag v-else color="arcoblue">
        <img width="13" src="/assets/shared/share.svg" />
        {{ locale.reprint.name }}
      </a-tag>
    </div>
    <div class="meta-item">
      <span class="meta-icon author">
        <a v-if="isOriginal" :title="author" :href="authorLink"> 
          <img width=20 src="/assets/owner.png">
            <title>{{ locale.author }}</title>
          </img>
        </a>
        <span v-else :title="author">
          <img width=13 src="/assets/shared/user.svg">
            <title>{{ locale.author }}</title>
          </img>  
        </span>
      </span>
      <span class="meta-content">
        <a v-if="isOriginal" :href="authorLink" :title="locale.authorLink">{{
          author
        }}</a>
        <span v-else :title="author">{{ author }}</span>
      </span>
    </div>
    <div class="meta-item">
      <span class="meta-icon date">
        <img
          role="img"
          width=15
          src="/assets/shared/clock.svg"
        >
          <title v-if="isOriginal">{{ locale.original.time }}</title>
          <title v-else>{{ locale.reprint.time }}</title>
        </img>
      </span>
      <time
        class="meta-content"
        :datetime="date.toISOString()"
        :title="dayjs().to(dayjs(date))"
        >{{
          date.toLocaleString(lang.value, {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        }}</time
      >
    </div>
    <div class="meta-item" v-if="showViewCount">
      <span class="meta-icon pv">
        <img
          role="img"
          width=15
          src="/assets/shared/eye.svg"
        >
          <title>{{ locale.viewCount }}</title>
      </img>
      </span>
      <span class="meta-content" v-text="viewCount" :title="viewCount"></span>
    </div>
    <div class="meta-item" v-if="showCategory">
      <span class="meta-icon category">
        <img
          role="img"
          width=15
          src="/assets/shared/folder.svg"
        >
          <title>{{ locale.categories }}</title>
      </img>
      </span>
      <span class="meta-content">
        <span v-for="(category, index) in categories" :key="index">
          <a
            href="javascript:void(0);"
            @click="goToLink('/archives', 'category', category)"
            target="_self"
            :title="category"
            >{{ category }}</a
          >
          <span v-if="index != categories.length - 1">, </span>
        </span>
      </span>
    </div>
    <div class="meta-item tag">
      <span class="meta-icon tag">
        <img
          role="img"
          width=15
          src="/assets/shared/tags.svg"
        >
          <title>{{ locale.tags }}</title>
        </img>
      </span>
      <span class="meta-content">
        <span v-for="(tag, index) in tags" :key="index">
          <a
            href="javascript:void(0);"
            @click="goToLink('/archives', 'tag', tag)"
            target="_self"
            :title="tag"
            >{{ tag }}</a
          >
          <span v-if="index != tags.length - 1">, </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, onMounted } from "vue";
import md5 from "blueimp-md5";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
import { goToLink } from "../utils.ts";
import { config, locales } from "../../config/components/metadata.ts";
import { defaultAuthor } from "../../config/components/author.ts";

dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

// 定义文章属性
const props = defineProps({
  article: Object,
  showCategory: {
    type: Boolean,
    default: true,
  },
});

let locale = locales.get();

const data = reactive({
  isOriginal: props.article?.isOriginal ?? true,
  author: props.article?.author ?? defaultAuthor.name,
  authorLink: props.article?.authorLink ?? defaultAuthor.link,
  showViewCount: config.showViewCount,
  viewCount: 0,
  date: new Date(props.article!.date),
  categories: props.article?.categories ?? [],
  tags: props.article?.tags ?? [],
  showCategory: props.showCategory && props.article?.categories?.length > 0,
});
const {
  isOriginal,
  author,
  authorLink,
  showViewCount,
  viewCount,
  date,
  categories,
  tags,
  showCategory,
} = toRefs(data);

console.log(author);

if (data.showViewCount) {
  // 记录并获取文章阅读数（使用文章标题 + 发布时间生成 MD5 值，作为文章的唯一标识）
  onMounted(() => {
    //@ts-ignore
    $api.getArticleViewCount(
      md5(props.article!.title + props.article!.date),
      location.href,
      function (viewCountData) {
        data.viewCount = viewCountData;
      }
    );
  });
}
</script>

<style src="@theme/styles/ArticleMetadata.css" scoped></style>
