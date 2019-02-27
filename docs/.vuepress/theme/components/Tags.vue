<template>
  <div class="tags">
    <!-- <div class="tag-tip">
      <i class="icon icon-tags"></i>
      目前共{{$tags.length}}个标签
    </div> -->
    <!-- <div class="card-pool">
      <router-link
        class="card"
        :to="`/tags/${title}/`"
        itemprop="url"
        v-for="tag in $tags"
      >
        <span class="card-title">{{tag}}</span>
        <span class="card-count">
          ({{}})
        </span>
      </a>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    
    console.log(this.$tags._metaMap)
  },
};
</script>

<style lang="stylus">
</style>