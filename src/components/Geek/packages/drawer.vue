<template>
  <el-drawer
    class="geek-drawer"
    v-loading="loading"
    :visible.sync="ctrl.show"
    :direction="positionMap[position]"
    :size="size"
    :with-header="false"
    :append-to-body="true">
    <div class="geek-drawer-content">
      <div class="geek-drawer-header">
        <div class="geek-drawer-title">{{title}}</div>
      </div>
      <div class="geek-drawer-body">
        <geek-component :data="drawerBody" v-bind="$attrs" />
      </div>
      <div class="geek-drawer-footer">
        <geek-component :data="actions" v-bind="$attrs" />
      </div>
    </div>
  </el-drawer>
</template>

<script>
import { doAjax } from '@/utils/http'
import { isString, isArray, isObject } from '@/utils/types';

export default {
  name: 'GeekDrawer',
  inject: ['ctrl'],
  props: {
    title: String,
    body: [String, Array, Object],
    position: String,
    size: { type: String, default: '30%' },
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
    drawerBody() {
      if (isString(this.body)) return this.body
      else if (isObject(this.body)) return this.body.type === 'geek-form' ? { ...this.body, wrapWithPanel: false } : this.body
      else if (isArray(this.body)) return this.body.map(item => item.type === 'geek-form' ? { ...item, wrapWithPanel: false } : item)
    }
  },
  data() {
    return {
      loading: false,
      fullscreen: this.size === '100%',
      positionMap: {
        left: 'ltr',
        right: 'rtl',
        top: 'ttb',
        bottom: 'btt'
      }
    }
  },
  methods: {
    doAction(e) {
      if (e.actionType === 'submit' || e.actionType === 'confirm') {
        let targets = []
        this.loading = true
        this.getForms(this, targets)
        Promise.all(targets.map(item => item.submit())).then(data => {
          this.loading = false
          if (e.close) {
            this.ctrl.show = false
          }
        }).catch(e => {
          this.loading = false
        })
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
