<template>
  <div class="geek-alert" :class="`geek-alert--${level}`" v-html="body"></div>
</template>

<script>
export default {
  name: 'GeekAlert',
  props: {
    level: String,
    body: String
  }
}
</script>
