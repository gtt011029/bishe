import Vue from "vue";
import Router from "vue-router";
import home from "./views/Home.vue";
import information from "./views/information.vue";
import news from "./views/news.vue";
import mine from "./views/mine.vue";
import personInformation from "./views/personInformation.vue";
import docotorDetail from "./views/docotorDetail.vue";
import registration from "./views/registration.vue";
import selectDisease from "./views/selectDisease.vue";
import addPersonInformation from "./views/addPersonInformation.vue"
import recommendedDoctor from "./views/recommendedDoctor.vue"
import login from "./views/login.vue"
import register from "./views/register.vue"
import commondetail from "./views/commondetail.vue"
import allYuyue from "./views/allYuyue.vue"

Vue.use(Router);

export default new Router({
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
      meta:{
        title:"我的预约"
      }
    },

  ],
  linkActiveClass:"mui-active"
});
