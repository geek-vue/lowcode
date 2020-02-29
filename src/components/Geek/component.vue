<template>
  <div v-if="isString(data)" v-html="compileTpl(data)" />
  <div v-else-if="isArray(data)">
    <template v-for="(item, i) in data">
      <div v-if="isString(item)" :key="i" v-html="compileTpl(item)" />
      <component v-else :key="i" :is="componentType(item.type)" v-bind="{...$attrs, ...item}"></component>
    </template>
  </div>
  <component v-else-if="isObject(data)" :is="componentType(data.type)" v-bind="{...$attrs, ...data}"></component>
</template>

<script>
import { isString, isArray, isObject } from '@/utils/types'

export default {
  name: 'GeekComponent',
  props: ['data'],
  inject: ['pageData'],
  computed: {
    compileTpl() {
      return tpl => {
        return tpl.replace(/(\\?)\$\{([^\}]*)\}/g, (str, slice, vars) => {
          return !slice ? this.pageData[vars] : str
        })
      }
    },
    componentType() {
      return t => {
        if (['button', 'submit', 'reset'].some(item => item === t)) {
          return 'geek-button'
        }
        return t
      }
    }
  },
  methods: { isString, isArray, isObject }
}
</script>
