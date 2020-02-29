<template>
  <el-dialog
    class="geek-dialog"
    v-loading="loading"
    :title="title"
    :visible.sync="ctrl.show"
    :close-on-press-escape="closeOnEsc"
    :fullscreen="fullscreen"
    :width="size"
    :append-to-body="true">
    <geek-component :data="dialogBody" v-bind="$attrs" />
    <span slot="footer" class="dialog-footer">
      <geek-component :data="actions" v-bind="$attrs" />
    </span>
  </el-dialog>
</template>

<script>
import { doAjax } from '@/utils/http'
import { isString, isArray, isObject } from '@/utils/types'

export default {
  name: 'GeekDialog',
  inject: ['ctrl'],
  props: {
    title: String,
    body: [String, Array, Object],
    size: { type: String, default: '50%' },
    closeOnEsc: Boolean,
    actions: {
      type: Array,
      default: () => [{
        "type": "geek-button",
        "actionType": "close",
        "label": "取消"
      }, {
        "type": "geek-button",
        "actionType": "confirm",
        "label": "确认",
        "level": "primary"
      }]
    },
    confirm: Boolean,
    onClose: null,
    onConfirm: null,
    showCloseButton: Boolean
  },
  computed: {
    dialogBody() {
      if (isString(this.body)) return this.body
      else if (isObject(this.body)) return this.body.type === 'geek-form' ? { ...this.body, wrapWithPanel: false } : this.body
      else if (isArray(this.body)) return this.body.map(item => item.type === 'geek-form' ? { ...item, wrapWithPanel: false } : item)
    }
  },
  data() {
    return {
      loading: false,
      fullscreen: this.size === '100%'
    }
  },
  methods: {
    doAction(e) {
      console.log('--------', e)
      if (e.actionType === 'submit' || e.actionType === 'confirm') {
        let targets = []
        this.getForms(this, targets)
        if (targets.length) {
          this.loading = true
          Promise.all(targets.map(item => item.submit())).then(data => {
            this.loading = false
            if (e.close) {
              this.ctrl.show = false
            }
          }).catch(e => {
            this.loading = false
          })
        } else {
          this.ctrl.show = false
        }
      } else if (e.actionType === 'close') {
        this.ctrl.show = false
      } else if (e.actionType === 'ajax') {
        if (e.confirmText) {
          this.$confirm(e.confirmText).then(res => {
            if (res === 'confirm') {
              this.doAjax(e)
            }
          })
        } else {
          this.doAjax(e)
        }
      }
    },
    getForms(vm, forms) {
      if (vm.$options.name === 'GeekForm') forms.push(vm)
      vm.$children.forEach(child => this.getForms(child, forms), this)
    },
    doAjax
  }
}
</script>
