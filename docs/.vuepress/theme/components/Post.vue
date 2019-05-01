<template>
  <main class="post">
    <slot name="top"/>

    <Content/>

    <footer class="page-edit">
      <div
        class="edit-link"
        v-if="editLink"
      >
        <a
          :href="editLink"
          target="_blank"
          rel="noopener noreferrer"
        >{{ editLinkText }}</a>
        <OutboundLink/>
      </div>

      <div
        class="last-updated"
        v-if="lastUpdated"
      >
        <span class="prefix">{{ lastUpdatedText }}: </span>
        <span class="time">{{ lastUpdated }}</span>
      </div>
    </footer>

    <div class="page-nav" v-if="prev || next">
      <p class="inner">
        <span
          v-if="prev"
          class="prev"
        >
          ←
          <router-link
            v-if="prev"
            class="prev"
            :to="prev.path"
          >
            {{ prev.title || prev.path }}
          </router-link>
        </span>

        <span
          v-if="next"
          class="next"
        >
          <router-link
            v-if="next"
            :to="next.path"
          >
            {{ next.title || next.path }}
          </router-link>
          →
        </span>
      </p>
    </div>

    <Vssue v-if="$frontmatter.comments"
      :title="$frontmatter.title"
      :options="{
        labels: ['Vssue', $frontmatter.title]
      }"
    />

    <slot name="bottom"/>
  </main>
</template>

<script>
import { resolvePage, normalize, outboundRE, endingSlashRE } from "../util"
import moment from "moment"

export default {
  computed: {
    lastUpdated() {
      let lastUpdated =
        this.$frontmatter.update || this.$frontmatter.date;
      return moment(new Date(lastUpdated)).format("YYYY-MM-DD hh:mm:ss");
    },

    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$themeConfig.lastUpdated === 'string') {
        return this.$themeConfig.lastUpdated
      }
      return 'Last Updated'
    },

    prev() {
      let cur = this.$page.key;
      let posts = this.$posts;
      let index = posts.findIndex((value, index, arr) => {
        return value.key === cur;
      });
      if (index === 0) {
        return;
      }
      return posts[index - 1];
    },

    next() {
      let cur = this.$page.key;
      let posts = this.$posts;
      let index = posts.findIndex((value, index, arr) => {
        return value.key === cur;
      });
      if (index === posts.length - 1) {
        return;
      }
      return posts[index + 1];
    },

    editLink () {
      if (this.$frontmatter.editLink === false) {
        return
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$themeConfig

      let path = normalize(this.$page.path)
      
      let pathArr = path.match(/\/\d{4}\/\d{2}\/(.+)\//);

      path = '/_posts/' + pathArr[1] + '.md'
      if (docsRepo && editLinks) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path)
      }
    },

    editLinkText () {
      return (
        this.$themeLocaleConfig.editLinkText
        || this.$themeConfig.editLinkText
        || `Edit this page`
      )
    }
  },
  methods: {
    createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : repo
        return (
          base.replace(endingSlashRE, '')
           + `/src`
           + `/${docsBranch}`
           + (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '')
           + path
           + `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`

      return (
        base.replace(endingSlashRE, '')
        + `/edit/${docsBranch}`
        + (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '')
        + path
      )
    }
  },
  mounted() {
    console.log('post');
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  flattern(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flattern (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flattern(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}
</script>

<style lang="stylus">
.post
  padding-left 20rem
  padding-bottom 2rem

@media (max-width: $MQMobile)
  .post
    padding-left 0
    padding-bottom 0
</style>