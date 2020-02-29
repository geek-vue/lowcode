<template>
  <geek-page v-bind="page" />
</template>

<script>
import { isString, isArray, isObject } from '@/utils/types'

export default {
  data() {
    const simplePage = {
      "type": "page",
      "title": "标题",
      "remark": "提示 Tip",
      "body": "内容部分. 可以使用 \\${var} 获取变量。如: `\\$date`: ${date}",
      "aside": "边栏部分",
      "toolbar": "工具栏",
      "initApi": "https://houtai.baidu.com/api/mock2/page/initData"
    }
    const getPage = (pageData, id) => {
      let page = null
      if (isArray(pageData)) {
        pageData.forEach(item => {
          let _page = getPage(item, id)
          if (_page) page = _page
        })
      } else if (isObject(pageData)) {
        if (pageData.id === id) {
          page = pageData
        } else if (pageData.children && pageData.children.length) {
          page = getPage(pageData.children, id)
        }
      }
      return page
    }
    let page = getPage(this.$store.state.geek.pages.slice(), this.$route.params.pageid)
    if (page) page = page.data
    else page = simplePage

    return { page }
  }
}
</script>
