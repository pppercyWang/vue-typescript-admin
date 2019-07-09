import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/Layout.vue';
import Login from '@/views/Login.vue';
import NotFound from '@/views/NotFound.vue';
import P1 from '@/views/userAdmin/P1.vue';
import P2 from '@/views/userAdmin/P2.vue';
import P3 from '@/views/agencyAdmin/P3.vue';
import P4 from '@/views/productAdmin/P4.vue';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/404',
      name: '找不到页面',
      component: NotFound,
    },
    {
      path: '/login',
      name: '登录',
      component: Login,
    },
    {
      path: '/',
      component: Layout,
      redirect: { path: '/login'},
      children: [
        {
          path: '/page1',
          name: '首页',
          component: P1,
        },
        {
          path: '/page2',
          name: '页面二',
          component: P2,
        },
        {
          path: '/page3',
          name: '页面三',
          component: P3,
        },
        {
          path: '/page4',
          name: '页面四',
          component: P4,
        },
      ]
    },
    {
      path: '/*',
      redirect: {path: '/404'}
    }
  ],
});
