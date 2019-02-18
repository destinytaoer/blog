<template>
  <div class="pagination">
    <span v-if="current > 1" class="item">
        <a @click="$emit('change-index', current - 1)" v-html="prevText" class="link"></a>
    </span>
    <ul class="numList" v-if="total <= pageRange">
      <li class="item" v-for="index in total">
        <a @click="$emit('change-index', index)" :class="['link',index===current ? 'active' : '']">{{index}}</a>
      </li>
    </ul>
    <ul class="numList" v-else>
      <li v-if="current - l > 1" class="item">
        <a @click="$emit('change-index', 1)" :class="['link',1===current ? 'active' : '']">1</a>
      </li>
      <li v-if="current - l > 2" class="item">
        <span class="split">•••</span>
      </li>
      <li class="item" v-for="index in numArr">
        <a @click="$emit('change-index', index)" :class="['link',index ===current ? 'active' : '']">{{index}}</a>
      </li>
      <li v-if="current + r < total - 1" class="item">
        <span class="split">•••</span>
      </li>
      <li v-if="current + r < total" class="item">
        <a @click="$emit('change-index', total)" :class="['link',total===current ? 'active' : '']">{{total}}</a>
      </li>
    </ul>
    <span v-if="current < total" class="item">
      <a @click="$emit('change-index', current + 1)" v-html="nextText" class="link"></a>
    </span>
  </div>
</template>

<script>
export default {
  props:{
    basePath: {
      type: String,
      default: '/'
    },
    current: {
      type: Number,
      default: 1
    },
    prevText: {
      type: String,
      default: '上一页'
    },
    nextText: {
      type: String,
      default: '下一页'
    },
    total: {
      type: Number
    },
    pageRange: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      l: Math.ceil((this.pageRange - 1)/2),
      r: Math.floor((this.pageRange - 1)/2),
    }
  },
  computed: {
    numArr(){
      const {current, total, l, r, pageRange, range} = this
      let start = current - l
      let end = current + r
      if (start < 1) {
        start = 1
        end = start + pageRange - 1
      }
      if (end > total) {
        end = total
        start = total - pageRange + 1
      }
      return this.range(start, end)
    }
  },
  methods: {
    range(min, max) {
      return Array.apply(null,{length: max - min + 1}).map((v,i) => min + i)
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  display:flex;
  justify-content: center;
  .numList {
    list-style: none;
    display: inline-block;
    margin: 0;
    padding-left: 0;
  }
  .item {
    display: inline-block;
    .link, .split {
      display: block;
      background: transparent;
      color: #000;
      line-height: 2;
      font-size: 16px;
      color: #000;
      border-radius: 3px;
      overflow: hidden;
    }
    .link{
      padding: 0 1rem;
      margin: 0 2px;
      cursor: pointer;
      -webkit-transition: .4s ease-in-out;
      transition: .4s ease-in-out;
      &:hover, &:active {
        color: #999;
        background: #dadada;
      }
      &.active {
        color: #fff;
        background: #999;
      }
    }
  }
}
@media screen and (max-width: 520px) {
  .pagination {
    .numList {
      display: none;
    }
  }
}
</style>