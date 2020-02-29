import Vue from 'vue'
import { isString, isArray } from '@/utils/types'

export default {
  inject: ['page', 'path'],
  data() {
    return {
      data: {},
      comps: Object.keys(Vue.options.components).filter(item => /^geek/i.test(item)).filter(item => !['GeekPage', 'GeekComponent', 'GeekAside'].includes(item)).map(item => item.substr(4).toLowerCase())
    }
  },
  created() {
    let data = this.page, parentData = this.page, path = this.path.slice(), tmp = path.shift()
    while (tmp !== undefined) {
      data = data[tmp]
      tmp = path.shift()
      if (tmp !== undefined) {
        parentData = data
      }
    }
    this.data = data

    if (isString(data)) {
      this.$watch('data', val => {
        if (isArray(parentData)) {
          parentData.splice(this.path[this.path.length - 1], 1, val)
        } else {
          parentData[this.path[this.path.length - 1]] = val
        }
      })
    }
  },
  methods: {
    addComponent(compName) {
      console.log(compName)
      if (isArray(this.data.body)) {
        this.data.body.push({
          type: `geek-${compName}`, body: []
        })
      }
    }
  }
}