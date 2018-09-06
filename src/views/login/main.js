import Vue from 'vue';
import App from './App.vue';
import store from './store';
// element-ui 组件全部引入
// import '../../element'
import * as filters from '../../filters/index'; // 全局过滤器
import '../../styles/base.scss';
// 单独引入部分element-ui {Loading, MessageBox, Message, Notification}全局提示组件
import './tip';
// 注册全局实用程序过滤器（register global utility filters）.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
