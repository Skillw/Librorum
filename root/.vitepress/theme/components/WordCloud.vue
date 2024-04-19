<template>
  <div id="wordcloud-container"></div>
</template>

<script lang="ts" setup>
  import { onMounted, onBeforeUnmount } from 'vue';
  import { WordCloud } from '@antv/g2plot';

  // 定义属性
  const props = defineProps({
    dataList: {
      type: Array,
      default: () => [],
    },
  })

  // 渲染 WordCloud
  let wordCloud:WordCloud;
  onMounted(() => {
    wordCloud = new WordCloud("wordcloud-container", {
      data: props.dataList as Record<string, any>[],
      wordField: 'name',
      weightField: 'value',
      colorField: 'name',
      wordStyle: {
        fontFamily: 'Verdana',
        fontSize: [14, 35],
        rotation: 0,
      },
      random: () => 0.5,
    });
    wordCloud.render();
  });

  onBeforeUnmount(() => {
    wordCloud.destroy();
  });
</script>