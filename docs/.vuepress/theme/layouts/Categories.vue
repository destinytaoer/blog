<template>
  <div
    class="theme-container"
    :class="pageClasses"
  >
    <Navbar
      v-if="shouldShowNavbar"
    />
    <div class="container fade">
      <h5 class="tag-tip">
        <i class="icon icon-list"></i>
        目前共&nbsp;{{list.length}}&nbsp;大分类
      </h5>
      <div class="card-pool" >
        <!-- {{$categories}} -->
      </div>
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
    },

    list () {
      return this.$categories.list
    }
  },

  mounted () {
    console.log(this.$categories)
  },

  methods: {
    // side swipe
  }
}
</script>

<style lang="stylus">
@import '../styles/theme.styl'
.container
  padding-top 3.6rem
  max-width 740px
  margin 0 auto
.tag-tip
  font-size 20px
.card-pool
  display flex
</style>
