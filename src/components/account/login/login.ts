import Vue from "vue";
import Component from "vue-class-component";
import IView from "@/../pi-types/iview";
require("./login.scss");

@Component({
  template: require("./login.html")
})
export default class Login extends Vue {
  constructor() {
    super();
  }

  formData = {
    userName: '',
    passWord: '',
    verifyCode: ''
  };

  ruleData = {
    userName: [
      {
        require: true,
        trigger: 'blur'
      }
    ],
    passWord: [
      {
        require: true,
        trigger: 'blur',
        validator: (rule: object, value: string, callback: (objErr?: Error) => void) => {
          if (!value) {
            callback(new Error('请输入密码'));
          } else {
            callback();
          }
        }
      }
    ]
  };

  handleSubmit(name: string): void {
    (this.$refs[name] as IView.IForm).validate(valid => {
      if (valid) {
        this.$Message.success('提交成功!');
      } else {
        this.$Message.error('表单验证失败!');
      }
    });
  };
}
