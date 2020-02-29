<template>
  <div class="field multi-line">
    <div class="title">
      <span>{{title}}</span>
      <el-dropdown trigger="click" @command="comp => $emit('addComponent', comp)">
        <el-button type="text" size="mini" icon="el-icon-plus">添加组件<i class="el-icon-arrow-down el-icon--right"></i></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in comps" :key="item" :command="item">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="field-body"><slot /></div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    title: {
      type: String,
      default: '子组件'
    }
  },
  data() {
    return {
      comps: Object.keys(Vue.options.components).filter(item => /^geek/i.test(item)).filter(item => !['GeekPage', 'GeekComponent', 'GeekAside'].includes(item)).map(item => item.substr(4).toLowerCase())
    }
  }
}
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  &.multi-line {
    flex-flow: column;
    align-items: flex-start;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border-bottom: 1px solid #eee;
    }
    .field-body {
      padding-left: 15px;
      width: 100%;
    }
  }
  .title {
    margin-right: 10px;
  }
  .field-body {
    flex: 1;
  }
}
</style>