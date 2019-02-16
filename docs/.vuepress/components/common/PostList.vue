<template>
  <div class="post-list">
    <div class="post" v-for="post in posts">
      <time class="post-time">
        <i class="icon icon-lg icon-file-text-o"></i>
        &nbsp;
        {{post.createdAt | formatDate}}
      </time>
      <h2 class="post-title" itemprop="name">
        <a href="/posts/8c41410f/">JS堆栈内存</a>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts'],
  data () {
    return {
      
    }
  },
  filters: {
    formatDate(str) {
      return str.replace(/\d{4}-/, '')
    }
  }
}
</script>

<style lang="less" scoped>

</style>