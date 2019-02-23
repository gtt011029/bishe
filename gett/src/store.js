import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    disease:'',
    Sname:'',//患者姓名
    Ssex:'',//患者性别
    relationship:'',//关系
    loginName:'',
  },
  mutations: {
    changeDesease(state,obj){
        state.disease = obj;
    },
    changesicker(state,obj){
      state.Sname = obj.Sname;
      state.Ssex = obj.Ssex;
      state.relationship = obj.relationship;
    },
    changeloginName(state,obj){
      state.loginName = obj;
    }
  },
  actions: {}
});
