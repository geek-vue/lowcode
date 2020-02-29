<template>
  <div class="html-properties">
    <el-input v-if="isString(data)" type="textarea" :rows="5" v-model="data" />
    <el-input v-else type="textarea" :rows="5" v-model="data.text" />
  </div>
</template>

<script>
import mixin from './mixins'
import { isString } from '@/utils/types'

export default {
  mixins: [mixin],
  methods: { isString }
}
</script>
