import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './assets/global.css';
import axios from 'axios';

Vue.prototype.$axios=axios;
Vue.prototype.$httpUrl='http://localhost:8090';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
