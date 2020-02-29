<template>
  <div class="page-maker">
    <geek-page v-bind="page" />
    <div class="page-properties">
      <div class="geek-panel geek-panel--default">
        <div class="geek-panel-heading">
          <div class="geek-panel-title">操作</div>
          <div class="buttons">
            <el-button size="mini" type="success" @click="pageManageShow = true">页面管理</el-button>
            <el-button size="mini" @click="savePage"><svg-icon icon-class="save" /></el-button>
          </div>
        </div>
      </div>
      <div class="geek-panel geek-panel--primary property-panel">
        <div class="geek-panel-heading">
          <div class="geek-panel-title">属性面板{{currComponent && currComponent.type ? `[${currComponent.type.replace(/^geek-/, '')}]` : ''}}</div>
          <el-button v-if="path.length" size="mini" circle @click="goParent"><svg-icon icon-class="arrow-up" /></el-button>
        </div>
        <div class="geek-panel-body" :key="path.join()">
          <template v-if="currComponent">
            <page-properties v-if="currComponent.type == 'geek-page'" />
            <html-properties v-if="isString(currComponent) || currComponent.type == 'geek-html'" />
            <alert-properties v-if="currComponent.type == 'geek-alert'" />
            <button-toolbar-properties v-if="currComponent.type == 'geek-button-toolbar'" />
            <button-properties v-if="currComponent.type == 'geek-button'" />
            <panel-properties v-if="currComponent.type == 'geek-panel'" />
          </template>
        </div>
      </div>
      <div class="geek-panel geek-panel--primary">
        <div class="geek-panel-heading">
          <div class="geek-panel-title">组件列表</div>
        </div>
        <div class="geek-panel-body">
          <el-tree ref="tree" :data="componentTree" :default-expanded-keys="treeExpandedKeys" node-key="id" highlight-current @node-click="handleNodeClick" />
        </div>
      </div>
    </div>

    <route-maker :visible.sync="pageManageShow" />
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { isString, isArray, isObject } from '@/utils/types'
import getComponentTree from '@/utils/component-type'
import RouteMaker from './route-maker'
import PageProperties from '@/components/Geek/properties/page'
import HtmlProperties from '@/components/Geek/properties/html'
import AlertProperties from '@/components/Geek/properties/alert'
import ButtonToolbarProperties from '@/components/Geek/properties/button-toolbar'
import ButtonProperties from '@/components/Geek/properties/button'
import PanelProperties from '@/components/Geek/properties/panel'

export default {
  name: 'SimplePage',
  components: { RouteMaker, PageProperties, HtmlProperties, AlertProperties, ButtonToolbarProperties, ButtonProperties, PanelProperties },
  provide() {
    return {
      page: this.page,
      path: this.path
    }
  },
  data() {
    const simplePage = {
      "type": "geek-page",
      "title": "标题",
      "remark": "提示 Tip",
      "body": "内容部分. 可以使用 \\${var} 获取变量。如: `\\$date`: ${date}",
      "aside": { type: 'geek-aside' },
      "toolbar": "工具栏",
      "initApi": "https://houtai.baidu.com/api/mock2/page/initData"
    }
    const getPage = (pageData, id) => {
      let page = null
      if (isArray(pageData)) {
        pageData.forEach(item => {
          let _page = getPage(item, id)
          if (_page) page = _page
        })
      } else if (isObject(pageData)) {
        if (pageData.id === id) {
          page = pageData
        } else if (pageData.children && pageData.children.length) {
          page = getPage(pageData.children, id)
        }
      }
      return page
    }
    let page = getPage(this.$store.state.geek.pages.slice(), this.$route.params.pageid)
    if (page) page = page.data
    else page = simplePage
    
    return {
      components: Vue.options.components,
      page,
      path: [],
      pageManageShow: false
    }
  },
  computed: {
    ...mapGetters(['pages']),
    currComponent() {
        if (this.path.length) {
          let prop = this.page, path = this.path.slice(), tmp = path.shift()
          while (tmp !== undefined) {
            prop = prop[tmp]
            tmp = path.shift()
          }
          return prop
        } else {
          return this.page
        }
    },
    componentTree() {
      return getComponentTree(this.page)
    },
    treeExpandedKeys() {
      return [this.path.length ? this.path.join('.') : 'page']
    }
  },
  watch: {
    path() {
      this.$refs.tree.setCurrentKey(this.path.length ? this.path.join('.') : 'page')
    }
  },
  methods: {
    isString, isArray, isObject,
    handleNodeClick(data) {
      //   this.curr = data
      let path = data.path.slice()
      while (this.path.length) this.path.splice(0, 1)
      data.path.slice().forEach(p => this.path.push(p))
      console.log('data', data, this.path)
    },
    goParent() {
      this.path.pop()
      this.path.pop()
    },
    savePage() {
      console.log(this.$route.params.pageid, this.page, this.pages)
      this.$store.dispatch('geek/setPage', this.pages)
      this.$message({ message: '保存成功', type: 'success' })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-maker {
  height: 100%;
  display: flex;
  .page-properties {
    display: flex;
    flex-flow: column;
    background: #fff;
    > .geek-panel {
      width: 250px;
      margin: 0;
      &.geek-panel--primary {
        flex: 1;
        display: flex;
        flex-flow: column;
        &.property-panel {
          flex: 2;
        }
      }
      .geek-panel-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 45px;
      }
      .geek-panel-body {
        flex: 1;
        overflow-y: auto;
      }
    }
  }
}
</style>