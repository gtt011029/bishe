<template>
    <div class="button_outer">
        <router-link :to="'/registration/'+Dname+'/'+Doffice">
            <input type="button" class="button" :value="innerText">
        </router-link>
    </div>
</template>

<script>
    import mui from 'MUI/js/mui.js'
    export default {
        props:["innerText","Dname","Doffice"],
        created(){
        },
        methods:{
            login(){
                if(this.$store.state.loginName){
                    this.$router.push({'path':'/registration/'+this.Dname+'/'+this.Doffice})
                }else{
                    this.$router.push({'path':'/login'})
                    mui.alert('请先登录');
                }
                console.log(this.$store.state.loginName == true);
            }
        }
    }
</script>

<style  lang="less">
    .button_outer{
        position: fixed;
        width: 100%;
        height: 80px;
        bottom: 0px;
        background-color: #eee;
        overflow: hidden;
        .button{
            margin: 15px;
            width: 93%;
            height: 50px;
            background-color: #76DECA ;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
        }
    }
</style>
