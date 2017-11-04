import Vue from 'vue';
import Router, { RouterOptions } from 'vue-router';
import routeAccount from '../components/account/router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    routeAccount
  ]
} as RouterOptions);