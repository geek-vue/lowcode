<template>
  <el-row class="geek-grid">
    <el-col class="geek-grid-col--sm" :span="Math.floor(24 / body.length)" v-for="(item, i) in body" :key="i">
      <geek-component :data="item" />
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'GeekGrid',
  props: ['body'],
  computed: {
    cols() {
      return Math.floor(24 / this.body.length);
    }
  }
}
</script>

<style lang="scss" scoped>
.geek-grid {
}
</style>