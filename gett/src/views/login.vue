<template>
    <form class="mui-input-group" id="input_example">
        <div class="mui-input-row">
            <label>用户名：</label>
            <input type="text" class="mui-input-clear" placeholder="请输入用户名" ref="name" v-model="name">
        </div>
        <div class="mui-input-row">
            <label>密码：</label>
            <input type="password" class="mui-input-clear mui-input-password" placeholder="请输入密码" ref="password" v-model="password">
        </div>
        <div class="mui-button-row">
            <button type="button" class="mui-btn mui-btn-primary" @click="submit" >确认</button>
        </div>
        <div class="right">
            <p>没有密码？ <router-link to="/register">去注册</router-link></p>
        </div>
    </form>
</template>

<script>
    import mui from 'MUI/js/mui.js'
    export default {
        name: "login",
        data:function(){
            return{
                name:'',
                password:''
            }
        },
        methods:{
            submit(){
                var check = true;
                mui("#input_example input").each(function() {
                    if(!this.value || this.value.trim() == "") {
                        var label = this.previousElementSibling;
                        mui.alert(label.innerText + "不允许为空");
                        check = false;
                        return false;
                    }
                }); //校验通过，继续执行业务逻辑
                if(check){
                    // console.log("queren")
                    var obj = {
                        'name': this.name,
                        'password': this.password
                    }
                    this.$http.post("api/getUsers",obj,{emulateJSON:true}).then(function(data){
                        if(data.body[0]){
                            if(data.body[0].Upassword == obj.password){
                                mui.alert("登录成功")
                                this.$store.commit("changeloginName",obj.name)
                                if(this.$store.state.next){
                                    this.$router.push({'path':this.$store.state.next})
                                }else{
                                    this.$router.go(-1)
                                }

                            }else{
                                mui.alert("密码错误")
                            }
                        }else{
                            mui.alert("用户名不存在")
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .mui-input-group{
        margin-top: 20px;
    }
    .right{
        text-align: right;
        padding-right: 10px;
    }
</style>
