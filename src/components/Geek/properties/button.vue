<template>
  <div class="button-properties">
    <el-input v-model="data.label" />
    <el-input v-model="data.actionType" />
  </div>
</template>

<script>
import mixin from './mixins'

export default {
  mixins: [mixin]
}
</script>
