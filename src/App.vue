<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body,html{
  width: 100%;
  height: 100%;
}
body{
  margin: 0;
  padding: 0;
  background: #F2F5FA;
  font-family: "PingFangSC-Light", "Microsoft YaHei", Roboto,Helvetica Neue Light, Tahoma, "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif !important;
}
button,input{
  font-family: "PingFangSC-Light", "Microsoft YaHei", Roboto,Helvetica Neue Light, Tahoma, "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif !important;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
