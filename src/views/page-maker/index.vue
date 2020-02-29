<template>
  <div class="geek-page">
    <div class="geek-page-content">
      <div class="geek-page-headerRow" v-if="!$attrs.title">
        <div class="geek-page-header">页面管理</div>
      </div>
      <div class="geek-page-body">
        <el-tree
          :data="pageTree"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false">
          <span class="page-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span v-if="data.children && data.children.length">
              <el-button size="mini" type="text" class="icon" icon="el-icon-plus" @click="() => append(data)">添加</el-button>
            </span>
            <span v-else>
              <el-button v-if="node.level < 3" size="mini" type="text" class="icon" icon="el-icon-plus" @click="() => append(data)">添加</el-button>
              <el-button size="mini" type="text" class="icon" icon="el-icon-edit" @click="() => modify(node, data)">编辑</el-button>
              <el-button size="mini" type="text" class="icon" icon="el-icon-delete" @click="() => remove(node, data)">删除</el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </div>
    <el-dialog class="geek-dialog" :title="`${form.pid ? '创建' : '编辑'}页面`" :visible.sync="pageVisible" width="50%">
      <el-form ref="form" class="form" :model="form" :rules="rules" label-position="left" label-width="80px">
        <el-form-item label="路由" prop="path">
          <el-input v-model="form.path" :disabled="!form.pid"></el-input>
        </el-form-item>
        <el-form-item label="页面名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button v-if="!form.pid" type="success" @click="$router.push(`/page-maker/edit/${form.path}`)">编辑页面</el-button>
          <el-button type="primary" @click="submit">{{form.pid ? '立即创建' : '保存'}}</el-button>
          <el-button @click="pageVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RouteMaker',
  computed: {
    ...mapGetters(['pages']),
    pageTree() {
      return [{ id: 'root', label: 'root', children: this.pages }]
    }
  },
  data() {
    return {
      pageVisible: false,
      editMode: false,
      form: {
        path: null,
        name: null,
        data: null,
        children: null
      },
      rules: {
        path: [{ required: true, trigger: 'blur' }],
        name: [{ required: true, trigger: 'blur' }]
      }
    }
  },
  methods: {
    getPageData(pages, id) {
      if (id === 'root') {
        return { children: this.pages }
      }
      if (Array.isArray(pages)) {
        for (let i = 0; i < pages.length; i++) {
          if (pages[i].id === id) return pages[i]
          if (Array.isArray(pages[i].children)) {
            let page = this.getPageData(pages[i].children, id)
            if (page) return page
          }
        }
      }
    },
    save() {
      this.$store.dispatch('geek/setPage', this.pages)
    },
    append(data) {
      console.log(data)
      this.pageVisible = true
      this.form = { pid: data.id, path: null, name: null }
    },
    modify(node, data) {
      console.log(node, data)
      this.pageVisible = true
      this.form = { path: data.id, name: data.label }
      // this.$router.push(`/page-maker/edit/${data.id}`)
    },
    remove(node, data) {
      console.log(node, data)
      this.$confirm(`确定删除“${data.label}”吗？`).then(res => {
        if (res === 'confirm') {
          let parentPage = this.getPageData(this.pages, node.parent.data.id)
          console.log(parentPage)
          let i = parentPage.children.findIndex(item => item.id === data.id)
          parentPage.children.splice(i, 1)
          this.save()
        }
      })
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.form.pid) {
            let parentPage = this.getPageData(this.pages, this.form.pid)
            if (!parentPage.children) this.$set(parentPage, 'children', [])
            delete parentPage.data
            parentPage.children.push({
              id: this.form.path,
              label: this.form.name,
              data: {
                "type": "geek-page",
                "title": this.form.name,
                "remark": "提示 Tip",
                "body": "内容部分. 可以使用 \\${var} 获取变量。如: `\\$date`: ${date}",
                "aside": {
                  type: 'geek-aside'
                },
                "toolbar": "工具栏",
                "initApi": "https://houtai.baidu.com/api/mock2/page/initData"
              }
            })
          } else {
            let page = this.getPageData(this.pages, this.form.path)
            page.label = this.form.name
          }
          this.pageVisible = false
          this.save()
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.geek-page {
  .page-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    .icon {
      padding: 0 3px;
      margin: 0;
    }
  }
  .geek-dialog {
    .form {
      padding: 0 15px;
    }
  }
}
</style>