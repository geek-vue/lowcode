<template>
  <div class="geek-route-maker">
    <el-dialog class="geek-dialog" title="页面管理" :visible.sync="dialogVisible" width="50%">
      <page-manager :title="true" />
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageManager from './index.vue'

export default {
  name: 'RouteMaker',
  components: { PageManager },
  props: {
    visible: Boolean
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible
      },
      set(v) {
        this.$emit('update:visible', v)
      }
    }
  }
}
</script>
