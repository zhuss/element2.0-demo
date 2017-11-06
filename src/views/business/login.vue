<template>
  <div class="login">
      <div class="title">商家登录</div>
      <button @click="loginBtnClick">登录</button>
  </div>
</template>
<script>
import "../css/login.less";
export default {
  methods: {
    loginBtnClick() {
      this.$router.push({
        name: "b_home"
      });
    }
  }
};
</script>

