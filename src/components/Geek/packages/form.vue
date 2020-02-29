<template>
  <geek-component v-if="wrapWithPanel" :data="formWithPanel" />
  <el-form v-else ref="form" class="geek-form" :model="form" :inline="mode == 'inline'" :label-position="mode == 'horizontal' || mode == 'inline' ? 'left' : 'top'" label-width="auto">
    <template v-for="(item, i) in body">
      <el-form-item class="geek-form-item" v-if="item.name" :key="i" :label="getLabel(item)" :prop="item.name" :rules="getRule(item)">
        <div v-if="item.type == 'static'">{{form[item.name]}}</div>
        <el-input v-else-if="item.type == 'text'" v-model="form[item.name]"></el-input>
        <el-input v-else-if="item.type == 'email'" v-model="form[item.name]"></el-input>
        <el-input v-else-if="item.type == 'password'" v-model="form[item.name]" type="password"></el-input>
        <el-checkbox v-else-if="item.type == 'checkbox'" v-model="form[item.name]">{{item.label}}</el-checkbox>
        <el-select v-else-if="item.type == 'select'" v-model="form[item.name]">
          <el-option v-for="(option, i) in item.options" :key="i" :label="option" :value="option" />
        </el-select>
        <!-- <el-button v-else-if="item.type == 'submit'" :type="item.btnClassName" @click="submit">{{item.label}}</el-button>
        <el-button v-else-if="item.type == 'button'" :type="item.level">{{item.label}}</el-button> -->
        <div class="tip">{{item.desc}}</div>
      </el-form-item>
      <geek-component v-else :key="i" :data="item" />
    </template>
  </el-form>
</template>

<script>
import { POST } from '@/utils/http'
import { isFunction } from '@/utils/types'

export default {
  name: 'GeekForm',
  props: {
    title: String,
    api: String,
    mode: String,
    body: Array,
    wrapWithPanel: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      form: {}
    }
  },
  computed: {
    hasSubmit() {
      return this.body.some(item => item.type === 'submit')
    },
    formWithPanel() {
      return {
        type: 'geek-panel',
        title: this.$props.title,
        body: { ...this.$props, ...this.$attrs, type: 'geek-form', wrapWithPanel: false },
        actions: this.hasSubmit ? null : [{ type: 'submit', label: '提交', level: 'primary' }]
      }
    }
  },
  created() {
    console.log('form=========', this)
    this.body.forEach(item => {
      if (item.name) {
        this.$set(this.form, item.name, this.$attrs.formdata ? this.$attrs.formdata[item.name] : '')
      }
    });
  },
  methods: {
    getLabel(item) {
      let noLabelTypeList = ['checkbox', 'submit', 'button']
      if (noLabelTypeList.every(n => n !== item.type)) {
        return item.label
      }
    },
    getRule(item) {
      let rules = []
      if (item.required) {
        rules.push({ required: true, message: item.placeholder, trigger: 'blur' })
      }
      if (item.type === 'email') {
        rules.push({ type: 'email', message: '请输入正确的邮箱地址', trigger: ['change'] })
      }
      return rules
    },
    doAction(e) {
      if (this.$refs.form) {
        this.submit(e)
      } else {
        this.$children[0].$children[0].$children[0].$children[0].doAction(e)
      }
    },
    submit(e) {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate((valid) => {
          if (valid) {
            if (this.api) {
              POST(this.api.replace(/\$([^\/]+)/g, (a, b) => {
                return this.$attrs.formdata[b]
              }), this.form).then(data => {
                this.$message({ message: data.msg, type: 'success' })
                resolve(data)
              }).catch(e => {
                this.$message({ message: e, type: 'warning' })
                reject('submit error')
              })
            } else {
              this._doAction()
            }
          } else {
            console.log('error submit!!')
            this.$message({ message: '请完善必填信息', type: 'warning' })
            reject('validate error')
            return false
          }
        })
      })
    },
    _doAction() {
      console.log('-======>>>', this)
      let vm = this.$parent
      while (vm.$parent !== vm.$root) {
        // fix geek-panel wrap bug
        if (isFunction(vm.doAction) && !vm.wrapWithPanel) {
          vm.doAction({ ...this.$attrs }, this.form)
          break
        }
        vm = vm.$parent
      }
    }
  }
}
</script>
