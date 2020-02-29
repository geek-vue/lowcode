<template>
  <div class="geek-html" v-html="text"></div>
</template>

<script>
export default {
  name: 'GeekHtml',
  props: {
    text: String
  }
}
</script>
