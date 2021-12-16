/*
 * @Author: QHGG
 * @Date: 2021-12-04 19:54:30
 * @LastEditTime: 2021-12-07 19:35:23
 * @LastEditors: QHGG
 * @Description: 
 * @FilePath: /ii/src/main.js
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import './assets/reset.css'
   
import VueRouter from 'vue-router'
import Lists from '@/components/Lists.vue'
import Login from '@/components/Login.vue'
import Info from '@/components/Info.vue'
Vue.use(VueRouter)

// const Home = { template: '<div>This is Home</div>' }
// const Foo = { template: '<div>This is Foo</div>' }
// const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    // { path: '/', name: 'home', component: App },
    { path: '/dapps', name: 'lists', component: Lists },
    { path: '/mydapps', name: 'lists', component: Lists },
    { path: '/login', name: 'login', component: Login },
    { path: '/info/:id', name: 'info', component: Info },
  ]
})
Vue.use(ElementUI);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});