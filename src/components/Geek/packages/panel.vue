<template>
  <div class="geek-panel geek-panel--default">
    <div class="geek-panel-heading" v-if="title">
      <h3 class="geek-panel-title">{{title}}</h3>
    </div>
    <div class="geek-panel-body">
      <geek-component :data="body" />
    </div>
    <div class="geek-panel-btnToolbar geek-panel-footer" v-if="actions">
      <geek-component :data="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeekPanel',
  props: ['title', 'body', 'actions']
}
</script>
