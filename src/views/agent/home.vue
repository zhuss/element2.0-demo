<template>
  <div class="home">
      <div class="home-top">
        <div class="topbar">
          <div class="topbar-left">Element2.0 后台案例</div>
          <div class="topbar-right">
              <el-button class="btn-text" type="text" icon="el-icon-bell">消息</el-button>
              <el-button class="btn-text" type="text">503305196@qq.com</el-button>
          </div>
        </div>
      </div>
      <div class="home-left">
          <el-menu>
            <el-menu-item index="1"><i class="el-icon-setting"></i>一级导航一</el-menu-item>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-setting"></i>二级导航</template>
              <el-menu-item index="2-1">导航一</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><i class="el-icon-setting"></i>三级导航一</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-setting"></i>四级导航一</el-menu-item>
          </el-menu>
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
import "../css/home.less"
export default {
  data(){
    return{

    }
  }
}
</script>
<style lang="less" scoped>
.el-menu{
  border-right:none; 
}
.btn-text{
  color: #FFF;
}
</style>



