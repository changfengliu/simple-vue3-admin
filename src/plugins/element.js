// 完整引入
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

// 按需引入
// import { ElButton, ElInput } from 'element-plus'

import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

export default (app) => {
  locale.use(lang)

  // app.use(ElButton)
  // app.use(ElInput)

  app.use(ElementPlus)
}

// 参考：https://element-plus.gitee.io/#/zh-CN/component/installation