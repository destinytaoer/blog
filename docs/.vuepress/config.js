module.exports = {
  title: "destiny'Note",
  description: "生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。",
  base: '/',
  dest: './dist/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // 顶部导航
    nav: [
      { text: '博客', link: '/blog/' },
      { text: '归档', link: '/archives/'},
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '语雀', link: 'https://www.yuque.com/destinytaoer/'},
      { text: '关于我', link: '/about/' }
    ],
    
    // 侧边栏
    sidebar: "auto",
    sidebarDepth: 2, // 默认 1 提取到 h2，0 为禁用，2 为 h2，h3
    displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
    activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题

    // Git 仓库和编辑链接
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'destinytaoer/blog',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',

    // 以下为可选的编辑链接选项

    // // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑此页面',
    lastUpdated: '上次更新时间', // string | boolean
  },
  // 语言配置
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },
  ga: 'UA-134526816-1',
  serviceWorker: true,
  updatePopup: {
    message: '有内容更新',
    buttonText: '刷新'
  },
  popupComponent: undefined
}