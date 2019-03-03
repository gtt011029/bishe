import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vueresource from 'vue-resource'


//注册vue-resource
Vue.use(Vueresource)
Vue.http.options.emulateJSON = true
Vue.http.options.root = "http://39.96.198.192:8899"


//引入mintui并注册组件
import Mint from 'mint-ui'
Vue.use(Mint)
//引入mintui的样式
import 'mint-ui/lib/style.css'

//引入MUI的样式
import 'MUI/css/mui.css'
import 'MUI/css/icons-extra.css'

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
