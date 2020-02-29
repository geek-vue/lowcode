<template>
  <div class="field-route" @click="go">
    <div class="title">{{title}}</div>
    <svg-icon icon-class="arrow-right" />
  </div>
</template>

<script>
export default {
  inject: ['path'],
  props: ['title', 'subpath'],
  methods: {
    go() {
      this.subpath.forEach(sub => this.path.push(sub))
    }
  }
}
</script>

<style lang="scss" scoped>
.field-route {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background: #F5F7FA;
  }
  .title {
    flex: 1;
  }
}
</style>