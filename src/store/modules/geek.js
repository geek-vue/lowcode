const state = {
  pages: JSON.parse(localStorage.getItem('geek.pages')) || [{
    id: 'page',
    label: '页面',
    icon: 'page',
    children: [
      {
        id: 'simple',
        label: '简单页面',
        icon: 'simple',
        data: {
          "type": "geek-page",
          "title": "标题2",
          "remark": "提示 Tip",
          "body": "内容部分. 可以使用 \\${var} 获取变量。如: `\\$date`: ${date}",
          "aside": {
            type: 'geek-aside'
          },
          "toolbar": "工具栏",
          "initApi": "https://houtai.baidu.com/api/mock2/page/initData"
        }
      },
      {
        id: 'init',
        label: '页面初始化',
        icon: 'init',
        data: {
          "type": "geek-page",
          "title": "标题",
          "remark": "提示 Tip",
          "body": [
            {
              type: 'geek-html',
              text: "\n            <p>`initApi` 拉取失败时，页面内容区会显示对应的错误信息。</p>\n\n            <p>其他提示示例</p>\n        ",
            },
              {
                  "type": "geek-alert",
                  "level": "success",
                  "body": "温馨提示：对页面功能的提示说明，绿色为正向类的消息提示"
              },
              {
                  "type": "geek-alert",
                  "level": "warning",
                  "body": "您的私有网络已达到配额，如需更多私有网络，可以通过<a>工单</a>申请"
              }
          ],
          "aside": {
            type: 'geek-aside'
          },
          "toolbar": {
            type: 'geek-html',
            text: "工具栏",
          },
          "initApi": "https://houtai.baidu.com/api/mock2/page/initDataError"
        }
      }, {
        id: 'master',
        label: '主分支',
        icon: 'master',
        data: {
          "type": "geek-page",
          "title": "Dialog",
          "aside": {
            type: 'geek-aside'
          },
          "body": [
              "\n            <p>`initApi` 拉取失败时，页面内容区会显示对应的错误信息。</p>\n\n            <p>其他提示示例</p>\n        ",
              {
                  "type": "geek-button-toolbar",
                  "className": "m-b",
                  "body": [
                      {
                          "type": "geek-button",
                          "label": "打开弹框",
                          "actionType": "geek-dialog",
                          "geek-dialog": {
                              "title": "提示",
                              "closeOnEsc": false,
                              "body": "这是个简单的弹框"
                          }
                      },
                      {
                          "type": "geek-button",
                          "label": "多级弹框",
                          "actionType": "geek-dialog",
                          "geek-dialog": {
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
                                      "label": "再弹一个",
                                      "geek-dialog": {
                                          "title": "弹框中的弹框",
                                          "closeOnEsc": true,
                                          "body": "如果你想，可以无限弹下去",
                                          "actions": [
                                              {
                                                  "type": "geek-button",
                                                  "actionType": "geek-dialog",
                                                  "label": "来吧",
                                                  "level": "info",
                                                  "geek-dialog": {
                                                      "title": "弹框中的弹框",
                                                      "closeOnEsc": true,
                                                      "body": "如果你想，可以无限弹下去",
                                                      "actions": [
                                                          {
                                                              "type": "geek-button",
                                                              "actionType": "confirm",
                                                              "label": "不弹了",
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
                          "label": "弹个表单",
                          "actionType": "geek-dialog",
                          "geek-dialog": {
                              "size": "80%",
                              "title": "在弹框中的表单",
                              "closeOnEsc": true,
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
                                  },
                                  {
                                      "label": "保存不关闭",
                                      "actionType": "ajax",
                                      "type": "geek-button",
                                      "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=4",
                                      "level": "info"
                                  },
                                  {
                                      "type": "geek-button",
                                      "label": "Feedback",
                                      "close": true,
                                      "actionType": "ajax",
                                      "api": "https://houtai.baidu.com/api/mock2/form/initData?waitSeconds=2",
                                      "tooltip": "点击我后会发送一个请求，请求回来后，弹出一个框。",
                                      "feedback": {
                                          "title": "操作成功",
                                          "body": "xxx 已操作成功"
                                      }
                                  }
                              ],
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
                              }
                          }
                      },
                      {
                          "type": "geek-button",
                          "label": "再弹个表单",
                          "actionType": "geek-dialog",
                          "geek-dialog": {
                              "title": "在弹框中的表单",
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
                                      "level": "primary",
                                      "disabledOn": "!data.rememberMe"
                                  }
                              ],
                              "body": {
                                  "type": "geek-form",
                                  "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2",
                                  "title": "常规模式",
                                  "mode": "normal",
                                  "body": [
                                      {
                                          "type": "checkbox",
                                          "name": "rememberMe",
                                          "label": "勾上我才可以确认"
                                      }
                                  ]
                              }
                          }
                      },
                      {
                          "type": "geek-button",
                          "label": "Feedback",
                          "actionType": "ajax",
                          "api": "https://houtai.baidu.com/api/mock2/form/initData?waitSeconds=2",
                          "tooltip": "点击我后会发送一个请求，请求回来后，弹出一个框。",
                          "feedback": {
                              "title": "操作成功",
                              "closeOnEsc": true,
                              "body": "xxx 已操作成功"
                          }
                      },
                      {
                          "type": "geek-button",
                          "label": "Feedback2",
                          "actionType": "ajax",
                          "api": "https://houtai.baidu.com/api/mock2/form/initData?waitSeconds=2",
                          "tooltip": "可以根据条件弹出，比如这个栗子，看当前时间戳是否可以整除3",
                          "feedback": {
                              "visibleOn": "!(this.date % 3)",
                              "title": "操作成功",
                              "body": "当前时间戳: <code>${date}</code>"
                          }
                      }
                  ]
              },
              {
                  "type": "geek-button-toolbar",
                  "className": "m-l-none",
                  "body": [
                      {
                          "type": "geek-button",
                          "label": "sm 弹框",
                          "actionType": "geek-dialog",
                          "geek-dialog": {
                              "size": "30%",
                              "title": "提示",
                              "body": "这是个简单的弹框"
                          }
                      },
                      {
                          "type": "geek-button",
                          "label": "标准 弹框",
                          "actionType": "geek-dialog",
                          "geek-dialog": {
                              "title": "提示",
                              "body": "这是个简单的弹框"
                          }
                      },
                      {
                          "type": "geek-button",
                          "label": "lg 弹框",
                          "actionType": "geek-dialog",
                          "geek-dialog": {
                              "size": "80%",
                              "title": "提示",
                              "body": "这是个简单的弹框"
                          }
                      },
                      {
                          "type": "geek-button",
                          "label": "xl 弹框",
                          "actionType": "geek-dialog",
                          "geek-dialog": {
                              "size": "90%",
                              "title": "提示",
                              "body": "这是个简单的弹框"
                          }
                      },
                      {
                          "type": "geek-button",
                          "label": "full 弹框",
                          "actionType": "geek-dialog",
                          "geek-dialog": {
                              "size": "100%",
                              "title": "全屏弹框",
                              "body": "弹框尽可能占满，内容部分滚动。"
                          }
                      }
                  ]
              }
          ]
        }
      }
    ]
  }]
}

const mutations = {
  SET_PAGE: (state, pages) => {
    state.pages = pages
    localStorage.setItem('geek.pages', JSON.stringify(pages))
  }
}

const actions = {
  setPage({ commit }, pages) {
    commit('SET_PAGE', pages)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
