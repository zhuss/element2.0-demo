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
          <el-menu :router="true">
            <el-menu-item index="productList"><i class="el-icon-goods"></i>产品管理</el-menu-item>
            <el-menu-item index="productTable"><i class="el-icon-document"></i>提案管理</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-news"></i>动态通知</el-menu-item>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
              <el-menu-item index="4-1">角色管理</el-menu-item>
            </el-submenu>
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



