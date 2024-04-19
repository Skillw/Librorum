<template>
  <div class="meta-wrapper">
    <div class="meta-item original">
      <a-tag v-if="isOriginal" color="green">
        <img width="14" src="/assets/components/metadata/award.svg" />
        {{ locale.original.name }}
      </a-tag>
      <a-tag v-else color="arcoblue">
        <img width="13" src="/assets/components/metadata/share.svg" />
        {{ locale.reprint.name }}
      </a-tag>
    </div>
    <div class="meta-item">
      <span class="meta-icon author">
        <a v-if="isOriginal" :title="locale.author" :href="authorLink"> 
          <img width=20 src="/assets/owner.png">
          </img>
        </a>
        <span v-else :title="locale.author">
          <img width=13 src="/assets/components/metadata/user.svg">
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
          src="/assets/components/metadata/clock.svg"
          :title="isOriginal ? locale.original.time : locale.reprint.time"
        >
        </img>
      </span>
      <a v-if="date">
        <time class="meta-content"
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
        }}</time>
      </a>
      <span v-else class="meta-content">
        <a :title="locale.unknownTime" >{{ locale.unknownTime }} 
        </a>
      </span>

    </div>
    <div class="meta-item" v-if="category">
      <span class="meta-icon category">
        <img
          role="img"
          width=15
          :src="category.icon"
          :title="locale.category"
        ></img>
      </span>
      <span class="meta-content">
        <a
            href="javascript:void(0);"
            @click="goToLink(lang,'/archive', 'category', categoryName)"
            target="_self"
            :title="categoryDisplay"
            >{{ categoryDisplay }}</a
          >
      </span>
    </div>
    <div class="meta-item tag"  v-if="tags.length != 0">
      <span class="meta-icon tag">
        <img
          role="img"
          width=15
          src="/assets/components/metadata/tags.svg"
          :title="locale.tags"
        ></img>
      </span>
      <span class="meta-content">
        <span v-for="(tag, index) in tags" :key="index">
          <a
            href="javascript:void(0);"
            @click="goToLink(lang,'/archive', 'tag', tag)"
            target="_self"
            :title="tag"
            >{{ tag }}</a
          >
          <span v-if="index != tags.length - 1">, </span>
        </span>
      </span>
    </div>
    <div class="meta-item" v-if="showViewCount">
      <span class="meta-icon pv">
        <img
          role="img"
          width=15
          src="/assets/components/metadata/eye.svg"
          :title="locale.viewCount"
        >
      </img>
      </span>
      <span class="meta-content" v-text="viewCount" :title="viewCount"></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, onMounted } from "vue";
//@ts-ignore
import md5 from "blueimp-md5";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
import { goToLink } from "../utils";
import { config, locales as metadataLocales } from "../../config/components/metadata";
import { defaultAuthor } from "../../config/author";
import { useData } from "vitepress";
import { categories,locales as categoryLocales } from "../../config/components/categories"; 

dayjs.extend(relativeTime);
dayjs.locale("zh-cn");
const { lang } = useData()
const locale = metadataLocales[lang.value];

// 定义文章属性
const props = defineProps({
  article: Object,
  showCategory: {
    type: Boolean,
    default: true,
  },
});

const data = reactive({
  isOriginal: props.article?.isOriginal ?? true,
  author: props.article?.author ?? defaultAuthor.name,
  authorLink: props.article?.authorLink ?? defaultAuthor.link,
  showViewCount: config.showViewCount,
  viewCount: 0,
  date: props.article!.date ? new Date(props.article!.date) : null,
  categoryName: props.article?.category ?? 'none',
  tags: props.article?.tags ?? [],
});
const {
  isOriginal,
  author,
  authorLink,
  showViewCount,
  viewCount,
  date,
  categoryName,
  tags,
} = toRefs(data);

const category = categories[categoryName.value] ?? categories.none; 
const categoryDisplay = categoryLocales[lang.value][categoryName.value] ?? categoryLocales[lang.value].none;
if (data.showViewCount) {
  // 记录并获取文章阅读数（使用文章标题 + 发布时间生成 MD5 值，作为文章的唯一标识）
  onMounted(() => {
    //@ts-ignore
    $api.getArticleViewCount(
      md5(props.article!.title + props.article!.date),
      location.href,
      function (viewCountData: number) {
        data.viewCount = viewCountData;
      }
    );
  });
}
</script>

<style src="@theme/styles/ArticleMetadata.css" scoped></style>
