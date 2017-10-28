
import { RouteConfig } from 'vue-router';
import Login from  './login/login';

const route = {
  path: '/',
  name: 'account_login',
  component: Login
} as RouteConfig;

export default route;