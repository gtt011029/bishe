import Vue from "vue";
import store from './store.js'
import Router from "vue-router";

const home = () => import('./views/Home.vue');
const information = () => import('./views/information.vue');
const news = () => import('./views/news.vue');
const mine = () => import('./views/mine.vue');
const personInformation = () => import('./views/personInformation.vue');
const docotorDetail = () => import('./views/docotorDetail.vue');
const registration = () => import('./views/registration.vue');
const selectDisease = () => import('./views/selectDisease.vue');
const addPersonInformation = () => import('./views/addPersonInformation.vue');
const recommendedDoctor = () => import('./views/recommendedDoctor.vue');
const login = () => import('./views/login.vue');
const register = () => import('./views/register.vue');
const commondetail = () => import('./views/commondetail.vue');
const allYuyue = () => import('./views/allYuyue.vue');

import mui from 'MUI/js/mui.js'

Vue.use(Router);


const router = new Router({
  routes: [
    {
      path: "/",
      redirect:"/home",
    },
    {
      path: "/home",
      name: "home",
      component: home,
      meta:{
        title:"首页",
        flag:true
      }
    },
    {
      path:"/information",
      name:"information",
      component: information,
      meta:{
        title:"分诊",
        flag:true
      }
    },
    {
      path:"/news",
      name:"news",
      component:news,
      meta:{
        title:"服务",
        flag:true
      }
    },
    {
      path:"/mine",
      name:"mine",
      component:mine,
      meta:{
        title:"我的",
        flag:true
      }
    },
    {
      path:"/personInformation",
      name:"personInformation",
      component:personInformation,
      meta:{
        title:"个人资料",
      },
    },
    {
      path:"/docotorDetail/:Did",
      name:"docotorDetail",
      component:docotorDetail,
      meta:{
        title:"医生详情页"
      }
    },
    {
      path:"/registration/:Dname/:Doffice",
      name:"registration",
      component:registration,
      beforeEnter: (to, from, next) => {
        if(store.state.loginName){
          next();
        }else{
          mui.alert('请先登录');
          var next11 = '/registration/'+to.params.Dname+'/'+to.params.Doffice;
          store.commit('changeNext',next11);
          next('/login');
        }
      },
      meta:{
        title:"挂号陪诊",
      }
    },
    {
      path:"/selectDisease",
      name:"selectDisease",
      component:selectDisease,
      meta:{
        title:"选择疾病"
      }
    },
    {
      path:"/addPersonInformation",
      name:"addPersonInformation",
      component:addPersonInformation,
      meta:{
        title:"患者信息"
      }
    },
    {
      path:"/recommendedDoctor/:Hoffice",
      name:"recommendedDoctor",
      component:recommendedDoctor,
      meta:{
        title:"推荐医生"
      }
    },
    {
      path:"/login",
      name:"login",
      component:login,
      meta:{
        title:"登陆"
      }
    },
    {
      path:"/register",
      name:"register",
      component:register,
      meta:{
        title:"注册"
      }
    },
    {
      path:"/commondetail/:id",
      name:"commondetail",
      component:commondetail,
      meta:{
        title:"小贴士"
      }
    },
    {
      path:"/allYuyue",
      name:"allYuyue",
      component:allYuyue,
      beforeEnter: (to, from, next) => {
        if(store.state.loginName){
          next();
        }else{
          mui.alert('请先登录')
          store.commit('changeNext','/allYuyue');
          next('/login')
        }
      },
      meta:{
        title:"我的预约"
      }
    },
  ],
  linkActiveClass:"mui-active"
});

export default router;
