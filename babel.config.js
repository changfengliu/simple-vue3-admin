module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "component",
      {
        // 按需求引入 element-plus 时使用。
        // "libraryName": "element-plus",
        // "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}