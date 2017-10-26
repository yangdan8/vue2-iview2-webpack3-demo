import Vue from 'vue';
import router from './router/index';
import Vuex from 'vuex';
const iView =require('iview');
import 'normalize.css';
import 'iview/dist/styles/iview.css';
import './app.scss';

Vue.use(Vuex);
Vue.use(iView);

Vue.config.productionTip = false;

export default new Vue({
  el: '#app',
  router,
  data: {
    name: 'GRRTGHFRGFFDFDFrouter'
  }
});
