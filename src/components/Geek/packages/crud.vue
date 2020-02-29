<template>
  <div class="geek-crud">
    <geek-component :data="filterData" :filter="true" />
    <el-table :data="tableData" v-loading="loading" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column
        v-for="(item, i) in columns"
        :key="i"
        :prop="item.name"
        :label="item.label"
        :width="item.width"
        :min-width="item.width">
        <template slot-scope="scope">
          <span v-if="item.type == 'text' || !item.type">{{ scope.row[item.name] }}</span>
          <div class="geek-OperationField" v-else-if="item.type == 'operation'">
            <geek-component :data="item.buttons" :formdata="scope.row" />
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { doAjax, GET } from '@/utils/http'

export default {
  name: 'GeekCrud',
  props: {
    api: String,
    filter: Object,
    columns: Array
  },
  computed: {
    filterData() {
      return { type: 'geek-form', ...this.filter }
    }
  },
  data() {
    return {
      loading: false,
      tableData: [],
      page: 0,
      size: 20
    }
  },
  created() {
    console.log(this.api)
    this.initApi()
  },
  methods: {
    initApi() {
      this.loading = true
      GET(this.api).then(({data}) => {
        console.log('data', data)
        this.loading = false
        this.tableData = data.rows
      }).catch(e => {
        this.loading = false
      })
    },
    doAction(e, args) {
      console.log('crud======', e, args)
      if (e.actionType === 'ajax') {
        if (e.confirmText) {
          this.$confirm(e.confirmText).then(res => {
            if (res === 'confirm') {
              this.doAjax(e)
            }
          })
        } else {
          this.doAjax(e)
        }
      } else if (e.filter) {
        this.initApi()
      }
    },
    doAjax
  }
}
</script>
