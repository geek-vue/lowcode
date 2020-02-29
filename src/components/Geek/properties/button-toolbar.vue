<template>
  <div class="button-toolbar-properties">
    <field-with-add-button @addComponent="addComponent">
      <el-dropdown trigger="click" slot="toolbar" @command="addComponent">
        <el-button type="text" size="mini" icon="el-icon-plus">添加组件<i class="el-icon-arrow-down el-icon--right"></i></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in comps" :key="item" :command="item">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <field-route v-for="(item, i) in data.body" :key="i" :title="item.type.replace(/^geek-/, '') + (item.label ? `[${item.label}]` : '')" :subpath="['body', i]" />
    </field-with-add-button>
  </div>
</template>

<script>
import mixin from './mixins'
import field from './widgets/field'
import fieldRoute from './widgets/field-route'
import fieldWithAddButton from './widgets/field-with-add-button'

export default {
  mixins: [mixin],
  components: { field, fieldRoute, fieldWithAddButton }
}
</script>
