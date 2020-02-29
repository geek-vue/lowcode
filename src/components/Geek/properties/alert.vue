<template>
  <div class="alert-properties">
    <el-input type="textarea" :rows="5" v-model="data.body" />
  </div>
</template>

<script>
import mixin from './mixins'

export default {
  mixins: [mixin]
}
</script>
