import Vue from 'vue'
import Router from 'vue-router'
import api from '../api'

//mian
import Main from '../views/main.vue'

//代理
import A_Login from '../views/agent/login.vue'
import A_Home from '../views/agent/home.vue'
import A_ProductList from '../views/agent/product/list.vue'
import A_ProductTable from '../views/agent/product/table.vue'

//商家
import B_Login from '../views/business/login.vue'
import B_Home from '../views/business/home.vue'
import B_ProductList from '../views/business/product/list.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'agent'
    },
    {
      path: '/agent',
      component: Main,
      children: [
        {
          path: 'login',
          name: 'a_login',
          component: A_Login
        }, {
          path: '',
          component: A_Home,
          //路由拦截
          beforeEnter: (to, from, next) => {
            //验证是否登录
            var agent = sessionStorage.getItem('agent');
            if (agent) {
              next();
            } else {
              next({ name: 'a_login' });
              //验证token
              // api.verifyTicket({}).then( res =>{
              //   if(res.errorCode == 0&&res.data&&res.data.valid == 1){
              //     sessionStorage.setItem('agent', true);
              //     next();
              //   }else{
              //     next({ name: 'a_login' });
              //   }
              // });
            }
          },
          children: [{
            path: '',
            name: 'a_home',
            redirect: 'productList'
          }, {
            path: 'productList',
            name: 'a_productList',
            component: A_ProductList
          },{
            path: 'productTable',
            name: 'a_productTable',
            component: A_ProductTable
          }]
        }]
    },
    {
      path: '/business',
      component: Main,
      children: [
        {
          path: 'login',
          name: 'b_login',
          component: B_Login
        }, {
          path: '',
          component: B_Home,
          children: [{
            path: '',
            name: 'b_home',
            redirect: 'productList'
          }, {
            path: 'productList',
            name: 'b_productList',
            component: B_ProductList
          }]
        }]
    }
  ]
})
