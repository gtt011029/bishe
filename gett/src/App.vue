<template>
  <div class="app-container">

    <mt-header fixed  :title="$route.meta.title" id="mt-header">
      <mt-button  icon="back" slot="left" @click="goBack" v-show="flag">返回</mt-button>
      <mt-button slot="right" class="right_online" v-if="$route.meta.title == '首页'">
      </mt-button>
    </mt-header>


    <!-- 中间的 路由 router-view 区域 -->
      <router-view></router-view>

    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab" v-if="$route.meta.flag">
      <router-link class="mui-tab-item" to="/home" @click.native="flushCom1">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/information" @click.native="flushCom2">
        <span class="mui-icon mui-icon-compose"></span>
        <span class="mui-tab-label">分诊</span>
      </router-link>
      <router-link class="mui-tab-item" to="/news" @click.native="flushCom3">
				<span class="mui-icon  mui-icon-chatboxes"></span>
        <span class="mui-tab-label">服务</span>
      </router-link>
      <router-link class="mui-tab-item" to="/mine" @click.native="flushCom4">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    data:function(){
      return{
        //flag只是用来表示返回按钮是否需要显示
        flag:this.$route.path !== '/home',
        isBack:false ,
        transitionName: 'slide-right'
      }
    },
    methods:{
      goBack(){
        this.isBack = true;
        this.$router.go(-1);
      },
      flushCom1:function(){
        this.$router.push('/home');
      },
      flushCom2:function(){
        this.$router.push('/information');
      },
      flushCom3:function(){
        this.$router.push('/news');
      },
      flushCom4:function(){
        this.$router.push('/mine');
      }
    },
    watch:{
        '$route.path':function(newVal,oldVal){
            if(this.isBack){
                this.transitionName = 'slide-right'
            }
            else{
                this.transitionName = 'slide-left'
            }
            this.isBack = false;

            if(newVal != '/home'){
                this.flag = true;
            }
            else{
                this.flag = false;
            }
        }
    }
  }
</script>

<style lang="less">
*{
    margin: 0;
    padding: 0;
    /*touch-action: none;*/
  }
  #mt-header{
    background-color: #76DECA!important;
  }
  .mui-active{
    color: #76DECA!important;
  }
  .app-container {
    padding-top: 40px;
    padding-bottom: 40px;
    /*避免PC端网页在页面切换的时候出现的水平滚动条*/
    overflow: hidden;
    .logo_container{
      position: fixed;
      top: 0;
      left: 0;
      width: 53px;
      height: 40px;
      z-index: 99;
      overflow: hidden;
      .logo{
        position: absolute;
        top: -9px;
      }
    }
    .right_online
    {
      width: 40px!important;
      background-image: url("../public/images/在线客服.png");
      background-size: contain;
    }
  }
</style>
