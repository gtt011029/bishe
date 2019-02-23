<template>
    <div>
        <div class="mui-input-group" id="input_example">
            <div class="mui-input-row">
                <label>用户名：</label>
                <input type="text" class="mui-input-clear" placeholder="请输入用户名"  v-model="name">
            </div>
            <div class="mui-input-row">
                <label>密码：</label>
                <input type="password" class="mui-input-clear mui-input-password" placeholder="请输入密码" v-model="password">
            </div>
            <div class="mui-input-row">
                <label>确认密码：</label>
                <input type="password" class="mui-input-clear mui-input-password" placeholder="请输入密码" v-model="truepassword">
            </div>
            <div class="mui-button-row">
                <button type="button" class="mui-btn mui-btn-primary" @click="submit" >确认</button>
            </div>
        </div>

    </div>
</template>

<script>
    import mui from 'MUI/js/mui.js'
    export default {
        name: "register",
        data:function(){
            return{
                name:"",
                password:"",
                truepassword:'',
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
                    if(this.password !== this.truepassword){
                        mui.alert('两次密码不一致');
                    }else{
                        var obj={
                            name:this.name,
                            password:this.password
                        }
                        this.$http.post("api/addUsers",obj).then(function(data){
                            if(data.bodyText){
                                mui.alert("用户名已存在")
                            }else{
                                mui.alert('注册成功');
                                this.$router.go(-1)
                            }
                            // console.log(data.bodyText)
                        })
                    }
                }

            }
        }
    }
</script>

<style scoped>

</style>