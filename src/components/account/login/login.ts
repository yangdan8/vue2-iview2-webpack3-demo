import Vue from "vue";
import Component from "vue-class-component";
require("./login.scss");

@Component({
  template: require("./login.html")
})
export default class Login extends Vue {
  constructor() {
    super();
  }

  msg = '这里是登录框';
}
