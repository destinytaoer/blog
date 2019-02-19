import moment from 'moment'
const dataMixin = {
  computed: {
    $posts () {
      const pages = this.$site.pages
      const pageFilter = p => p.frontmatter.layout === 'post'
      const pageSort = (p1, p2) => {
        let dateA = new Date(p1.createdAt).getTime()
        let dateB = new Date(p2.createdAt).getTime()
        return dateB - dateA;
      }
      const pageMap = p => {
        p.createdAt = moment(p.frontmatter.date).format('YYYY-MM-DD')
        let updatedAt = p.frontmatter.update || p.frontmatter.date
        p.updatedAt = moment(updatedAt).format('YYYY-MM-DD')
        p.tags = p.frontmatter.tags || []
        p.category = p.frontmatter.category || null
        return p
      }
      const posts = pages.filter(pageFilter).map(pageMap).sort(pageSort)
      console.log(posts);
      return posts
    },

    $categories () {
      let categoriesSet = new Set()
      for (const post of this.$posts) {
        if (post.category) {
          categoriesSet.add(post.category)
        }
      }
      return Array.from(categoriesSet)
    },

    $tags () {
      let tagsArr = []
      for (const post of this.$posts) {
        tagsArr = tagsArr.concat(post.tags)
      }
      return Array.from(new Set(tagsArr))
    },
  }
}

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.mixin(dataMixin)
  // ...做一些其他的应用级别的优化
}