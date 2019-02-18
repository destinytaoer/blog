<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>

    <div
      class="custom-layout"
      v-if="$page.frontmatter.layout"
    >
      <component :is="$page.frontmatter.layout" />
    </div>

    

    <Home v-else-if="$page.frontmatter.home" />

    <Page
      v-else-if="$page.path !== ''"
      :sidebar-items="sidebarItems"
    >
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>
    <router-view v-else></router-view>
    <footer :class="['fix-footer', shouldShowSidebar ? 'post-footer' : '']">
      <p>© 2016-{{present}} <i class="icon icon-love"></i> destiny</p>
      <span>
        <i class="icon icon-myself">
          <span
            id="busuanzi_container_site_uv"
            style="display:none"
          >
            访问用户：<span id="busuanzi_value_site_uv"></span>
          </span>人</i>
        <i class="icon icon-eye">
          <span
            id="busuanzi_container_site_pv"
            style="display:none"
          >
            访问次数：<span id="busuanzi_value_site_pv"></span>
          </span>次
        </i>
      </span>
    </footer>
    <BackToTop></BackToTop>
    <SWUpdatePopup :updateEvent="swUpdateEvent" />
  </div>
</template>

<script>
import Vue from "vue";
import nprogress from "nprogress";
import Home from "./Home.vue";
import Navbar from "./Navbar.vue";
import Page from "./Page.vue";
import Sidebar from "./Sidebar.vue";
import SWUpdatePopup from "./SWUpdatePopup.vue";
import { resolveSidebarItems } from "./util";
import BackToTop from '../components/BackToTop'
import Blog from '../components/Blog'
import VueRouter from 'vue-router'
const routes = [
  {path: '/blog/:index/', component: Blog}
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default {
  components: { Home, Blog, Page, Sidebar, Navbar, SWUpdatePopup, BackToTop },

  data() {
    return {
      isSidebarOpen: false,
      swUpdateEvent: null
    };
  },

  computed: {
    present() {
      return new Date().getFullYear()
    },
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter, path } = this.$page;
      if (path === '') return false
      return (
        frontmatter.layout === "post" ||
        !frontmatter.layout &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar
        },
        userPageClass
      ];
    }
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);

    // configure progress bar
    nprogress.configure({ showSpinner: false });

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start();
      }
      next();
    });

    this.$router.afterEach(() => {
      nprogress.done();
      this.isSidebarOpen = false;
    });

    this.$on("sw-updated", this.onSWUpdated);
    this.bsz()
  },

  methods: {
    bsz() {
      var bszCaller, bszTag, ready, scriptTag;
      ! function () {
        var c, d, e, a = !1,
          b = [];
        ready = function (c) {
          return a || "interactive" === document.readyState || "complete" === document.readyState ? c.call(document) : b.push(function () {
            return c.call(this)
          }), this
        },
        d = function () {
          for (var a = 0, c = b.length; c > a; a++) b[a].apply(document);
          b = []
        },
        e = function () {
          a || (a = !0, d.call(window),
          document.removeEventListener ? document.removeEventListener("DOMContentLoaded", e, !1) : document.attachEvent && (document.detachEvent("onreadystatechange", e), window == window.top && (clearInterval(c), c = null)))
          },
          document.addEventListener ? document.addEventListener("DOMContentLoaded", e, !1) :
          document.attachEvent && (document.attachEvent("onreadystatechange", function () {
            /loaded|complete/.test(document.readyState) && e()
          }),
          window == window.top && (
            c = setInterval(function () {
              try {
                a || document.documentElement.doScroll("left")
              } catch (b) {
                return
              }
              e()
            }, 5))
          )
        }(),
        bszCaller = {
          fetch: function (a, b) {
            var c = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
            window[c] = this.evalCall(b), a = a.replace("=BusuanziCallback", "=" + c), scriptTag = document.createElement("SCRIPT"), scriptTag.type = "text/javascript", scriptTag.defer = !0, scriptTag.src = a, document.getElementsByTagName("HEAD")[0].appendChild(scriptTag)
          },
          evalCall: function (a) {
            return function (b) {
              ready(function () {
                try {
                  a(b), scriptTag.parentElement.removeChild(scriptTag)
                } catch (c) {
                  bszTag.hides()
                }
              })
            }
          }
        },
        bszCaller.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback", function (a) {
          bszTag.texts(a), bszTag.shows()
        }),
        bszTag = {
          bszs: ["site_pv", "page_pv", "site_uv"],
          texts: function (a) {
            this.bszs.map(function (b) {
              var c = document.getElementById("busuanzi_value_" + b);
              c && (c.innerHTML = a[b])
            })
          },
          hides: function () {
            this.bszs.map(function (a) {
              var b = document.getElementById("busuanzi_container_" + a);
              b && (b.style.display = "none")
            })
          },
          shows: function () {
            this.bszs.map(function (a) {
              var b = document.getElementById("busuanzi_container_" + a);
              b && (b.style.display = "inline")
            })
          }
        };
    },
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },

    onSWUpdated(e) {
      this.swUpdateEvent = e;
    }
  },
  router
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>