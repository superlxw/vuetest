// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import './assets/style/border.css'
import fastClick from 'fastclick'
//在移动端点击按钮会有300ms的延时，使用npm install fastclick --save 可以把这个存在项目依赖中
//使用npm install stylus/stylus-loader --save安装stylus的依赖
import './assets/style/iconfont.css'


Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/*
asset  //放置一些图片
components  //组件目录，用于放置一些组件
router  //路由文件
App.vue  //项目入口文件，可以将组件都写在里面
main.js  //项目的核心文件
*/
