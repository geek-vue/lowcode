<template>
  <geek-page v-bind="$data" />
</template>

<script>
export default {
  name: 'FormPage',
  data() {
    return {
      "type": "page",
      "title": "表单页面",
      "body": [{
        type: 'geek-panel',
        title: '面板',
        body: [
          "\n            <p>`initApi` 拉取失败时，页面内容区会显示对应的错误信息。</p>\n\n            <p>其他提示示例</p>\n        ",
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
        actions: [{
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
        }]
      }, {
          "type": "geek-form",
          "mode": "horizontal",
          "title": "表单",
          "api": "https://houtai.baidu.com/api/mock2/form/saveForm",
          // api: { get, post }
          "body": [
              {
                  "type": "geek-alert",
                  "level": "success",
                  "body": "温馨提示：对页面功能的提示说明，绿色为正向类的消息提示"
              },
              {
                  "label": "Name",
                  "type": "text",
                  "name": "name"
              },
              {
                  "label": "Email",
                  "type": "email",
                  "name": "email"
              },
              {
                  "type": "submit",
                  "label": "登录"
              },
              {
                  "type": "button",
                  "label": "导出",
                  "url": "http://www.baidu.com/",
                  "level": "success"
              }
          ]
      }, {
          "type": "geek-form",
          "mode": "horizontal",
          "title": "表单",
          "api": "https://houtai.baidu.com/api/mock2/form/saveForm",
          // api: { get, post }
          "body": [
              {
                  "type": "geek-alert",
                  "level": "success",
                  "body": "温馨提示：对页面功能的提示说明，绿色为正向类的消息提示"
              },
              {
                  "label": "Name",
                  "type": "text",
                  "name": "name"
              },
              {
                  "label": "Email",
                  "type": "email",
                  "name": "email"
              }
          ]
      }]
    }
  }
}
</script>
