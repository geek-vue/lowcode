import Vue from 'vue'
import { isString, isArray, isObject } from '@/utils/types'
const components = Vue.options.components

/* let map = {
  'geek-page'(vm, path=['page']) {
    const props = getComponentProps(vm.type)
    console.log(props)
    let children = []
    if (isObject(vm.body)) children = getItem(vm.body, ['body'])
    else if (isArray(vm.body)) children = vm.body.map((item, i) => getItem(item, ['body', i]))
    return [{ id: path.join('.'), type: 'page', label: '页面', path: [], children }]
  },
  'geek-html'(vm, path) {
    return { id: path.join('.'), type: vm.type, label: l(vm.type, vm.text), path }
  },
  'geek-alert'(vm, path) {
    return { id: path.join('.'), type: vm.type, label: l(vm.type, vm.body), path }
  },
  'geek-button-toolbar'(vm, path) {
    return { id: path.join('.'),  type: vm.type, label: l(vm.type), path, children: vm.body.map((item, i) => getItem(item, path.concat(['body', i]))).filter(item => !!item) }
  },
  'geek-button'(vm, path) {
    return { id: path.join('.'),  type: vm.type, label: l(vm.type, vm.label), path, children: vm.actionType ? map[vm.actionType] ? [map[vm.actionType]({...vm[vm.actionType], type: vm.actionType}, path.concat([vm.actionType]))] : [] : [] }
  },
  'geek-crud'(vm, path) {
    return { id: path.join('.'),  type: vm.type, label: l(vm.type), path }
  },
  'geek-dialog'(vm, path) {
    return { id: path.join('.'),  type: 'geek-dialog', label: l(vm.type, vm.title), path, children: isString(vm.body) ? [] : isObject(vm.body) ? [getItem(vm.body, path.concat(['body']))] : vm.body.map((item, i) => getItem(item, path.concat(['body', i]))).filter(item => !!item) }
  },
  'geek-drawer'(vm, path) {
    return { id: path.join('.'),  type: vm.type, label: l(vm.type, vm.title), path, children: isString(vm.body) ? [] : isObject(vm.body) ? [getItem(vm.body, path.concat(['body']))] : vm.body.map((item, i) => getItem(item, path.concat(['body', i]))).filter(item => !!item) }
  },
  'geek-divider'(vm, path) {
    return { id: path.join('.'),  type: vm.type, label: l(vm.type), path }
  },
  'geek-form'(vm, path) {
    return { id: path.join('.'),  type: vm.type, label: l(vm.type, vm.title), path, children: vm.body.map(item => getItem(item)).filter(item => !!item) }
  },
  'geek-panel'(vm, path) {
    return { id: path.join('.'),  type: vm.type, label: l(vm.type, vm.title), path, children: vm.body.map(item => getItem(item)).filter(item => !!item) }
  },
  'geek-tab'(vm, path) {
    return { id: path.join('.'),  type: vm.type, label: l(vm.type, vm.tabs && vm.tabs[0].title), path, children: vm.tabs.map(item => getItem(item)).filter(item => !!item) }
  },
} */

function getComponentProps(type) {
  let c = components[type.replace(/^\w/, a => a.toUpperCase()).replace(/-(\w)/, (a, b) => b.toUpperCase())]
  return c ? c.options.props : {}
}

class Component {
  static BODY = 'body'
  static ACTION_TYPE = 'actionType'

  vm
  type
  path
  props

  constructor(vm, path=[]) {
    if (isString(vm)) {
      this.type = 'geek-html'
      this.vm = { type: this.type, text: vm }
    } else {
      this.type = vm.type
      this.vm = vm
    }
    this.path = path
    this.props = this.getComponentProps()
  }

  getComponentProps() {
    let c = components[this.type.replace(/^\w/, a => a.toUpperCase()).replace(/-(\w)/g, (a, b) => b.toUpperCase())]
    if (!c) throw new Error(`Component ${this.type} is not exist!!`)
    return c.options.props
  }

  getLabel() {
    let currentPath = this.path[this.path.length - 1]
    let type = this.type.replace(/^geek-/, '')

    for (var p in this.props) {
      let vm = this.vm[p]
      if (this.props[p].type === String && vm) {
        vm = vm.trim().substr(0, 15)
        if (currentPath && !/\d+/.test(currentPath))
          return `${currentPath}[${vm}]`
        return `${type}[${vm}]`
      }
    }
    return type
  }

  getChildren() {
    let children = []
    for (var p in this.props) {
      let vm = this.vm[p]
      let types = [].concat(this.props[p].type)
      if ((types.includes(Array) || types.includes(Object)) && vm) {
        let path = this.path.concat(p)
        if (isString(vm)) {
          children.push({ id: path.join('.'), type: 'geek-html', label: `${p}[${vm}]`, path })
        } else if (isObject(vm)) {
          children.push(new Component(vm, path).toTree())
        } else if (isArray(vm)) {
          vm.forEach((item, i) => children.push(new Component(item, path.concat(i)).toTree()))
        }
      }
    }
    return children
  }

  toTree() {
    let path = this.path.length ? this.path : ['page']
    return {
      id: path.join('.'),
      type: this.type,
      label: this.getLabel(),
      path: this.path,
      children: this.getChildren()
    }
  }
}

function l(type, text) {
  return type.replace(/^geek-/i, '') + (text ? `[${text}]` : '')
}

function getItem(vm, path) {
  if (isString(vm)) return map['geek-html']({ type: 'geek-html', text: vm }, path)
  else if (map[vm.type]) return map[vm.type](vm, path)
  return null
}

export default vm => {
  let tree = new Component(vm).toTree()
  return [tree]
  // return map[vm.type](vm)
}