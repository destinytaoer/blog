<template>
  <div class="blog-home">
    <ul class="post-list">
      <li
        class="post-list-item fade"
        v-for="post in posts"
      >
        <article
          :id="'post-' + post.title"
          class="article-card article-type-post"
          itemprop="blogPost"
        >
          <h2
            class="post-title"
            itemprop="name"
          >
            <router-link :to="post.path">{{post.title}}</router-link>
          </h2>
          <ul class="post-meta">
            <li>
              <i class="icon icon-lg icon-calendar-o"></i>
              更新于：
              <time
                :datetime="post.frontmatter.update"
                itemprop="dateUpdate"
              >
                {{formatDate(post.frontmatter.update||post.frontmatter.date)}}</time>
            </li>
            <li>
              {{post.frontmatter.category}}
            </li>
          </ul>

          <div
            class="post-content"
            id="post-content"
            itemprop="postContent"
          >
            <div
              class="content"
              v-html="post.excerpt"
            ></div>
            <div >
              <router-link class="post-more waves-button" :to="post.path">阅读全文</router-link>
            </div>
          </div>
          <div
            class="post-footer"
            v-if="post.frontmatter.tags && post.frontmatter.tags.length"
          >
            <TagList :tags="post.frontmatter.tags"></TagList>
          </div>
        </article>
      </li>
    </ul>
    <footer>
      <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
    </footer>
  </div>
</template>

<script>
import TagList from "./common/TagList"
import Pagination from './common/Pagination'
export default {
  data() {
    return {};
  },
  computed: {
    posts() {
      let posts = [];
      posts = this.$site.pages.filter(item => {
        return item.path.includes("_posts");
      });
      posts.sort((a, b) => {
        let dateA = new Date(
          a.frontmatter.update || a.frontmatter.date
        ).getTime();
        let dateB = new Date(
          b.frontmatter.update || b.frontmatter.date
        ).getTime();
        return dateB - dateA;
      });
      console.log(posts);
      return posts;
    }
  },
  methods: {
    formatDate(date) {
      return date.slice(0, 10);
    }
  },
  mounted() {
  },
  components: {
    TagList,
    Pagination
  }
};
</script>

<style lang="less" scoped>
.blog-home {
  padding: 5rem 1rem;
  background-image: linear-gradient(
    180deg,
    #f5f1f1 30%,
    #eff1f3 45%,
    #f7f4ee 71%,
    #efefef 91%
  );
  @titleColor: #333;
  @titleHoverColor: #fff;
  .transition(@s, @dur: ease-in-out) {
    -webkit-transition: @s @dur;
    transition: @s @dur;
  }
  .post-list {
    padding: 0;
    margin: 0 -12px;
    list-style: none;
    .post-title a {
      letter-spacing: 4px;
      font-size: 120%;
      color: @titleColor;
      font-weight: 300;
      text-decoration: none;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      text-shadow: rgb(69, 45, 45) 0px 0px 1px, rgb(255, 255, 251) 0px 0px 1px,
        rgb(255, 255, 251) 0px 0px 2px;
      // font-family: @font-custom;
      &:hover {
        color: @titleHoverColor;
        -webkit-animation: jumpWhite 1.5s ease-in-out infinite alternate;
        animation: jumpWhite 1.5s ease-in-out infinite alternate;
      }
    }
  }
  @-webkit-keyframes jumpWhite {
    from {
      text-shadow: 0 0 1px @titleHoverColor, 0 0 2px @titleHoverColor,
        0 0 3px @titleHoverColor, 0 0 5px @titleColor, 0 0 8px @titleColor,
        0 0 9px @titleColor, 0 0 10px @titleColor, 0 0 15px @titleColor;
    }
    to {
      text-shadow: 0 0 0.5px @titleHoverColor, 0 0 1px @titleHoverColor,
        0 0 1.5px @titleHoverColor, 0 0 2px @titleColor, 0 0 4px @titleColor,
        0 0 5px @titleColor, 0 0 6px @titleColor, 0 0 8px @titleColor;
    }
  }
  @keyframes jumpWhite {
    from {
      text-shadow: 0 0 1px @titleHoverColor, 0 0 2px @titleHoverColor,
        0 0 3px @titleHoverColor, 0 0 5px @titleColor, 0 0 8px @titleColor,
        0 0 9px @titleColor, 0 0 10px @titleColor, 0 0 15px @titleColor;
    }
    to {
      text-shadow: 0 0 0.5px @titleHoverColor, 0 0 1px @titleHoverColor,
        0 0 1.5px @titleHoverColor, 0 0 2px @titleColor, 0 0 4px @titleColor,
        0 0 5px @titleColor, 0 0 6px @titleColor, 0 0 8px @titleColor;
    }
  }
  .post-list-item {
    padding: 0 12px;
    margin: 0 auto 30px;
    text-align: center;
    max-width: 740px;
  }
  .article-card {
    padding: 16px 20px 0;
    border-bottom: solid 1px #e0e0e0;
  }
  .post-content {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 10px;
    > div {
      text-align: center;
    }
    .content {
      text-align: left;
      padding: 0;
      > *:first-child {
        margin-top: 0;
      }
      blockquote {
        font-size: 16px;
      }
      h1,h2, h3,h4,h5 {
        margin-top: 0;
        padding-top: 0;
      }
    }
  }
  .post-title {
    margin: 0 0 16px;
    border: none;
  }
  .post-meta {
    color: #999;
    margin: 0 0 10px;
    line-height: 19px;
    font-size: 14px;
    list-style: none;
    overflow: hidden;
    a {
      color: #999;
    }
    .icon {
      vertical-align: middle;
      font: normal normal normal 14px/1 FontAwesome;
    }
    i {
      margin: 0 4px;
    }
  }
  .post-more {
    @fontColor: #666;
    overflow: visible;
    border: 0;
    -moz-user-select: text;
    display: inline-block;
    text-decoration: none;
    padding: 6px 15px;
    background-color: #fff;
    color: @fontColor;
    border: 2px solid @fontColor;
    border-radius: 6px;
    -webkit-transition: all 2s ease;
    transition: all 0.2s ease;
    font-size: 15px !important;
    &:hover {
      background: @fontColor;
      color: #fff;
    }
  }
  .article-card .post-footer {
    margin: 0 -20px;
    padding: 12px 20px 8px;
  }
  #page-nav {
    margin: 30px 0 0;
    text-align: center;
    .inner {
      display: inline-block;
    }
    a,
    span {
      display: inline-block;
      line-height: 34px;
      padding: 0 1em;
      margin: 0 2px;
      font-size: 14px;
      color: #000;
      border-radius: 3px;
      overflow: hidden;
      .transition(0.4s);
    }
    a {
      &:hover,
      &:active {
        color: #999;
        background: #dadada;
      }
    }
    .current {
      color: #fff;
      background: #999;
    }
  }
  @media screen and (max-width: 760px) {
    .post-content {
      width: 100%;
    }
    .post-meta {
      font-size: 12px;
    }
    .post-title {
      font-size: 20px;
      line-height: 25px;
      a {
        letter-spacing: 1px;
        font-size: 110%;
        font-family: inherit;
      }
    }
    .post-more {
      font-size: 13px !important;
    }
    .post-list {
      margin: 0 -16px;
    }
    .post-list-item {
      padding: 0;
      margin-bottom: 16px;
    }
  }
}
</style>