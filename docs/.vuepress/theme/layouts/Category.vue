<template>
  <div
    class="theme-container"
    :class="pageClasses"
  >
    <Navbar
      v-if="shouldShowNavbar"
    />
    <h5 class="tag-tip">
      <i class="icon icon-tag"></i>
        关于
      <span style="color:rgb(100, 100, 100)"><%-page.category.trim() %></span>
      共&nbsp;<%-category_num %>&nbsp;篇文章</h5>
    <div class="waterfall">
      <% page.posts.each(function(post){ %>
          <%- partial('_partial/archive', {post: post, date_format: config.date_format}) %>
      <% }) %>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Navbar, Footer },

  data () {
    return {
     
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    pageClasses () {
      const userPageClass = this.$frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    
  },

  methods: {
    // side swipe
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
