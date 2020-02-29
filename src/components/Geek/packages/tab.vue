<template>
  <el-tabs class="geek-tab" :type="mode" v-model="active" @tab-click="handleClick">
    <el-tab-pane v-for="(tab, i) in tabs" :key="i" :label="tab.title" :name="tab.title">
      <geek-component :data="tab.body" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'GeekTab',
  props: {
    mode: String,
    tabs: Array
  },
  data() {
    return {
      active: this.tabs[0].title
    }
  },
  methods: {
    handleClick() {}
  }
}
</script>
