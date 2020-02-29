<template>
  <div class="panel-properties">
    <field title="标题">
        <el-input v-model="data.title" size="mini"></el-input>
    </field>
    <field title="子组件">
      <el-dropdown trigger="click" slot="toolbar" @command="addComponent">
        <el-button type="text" size="mini" icon="el-icon-plus">添加组件<i class="el-icon-arrow-down el-icon--right"></i></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in comps" :key="item" :command="item">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <template v-if="Array.isArray(data.body)">
        <div style="display: flex" v-for="(item, i) in data.body" :key="i">
          <el-button style="padding: 0 5px" type="text" size="mini" icon="el-icon-delete" @click="data.body.splice(i, 1)"></el-button>
          <field-route :title="item.type.replace(/^geek-/, '') + (item.label ? `[${item.label}]` : '')" :subpath="['body', i]" />
        </div>
      </template>
    </field>
  </div>
</template>

<script>
import Vue from 'vue'
import mixin from './mixins'
import field from './widgets/field'
import fieldRoute from './widgets/field-route'
import { isString, isArray, isObject } from '@/utils/types'

export default {
  mixins: [mixin],
  components: { field, fieldRoute },
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
</script>
