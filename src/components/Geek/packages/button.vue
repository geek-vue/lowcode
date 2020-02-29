<template>
  <div class="geek-button">
    <el-tooltip :content="tooltip" :disabled="!tooltip">
      <el-button :size="size" :type="level || icon && 'text'" @click="clickHandler">
        <svg-icon v-if="icon" :icon-class="icon" class-name="m-r-xs" />{{label}}
      </el-button>
    </el-tooltip>
    <geek-component :data="{...$attrs, ...props}" v-if="actionType == 'geek-dialog' || actionType == 'geek-drawer'" />
  </div>
</template>

<script>
import { isFunction } from '@/utils/types'

export default {
  name: 'GeekButton',
  provide() {
    return {
      ctrl: this.ctrl
    }
  },
  props: {
    label: String,
    icon: String,
    tooltip: String,
    size: {
      type: String,
      default: 'medium'
    },
    level: String,
    // api: String,
    actionType: String,
    // confirmText: String,
  },
  data() {
    return {
      ctrl: { show: false },
      props: { type: this.actionType, ...this.$attrs[this.actionType] }
    }
  },
  methods: {
    clickHandler() {
      if (this.$attrs.type === 'submit' || this.actionType === 'submit') {
        this._doAction()
      } else if (this.actionType === 'confirm' || this.actionType === 'close') {
        this._doAction()
      } else if (this.actionType === 'geek-dialog' || this.actionType === 'geek-drawer') {
        this.ctrl.show = true
      } else if (this.actionType === 'ajax') {
        this._doAction()
      }
    },
    _doAction() {
      let vm = this.$parent
      while (vm.$parent !== vm.$root) {
        if (isFunction(vm.doAction)) {
          vm.doAction({ ...this.$attrs, actionType: this.actionType })
          break
        }
        vm = vm.$parent
      }
    }
  }
}
</script>
