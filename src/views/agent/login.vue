<template>
  <div class="login">
        <div class="top-bar"></div>
        <el-form class="form">
          <el-form-item>
            <div class="title">代理登录</div>
          </el-form-item>
          <el-form-item>
          <div class="form-item">
              <el-input v-model="login.email" placeholder="邮箱" type="text" name="email" ></el-input>
          </div>
          </el-form-item>
          <el-form-item>
            <div class="form-item">
              <el-input v-model="login.password" placeholder="密码" type="password" name="password"></el-input>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginBtnClick">登录</el-button>
          </el-form-item>
          <el-form-item>
            <div class="footer">
              <div class="forget">
                <el-button type="text">忘记密码</el-button>
              </div>
              <div class="register">
                <el-button type="text">注册页面</el-button>
              </div>
            </div>
          </el-form-item>
        </el-form>
  </div>
</template>
<script>
import "../css/login.less";
import md5 from "md5-js";
import api from "../../api.js";
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    loginBtnClick() {
      var req = {
        email: this.login.email,
        password: md5(this.login.password)
      };
      sessionStorage.setItem('agent', true);
      this.$router.push({
        name: 'a_home'
      });

      // api.login(req).then(res => {
      //   //登录成功
      //   if (res.errorCode == 0) {
      //     localStorage.setItem('sid', res.data.ticket);
      //     localStorage.setItem('userId',res.data.userId);
      //     localStorage.setItem('email',res.data.email);
      //     sessionStorage.setItem('agent', true);
      //     this.$router.push({
      //       name: 'a_home'
      //     });
      //   } else {
      //     console.log(res.errorDescription);
      //   }
      // });
    }
  }
};
</script>
<style scoped>
.el-button{
  width: 100%;
}
</style>


