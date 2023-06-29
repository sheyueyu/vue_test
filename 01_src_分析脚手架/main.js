/**
 * 该文件是整个项目的入口文件
 * 
 */

import Vue from 'vue'
// 引入父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

new Vue({
  // 下面的代码，完成了将app组件放入到容器中
  render: h => h(App),
}).$mount('#app')   //也可以改成配置el属性，$mount就是为了说名服务的对象


// render 是在残缺版本的vue时，不能解析 template时，就创建具体的元素
// render本质上就是一个函数


// 关于不同版本的Vue:
// 1.vue.js与vue.runtime.Xx.js的区别：
// (1).Vue.js是完整版的Vue,包含：核心功能+模板解析器
// (2).vue.runtime.xox.js是运行版的Vue,只包含：栋心功能：没有模板解析器.
// 2.囚为vue.runtime.xox.js没有模板解析器，所以不能使用template配置项，需要使用
// render函数接收到的createElement函数去指定具体内容。