import Vue from 'vue';
import './introduce';
import App from './App.vue';
import router from './router';
import store from './store';
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
