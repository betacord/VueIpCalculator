import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes/Routes'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
