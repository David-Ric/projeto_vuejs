import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/index'
import '../node_modules/nprogress/nprogress';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
