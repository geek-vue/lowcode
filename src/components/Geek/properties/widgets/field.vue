<template>
  <div class="field" :class="{'multi-line': $slots.toolbar}">
    <div class="title">
      <span>{{title}}</span>
      <slot name="toolbar" />
    </div>
    <div class="field-body"><slot /></div>
  </div>
</template>

<script>
export default {
  props: ['title']
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