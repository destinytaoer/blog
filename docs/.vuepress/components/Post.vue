<template>
  <div class="post">
    <Content :custom='false' />

    <div class="page-edit">
      <div class="edit-link">
        <a
          :href="editLink"
          target="_blank"
          rel="noopener noreferrer"
        >{{ editLinkText }}</a>
        <OutboundLink />
      </div>

      <div
        class="last-updated"
        v-if="lastUpdated"
      >
        <span class="prefix">{{ lastUpdatedText }}: </span>
        <span class="time">{{ lastUpdated }}</span>
      </div>
    </div>

    <div
      class="page-nav"
      v-if="prev || next"
    >
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
            {{ prev.title }}
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
            {{ next.title }}
          </router-link>
          →
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { resolvePage, normalize, outboundRE, endingSlashRE } from "./util";
import moment from "moment";
export default {
  data() {
    return {};
  },
  computed: {
    lastUpdated() {
      let lastUpdated =
        this.$page.frontmatter.update || this.$page.frontmatter.date;
      return moment(new Date(lastUpdated)).format("YYYY-MM-DD hh:mm:ss");
    },

    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$site.themeConfig.lastUpdated === "string") {
        return this.$site.themeConfig.lastUpdated;
      }
      return "Last Updated";
    },

    prev() {
      let cur = this.$page.key;
      let posts = this.$posts;
      let index = posts.findIndex((value, index, arr) => {
        return value.key === cur;
      });
      console.log(index);
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

    editLink() {
      if (this.$page.frontmatter.editLink === false) {
        return;
      }
      const {
        repo,
        editLinks,
        docsDir = "",
        docsBranch = "master",
        docsRepo = repo
      } = this.$site.themeConfig;

      let path = normalize(this.$page.path);
      if (endingSlashRE.test(path)) {
        path += "README.md";
      } else {
        path += ".md";
      }
      if (docsRepo && editLinks) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path);
      }
    },

    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      );
    }
  },

  methods: {
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/;
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo;
        return (
          base.replace(endingSlashRE, "") +
          `/${docsBranch}` +
          (docsDir ? "/" + docsDir.replace(endingSlashRE, "") : "") +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        );
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`;

      return (
        base.replace(endingSlashRE, "") +
        `/edit/${docsBranch}` +
        (docsDir ? "/" + docsDir.replace(endingSlashRE, "") : "") +
        path
      );
    }
  }
};
</script>

<style lang="less" scoped>
.post {
  padding-left: 20rem;
  padding-bottom: 2rem;
}
.fix-footer {
  padding-left: 20rem;
}
@media screen and (max-width: 719px) {
  .post {
    padding-left: 0;
    padding-bottom: 0;
  }
}
</style>