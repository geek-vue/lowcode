<template>
  <div class="geek-buttonToolbar" :class="className">
    <geek-component v-for="(item, i) in body" :key="i" :data="item" />
  </div>
</template>

<script>
export default {
  name: 'GeekButtonToolbar',
  props: ['className', 'body']
}
</script>
