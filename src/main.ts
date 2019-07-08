import Vue from 'vue';
import App from '@/App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('token');
  }
  const token = sessionStorage.getItem('token');
  if (!token && to.path !== '/login') {
    next({ path: '/login' });
  } else {
    next();
  }
});

