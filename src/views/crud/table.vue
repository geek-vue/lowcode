<template>
  <geek-page v-bind="$data" />
</template>

<script>
export default {
  name: 'TableCrud',
  data() {
    return {
      "title": "增删改查示例",
      "remark": "bla bla bla",
      "toolbar": [
          {
              "type": "geek-button",
              "actionType": "geek-dialog",
              "label": "新增",
              "icon": "add",
              "level": "primary",
              "geek-dialog": {
                  "title": "新增",
                  "body": {
                      "type": "geek-form",
                      "name": "sample-edit-form",
                      "api": "post:https://houtai.baidu.com/api/sample",
                      "body": [
                          {
                              "type": "text",
                              "name": "engine",
                              "label": "Engine",
                              "required": true
                          },
                          {
                              "type": "geek-divider"
                          },
                          {
                              "type": "text",
                              "name": "browser",
                              "label": "Browser",
                              "required": true
                          },
                          {
                              "type": "geek-divider"
                          },
                          {
                              "type": "text",
                              "name": "platform",
                              "label": "Platform(s)",
                              "required": true
                          },
                          {
                              "type": "geek-divider"
                          },
                          {
                              "type": "text",
                              "name": "version",
                              "label": "Engine version"
                          },
                          {
                              "type": "geek-divider"
                          },
                          {
                              "type": "text",
                              "name": "grade",
                              "label": "CSS grade"
                          }
                      ]
                  }
              }
          }
      ],
      "body": {
          "type": "geek-crud",
          "draggable": true,
          "api": "https://houtai.baidu.com/api/sample?waitSeconds=1",
          "keepItemSelectionOnPageChange": true,
          "labelTpl": "${id} ${engine}",
          "filter": {
              "title": "条件搜索",
              "submitText": "",
              "body": [
                  {
                      "type": "text",
                      "name": "keywords",
                      "placeholder": "通过关键字搜索",
                      "addOn": {
                          "label": "搜索",
                          "type": "submit"
                      }
                  },
                  "这里的表单项可以配置多个"
              ]
          },
          "bulkActions": [
              {
                  "label": "批量删除",
                  "actionType": "ajax",
                  "api": "delete:https://houtai.baidu.com/api/sample/${ids|raw}",
                  "confirmText": "确定要批量删除?"
              },
              {
                  "label": "批量修改",
                  "actionType": "dialog",
                  "dialog": {
                      "title": "批量编辑",
                      "name": "sample-bulk-edit",
                      "body": {
                          "type": "form",
                          "api": "https://houtai.baidu.com/api/sample/bulkUpdate2",
                          "controls": [
                              {
                                  "type": "hidden",
                                  "name": "ids"
                              },
                              {
                                  "type": "text",
                                  "name": "engine",
                                  "label": "Engine"
                              }
                          ]
                      }
                  }
              }
          ],
          "quickSaveApi": "https://houtai.baidu.com/api/sample/bulkUpdate",
          "quickSaveItemApi": "https://houtai.baidu.com/api/sample/$id",
          "filterTogglable": true,
          "headerToolbar": [
              "filter-toggler",
              "bulkActions",
              {
                  "type": "tpl",
                  "tpl": "定制内容示例：当前有 ${count} 条数据。",
                  "className": "v-middle"
              },
              {
                  "type": "link",
                  "href": "https://www.baidu.com",
                  "body": "百度一下",
                  "htmlTarget": "_parent",
                  "className": "v-middle"
              },
              {
                  "type": "columns-toggler",
                  "align": "right"
              },
              {
                  "type": "drag-toggler",
                  "align": "right"
              },
              {
                  "type": "pagination",
                  "align": "right"
              }
          ],
          "footerToolbar": [
              "statistics",
              "switch-per-page",
              "pagination"
          ],
          "columns": [
              {
                  "name": "id",
                  "label": "ID",
                  "width": 50,
                  "sortable": true,
                  "type": "text",
                  "toggled": true,
                  "remark": "Bla bla Bla"
              },
              {
                  "name": "engine",
                  "label": "Rendering engine",
                  "sortable": true,
                  "searchable": true,
                  "type": "text",
                  "toggled": true
              },
              {
                  "name": "browser",
                  "label": "Browser",
                  "sortable": true,
                  "type": "text",
                  "toggled": false
              },
              {
                  "name": "platform",
                  "label": "Platform(s)",
                  "popOver": {
                      "body": {
                          "type": "tpl",
                          "tpl": "偏了一点的popover"
                      },
                      "offset": {
                          "y": 100
                      }
                  },
                  "sortable": true,
                  "type": "text",
                  "toggled": true
              },
              {
                  "name": "version",
                  "label": "Engine version",
                  "quickEdit": true,
                  "type": "text",
                  "toggled": true,
                  "filterable": {
                      "options": [
                          {
                              "label": "4",
                              "value": "4"
                          },
                          {
                              "label": "5",
                              "value": "5"
                          },
                          {
                              "label": "6",
                              "value": "6"
                          }
                      ]
                  }
              },
              {
                  "name": "grade",
                  "label": "CSS grade",
                  "quickEdit": {
                      "mode": "inline",
                      "type": "select",
                      "inputClassName": "w-xs",
                      "options": [
                          "A",
                          "B",
                          "C",
                          "D",
                          "X"
                      ],
                      "saveImmediately": true
                  },
                  "type": "text",
                  "toggled": true
              },
              {
                  "type": "operation",
                  "label": "操作",
                  "width": 100,
                  "buttons": [
                      {
                          "type": "geek-button",
                          "icon": "eye-open",
                          "actionType": "geek-dialog",
                          "tooltip": "查看",
                          "geek-dialog": {
                              "title": "查看",
                              "body": {
                                  "type": "geek-form",
                                  "mode": "horizontal",
                                  "body": [
                                      {
                                          "type": "static",
                                          "name": "engine",
                                          "label": "Engine"
                                      },
                                      {
                                          "type": "geek-divider"
                                      },
                                      {
                                          "type": "static",
                                          "name": "browser",
                                          "label": "Browser"
                                      },
                                      {
                                          "type": "geek-divider"
                                      },
                                      {
                                          "type": "static",
                                          "name": "platform",
                                          "label": "Platform(s)"
                                      },
                                      {
                                          "type": "geek-divider"
                                      },
                                      {
                                          "type": "static",
                                          "name": "version",
                                          "label": "Engine version"
                                      },
                                      {
                                          "type": "geek-divider"
                                      },
                                      {
                                          "type": "static",
                                          "name": "grade",
                                          "label": "CSS grade"
                                      },
                                      {
                                          "type": "geek-divider"
                                      },
                                      "<p>添加其他 <span>Html 片段</span> 需要支持变量替换（todo）.</p>"
                                  ]
                              }
                          }
                      },
                      {
                          "type": "geek-button",
                          "icon": "edit",
                          "tooltip": "编辑",
                          "actionType": "geek-drawer",
                          "geek-drawer": {
                              "position": "left",
                              "size": "70%",
                              "title": "编辑",
                              "body": {
                                  "type": "geek-form",
                                  "name": "sample-edit-form",
                                  "api": "https://houtai.baidu.com/api/sample/$id",
                                  "body": [
                                      {
                                          "type": "text",
                                          "name": "engine",
                                          "label": "Engine",
                                          "required": true
                                      },
                                      {
                                          "type": "geek-divider"
                                      },
                                      {
                                          "type": "text",
                                          "name": "browser",
                                          "label": "Browser",
                                          "required": true
                                      },
                                      {
                                          "type": "geek-divider"
                                      },
                                      {
                                          "type": "text",
                                          "name": "platform",
                                          "label": "Platform(s)",
                                          "required": true
                                      },
                                      {
                                          "type": "geek-divider"
                                      },
                                      {
                                          "type": "text",
                                          "name": "version",
                                          "label": "Engine version"
                                      },
                                      {
                                          "type": "geek-divider"
                                      },
                                      {
                                          "type": "select",
                                          "name": "grade",
                                          "label": "CSS grade",
                                          "options": [
                                              "A",
                                              "B",
                                              "C",
                                              "D",
                                              "X"
                                          ]
                                      }
                                  ]
                              }
                          }
                      },
                      {
                          "type": "geek-button",
                          "icon": "remove",
                          "actionType": "ajax",
                          "tooltip": "删除",
                          "confirmText": "您确认要删除?",
                          "api": "delete:https://houtai.baidu.com/api/sample/$id"
                      }
                  ],
                  "toggled": true
              }
          ]
      }
    }
  }
}
</script>
