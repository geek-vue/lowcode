<template>
  <geek-page v-bind="$data" />
</template>

<script>
export default {
  name: 'ModeForm',
  data() {
    return {
      "title": "表单各种展示模式汇总",
      "remark": "展示各种模式的 Form",
      "body": [
          {
              "type": "geek-grid",
              "body": [
                  {
                      "type": "geek-form",
                      "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2",
                      "title": "常规模式",
                      "mode": "normal",
                      "body": [
                          {
                              "formItem": true,
                              "type": "email",
                              "name": "email",
                              "required": true,
                              "placeholder": "请输入邮箱",
                              "label": "邮箱",
                              "size": "full"
                          },
                          {
                              "formItem": true,
                              "type": "password",
                              "name": "password",
                              "label": "密码",
                              "required": true,
                              "placeholder": "请输入密码",
                              "size": "full"
                          },
                          {
                              "formItem": true,
                              "type": "checkbox",
                              "name": "rememberMe",
                              "label": "记住登录"
                          },
                          {
                              "formItem": true,
                              "type": "submit",
                              "btnClassName": "primary",
                              "label": "登录"
                          }
                      ]
                  },
                  {
                      "type": "geek-form",
                      "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2",
                      "title": "常规模式 input md 尺寸",
                      "mode": "normal",
                      "body": [
                          {
                              "formItem": true,
                              "type": "email",
                              "name": "email",
                              "required": true,
                              "placeholder": "请输入邮箱",
                              "label": "邮箱",
                              "size": "md",
                              "remark": "xxxx",
                              "hint": "bla bla bla"
                          },
                          {
                              "formItem": true,
                              "type": "password",
                              "name": "password",
                              "label": "密码",
                              "required": true,
                              "placeholder": "请输入密码",
                              "size": "md"
                          },
                          {
                              "formItem": true,
                              "type": "checkbox",
                              "name": "rememberMe",
                              "label": "记住登录"
                          },
                          {
                              "formItem": true,
                              "type": "submit",
                              "btnClassName": "info",
                              "label": "登录"
                          }
                      ]
                  }
              ]
          },
          {
              "type": "geek-grid",
              "body": [
                  {
                      "type": "geek-form",
                      "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2",
                      "title": "水平模式，左右摆放 左右比率分配 ",
                      "mode": "horizontal",
                      "autoFocus": false,
                      "horizontal": {
                          "left": "col-sm-2",
                          "right": "col-sm-10",
                          "offset": "col-sm-offset-2"
                      },
                      "body": [
                          {
                              "formItem": true,
                              "type": "email",
                              "name": "email",
                              "placeholder": "请输入邮箱地址",
                              "label": "邮箱",
                              "required": true,
                              "desc": "表单描述文字"
                          },
                          {
                              "formItem": true,
                              "type": "password",
                              "name": "password",
                              "label": "密码",
                              "placeholder": "输入密码"
                          },
                          {
                              "formItem": true,
                              "type": "checkbox",
                              "name": "rememberMe",
                              "label": "记住登录"
                          }
                      ]
                  },
                  {
                      "type": "geek-form",
                      "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2",
                      "title": "水平模式，左右摆放 左侧固定宽度 input md 尺寸",
                      "mode": "horizontal",
                      "autoFocus": false,
                      "horizontal": {
                          "leftFixed": "xs"
                      },
                      "body": [
                          {
                              "formItem": true,
                              "type": "email",
                              "name": "email",
                              "placeholder": "请输入邮箱地址",
                              "label": "邮箱",
                              "required": true,
                              "desc": "表单描述文字",
                              "size": "md",
                              "remark": "xxxx",
                              "hint": "bla bla bla"
                          },
                          {
                              "formItem": true,
                              "type": "password",
                              "name": "password",
                              "label": "密码",
                              "placeholder": "输入密码",
                              "size": "md"
                          },
                          {
                              "formItem": true,
                              "type": "checkbox",
                              "name": "rememberMe",
                              "label": "记住登录"
                          }
                      ]
                  }
              ]
          },
          {
              "type": "geek-form",
              "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2",
              "title": "内联模式",
              "mode": "inline",
              "autoFocus": false,
              "body": [
                  {
                      "formItem": true,
                      "type": "email",
                      "name": "email",
                      "placeholder": "Enter Email",
                      "label": "邮箱",
                      "size": "auto"
                  },
                  {
                      "formItem": true,
                      "type": "password",
                      "name": "password",
                      "placeholder": "密码",
                      "size": "auto",
                      "remark": "Bla bla bla"
                  },
                  {
                      "formItem": true,
                      "type": "checkbox",
                      "name": "rememberMe",
                      "label": "记住登录",
                      "size": "auto"
                  },
                  {
                      "formItem": true,
                      "type": "submit",
                      "label": "登录"
                  },
                  {
                      "formItem": true,
                      "type": "button",
                      "label": "导出",
                      "url": "http://www.baidu.com/",
                      "level": "success"
                  }
              ]
          }
        ]
      }
  }
}
</script>
