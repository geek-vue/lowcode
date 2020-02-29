<template>
  <geek-page v-bind="$data" />
</template>

<script>
export default {
  name: 'DrawerDialog',
  data() {
    return {
      "type": "page",
      "title": "Drawer",
      "body": [
          {
              "type": "geek-button-toolbar",
              "className": "block",
              "body": [
                  {
                      "type": "geek-button",
                      "label": "左侧弹出-极小框",
                      "actionType": "geek-drawer",
                      "geek-drawer": {
                          "position": "left",
                          "size": "15%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "左侧弹出-小框",
                      "actionType": "geek-drawer",
                      "geek-drawer": {
                          "position": "left",
                          "size": "25%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "左侧弹出-中框",
                      "actionType": "geek-drawer",
                      "geek-drawer": {
                          "position": "left",
                          "size": "40%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "左侧弹出-大框",
                      "actionType": "geek-drawer",
                      "geek-drawer": {
                          "position": "left",
                          "size": "65%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "左侧弹出-超大",
                      "actionType": "geek-drawer",
                      "level": "danger",
                      "geek-drawer": {
                          "position": "left",
                          "size": "90%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  }
              ]
          },
          {
              "type": "geek-button-toolbar",
              "className": "block m-t",
              "body": [
                  {
                      "type": "geek-button",
                      "label": "右侧弹出-极小框",
                      "level": "success",
                      "actionType": "geek-drawer",
                      "geek-drawer": {
                          "position": "right",
                          "size": "15%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "右侧弹出-小框",
                      "level": "success",
                      "actionType": "geek-drawer",
                      "geek-drawer": {
                          "position": "right",
                          "size": "25%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "右侧弹出-中框",
                      "level": "success",
                      "actionType": "geek-drawer",
                      "geek-drawer": {
                          "position": "right",
                          "size": "40%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "右侧弹出-大框",
                      "level": "success",
                      "actionType": "geek-drawer",
                      "geek-drawer": {
                          "position": "right",
                          "size": "65%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "右侧弹出-超大",
                      "level": "danger",
                      "actionType": "geek-drawer",
                      "geek-drawer": {
                          "size": "90%",
                          "position": "right",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  }
              ]
          },
          {
              "type": "geek-button-toolbar",
              "className": "block m-t",
              "body": [
                  {
                      "type": "geek-button",
                      "label": "顶部弹出-极小框",
                      "actionType": "geek-drawer",
                      "level": "info",
                      "geek-drawer": {
                          "position": "top",
                          "size": "15%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "顶部弹出-小框",
                      "level": "info",
                      "actionType": "geek-drawer",
                      "geek-drawer": {
                          "position": "top",
                          "size": "25%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "顶部弹出-中框",
                      "actionType": "geek-drawer",
                      "level": "info",
                      "geek-drawer": {
                          "position": "top",
                          "size": "40%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "顶部弹出-大框",
                      "actionType": "geek-drawer",
                      "level": "info",
                      "geek-drawer": {
                          "position": "top",
                          "size": "65%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "顶部弹出 - 超大",
                      "level": "danger",
                      "actionType": "geek-drawer",
                      "geek-drawer": {
                          "position": "top",
                          "size": "90%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  }
              ]
          },
          {
              "type": "geek-button-toolbar",
              "className": "block m-t",
              "body": [
                  {
                      "type": "geek-button",
                      "label": "底部弹出-极小框",
                      "actionType": "geek-drawer",
                      "level": "primary",
                      "geek-drawer": {
                          "position": "bottom",
                          "size": "15%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "底部弹出-小框",
                      "level": "primary",
                      "actionType": "geek-drawer",
                      "geek-drawer": {
                          "position": "bottom",
                          "size": "25%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "底部弹出-中框",
                      "actionType": "geek-drawer",
                      "level": "primary",
                      "geek-drawer": {
                          "position": "bottom",
                          "size": "40%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "底部弹出-大框",
                      "actionType": "geek-drawer",
                      "level": "primary",
                      "geek-drawer": {
                          "position": "bottom",
                          "size": "65%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "底部弹出-超大",
                      "level": "danger",
                      "actionType": "geek-drawer",
                      "geek-drawer": {
                          "position": "bottom",
                          "size": "90%",
                          "title": "提示",
                          "body": "这是个简单的弹框"
                      }
                  }
              ]
          },
          {
              "type": "geek-button-toolbar",
              "className": "block m-t",
              "body": [
                  {
                      "type": "geek-button",
                      "label": "多级弹框",
                      "actionType": "geek-drawer",
                      "level": "danger",
                      "geek-drawer": {
                          "title": "提示",
                          "body": "这是个简单的弹框",
                          "closeOnEsc": true,
                          "actions": [
                              {
                                  "type": "geek-button",
                                  "actionType": "confirm",
                                  "label": "确认",
                                  "level": "primary"
                              },
                              {
                                  "type": "geek-button",
                                  "actionType": "geek-drawer",
                                  "label": "再弹一个",
                                  "geek-drawer": {
                                      "position": "left",
                                      "title": "弹框中的弹框",
                                      "closeOnEsc": true,
                                      "body": "如果你想，可以无限弹下去",
                                      "actions": [
                                          {
                                              "type": "geek-button",
                                              "actionType": "geek-drawer",
                                              "label": "来吧",
                                              "level": "info",
                                              "geek-drawer": {
                                                  "position": "right",
                                                  "title": "弹框中的弹框",
                                                  "closeOnEsc": true,
                                                  "body": "如果你想，可以无限弹下去",
                                                  "actions": [
                                                      {
                                                          "type": "geek-button",
                                                          "actionType": "confirm",
                                                          "label": "可以了",
                                                          "level": "primary"
                                                      }
                                                  ]
                                              }
                                          }
                                      ]
                                  }
                              }
                          ]
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "交叉测试",
                      "actionType": "geek-drawer",
                      "className": "m-l-xs",
                      "level": "danger",
                      "geek-drawer": {
                          "title": "提示",
                          "closeOnEsc": true,
                          "body": "这是个简单的弹框",
                          "actions": [
                              {
                                  "type": "geek-button",
                                  "actionType": "confirm",
                                  "label": "确认",
                                  "level": "primary"
                              },
                              {
                                  "type": "geek-button",
                                  "actionType": "geek-dialog",
                                  "closeOnEsc": true,
                                  "label": "再弹一个",
                                  "geek-dialog": {
                                      "position": "left",
                                      "title": "弹框中的弹框",
                                      "closeOnEsc": true,
                                      "body": "如果你想，可以无限弹下去",
                                      "actions": [
                                          {
                                              "type": "geek-button",
                                              "actionType": "geek-drawer",
                                              "label": "来吧",
                                              "level": "info",
                                              "geek-drawer": {
                                                  "position": "right",
                                                  "title": "弹框中的弹框",
                                                  "body": "如果你想，可以无限弹下去",
                                                  "closeOnEsc": true,
                                                  "actions": [
                                                      {
                                                          "type": "geek-button",
                                                          "actionType": "confirm",
                                                          "label": "可以了",
                                                          "level": "primary"
                                                      }
                                                  ]
                                              }
                                          }
                                      ]
                                  }
                              }
                          ]
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "内嵌表单",
                      "actionType": "geek-drawer",
                      "level": "danger",
                      "geek-drawer": {
                          "title": "提示",
                          "closeOnEsc": true,
                          "resizable": true,
                          "body": {
                              "type": "geek-form",
                              "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2",
                              "title": "常规模式",
                              "mode": "normal",
                              "body": [
                                  {
                                      "type": "email",
                                      "name": "email",
                                      "required": true,
                                      "placeholder": "请输入邮箱",
                                      "label": "邮箱"
                                  },
                                  {
                                      "type": "password",
                                      "name": "password",
                                      "label": "密码",
                                      "required": true,
                                      "placeholder": "请输入密码"
                                  },
                                  {
                                      "type": "checkbox",
                                      "name": "rememberMe",
                                      "label": "记住登录"
                                  }
                              ]
                          },
                          "actions": [
                              {
                                  "label": "取消",
                                  "actionType": "close",
                                  "type": "geek-button"
                              },
                              {
                                  "label": "确认",
                                  "actionType": "confirm",
                                  "type": "geek-button",
                                  "level": "primary"
                              },
                              {
                                  "label": "提交不关闭",
                                  "actionType": "submit",
                                  "close": false,
                                  "type": "geek-button",
                                  "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2",
                                  "level": "primary"
                              }
                          ]
                      }
                  },
                  {
                      "type": "geek-button",
                      "label": "可拉拽调整大小",
                      "actionType": "geek-drawer",
                      "level": "danger",
                      "geek-drawer": {
                          "title": "提示",
                          "closeOnEsc": true,
                          "resizable": true,
                          "body": "这是个简单的弹框"
                      }
                  }
              ]
          }
      ]
    }
  }
}
</script>
