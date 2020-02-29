<template>
  <div class="page-properties">
    <field title="标题">
        <el-input v-model="data.title" size="mini"></el-input>
    </field>
    <!-- <field title="边栏">
        <el-input v-model="data.aside" size="mini"></el-input>
    </field> -->
    <field title="工具栏">
        <el-input v-model="data.toolbar" size="mini"></el-input>
    </field>
    <field title="初始化接口">
        <el-input v-model="data.initApi" size="mini"></el-input>
    </field>
    <field-with-add-button @addComponent="addComponent">
      <template v-if="Array.isArray(data.body)">
        <div style="display: flex" v-for="(item, i) in data.body" :key="i">
          <el-button style="padding: 0 5px" type="text" size="mini" icon="el-icon-delete" @click="data.body.splice(i, 1)"></el-button>
          <field-route v-if="item.type" :title="item.type.replace(/^geek-/, '') + (item.label ? `[${item.label}]` : '')" :subpath="['body', i]" />
          <field-route v-else :title="`html[${item.trim().substr(0, 15)}]`" :subpath="['body', i]" />
        </div>
      </template>
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
