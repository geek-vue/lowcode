<template>
  <geek-page v-bind="$data" />
</template>

<script>
import GeekPage from '@/components/Geek/GeekPage'

export default {
  name: 'NormalTab',
  components: { GeekPage },
  data() {
    return {
      "type": "page",
      "title": "选项卡示例",
      "subTitle": "所有选项卡都在当前页面中，包括默认、line、card以及radio模式",
      "body": [
          {
              "type": "geek-tab",
              "tabs": [
                  {
                      "title": "选项卡1",
                      "hash": "tab1",
                      "body": "选项卡内容1"
                  },
                  {
                      "title": "选项卡2",
                      "hash": "tab2",
                      "body": {
                          "type": "geek-form",
                          "panelClassName": "panel-primary",
                          "body": [
                              {
                                  "type": "text",
                                  "name": "a",
                                  "label": "文本",
                                  "required": true
                              }
                          ]
                      }
                  },
                  {
                      "title": "选项卡3",
                      "body": {
                          "type": "geek-crud",
                          "api": "https://houtai.baidu.com/api/sample",
                          "filter": {
                              "title": "条件搜索",
                              "submitText": "",
                              "body": [
                                  {
                                      "type": "text",
                                      "name": "keywords",
                                      "placeholder": "通过关键字搜索",
                                      "clearable": true,
                                      "addOn": {
                                          "label": "搜索",
                                          "type": "submit"
                                      }
                                  },
                                  "这里的表单项可以配置多个"
                              ]
                          },
                          "columns": [
                              {
                                  "name": "id",
                                  "label": "ID",
                                  "width": 50
                              },
                              {
                                  "name": "engine",
                                  "label": "Rendering engine"
                              },
                              {
                                  "name": "browser",
                                  "label": "Browser"
                              },
                              {
                                  "name": "platform",
                                  "label": "Platform(s)"
                              },
                              {
                                  "name": "version",
                                  "label": "Engine version"
                              },
                              {
                                  "name": "grade",
                                  "label": "CSS grade"
                              },
                              {
                                  "type": "operation",
                                  "label": "操作",
                                  "width": 100,
                                  "buttons": []
                              }
                          ]
                      }
                  }
              ]
          },
          {
              "type": "geek-divider"
          },
          {
              "type": "geek-tab",
              "mode": "line",
              "tabs": [
                  {
                      "title": "选项卡1",
                      "body": "选项卡内容1"
                  },
                  {
                      "title": "选项卡2",
                      "body": "选项卡内容2"
                  },
                  {
                      "title": "选项卡3",
                      "body": "选项卡内容3"
                  }
              ]
          },
          {
              "type": "geek-divider"
          },
          {
              "type": "geek-tab",
              "mode": "card",
              "tabs": [
                  {
                      "title": "选项卡1",
                      "body": "选项卡内容1"
                  },
                  {
                      "title": "选项卡2",
                      "body": "选项卡内容2"
                  },
                  {
                      "title": "选项卡3",
                      "body": "选项卡内容3"
                  }
              ]
          },
          {
              "type": "geek-divider"
          },
          {
              "type": "geek-tab",
              "mode": "border-card",
              "tabs": [
                  {
                      "title": "选项卡1",
                      "body": "选项卡内容1"
                  },
                  {
                      "title": "选项卡2",
                      "body": "选项卡内容2"
                  },
                  {
                      "title": "选项卡3",
                      "body": "选项卡内容3"
                  }
              ]
          }
      ]
    }
  }
}
</script>
