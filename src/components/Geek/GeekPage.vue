<template>
  <div class="geek-page geek-page--withSidebar">
    <div class="geek-page-aside" v-if="aside">
      <geek-component :data="aside" />
    </div>
    <div class="geek-page-content">
      <div class="geek-page-headerRow" v-if="title || toolbar">
        <div class="geek-page-header" v-if="title">{{title}}</div>
        <div class="geek-page-toolbar" v-if="toolbar">
          <geek-component :data="toolbar" />
        </div>
      </div>
      <div class="geek-page-body" :class="{'has-nav': title || toolbar}">
        <geek-component :data="body" />
      </div>
    </div>
  </div>
</template>

<script>
import { doAjax, GET } from '@/utils/http'

export default {
  name: 'GeekPage',
  provide() {
    return {
      pageData: this.pageData
    }
  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    aside: [String, Object],
    toolbar: [String, Object, Array],
    body: [String, Object, Array],
    initApi: String
  },
  data() {
    return {
      pageData: {}
    }
  },
  created() {
    if (this.initApi) {
      GET(this.initApi).then(({ data }) => {
        for (let p in data) {
          this.$set(this.pageData, p, data[p])
        }
      }).catch(e => {
        console.log('err----', e)
      })
    }
  },
  methods: {
    doAction(e) {
      if (e.actionType === 'ajax') {
        if (e.confirmText) {
          this.$confirm(e.confirmText).then(res => {
            if (res === 'confirm') {
              this.doAjax(e)
            }
          })
        } else {
          this.doAjax(e)
        }
      }
    },
    doAjax
  }
};
</script>
