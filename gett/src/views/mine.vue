<template>
    <div>
        <div class="up">
            <div @click="login">
                <img src="../../public/images/头像.jpg" alt="" class="touxiang">
            </div>
            <div>
                <img src="../../public/images/感叹号.png" alt="" class="gantan">
                <router-link to="/personInformation" tag="span" class="middle">   {{this.$store.state.loginName}}</router-link>
            </div>
        </div>
        <div class="down">
            <div class="one">
                <div>
                    <img src="../../public/images/代付款.png" alt="">
                    <p>待付款</p>
                </div>
                <div>
                    <img src="../../public/images/沙漏.png" alt="">
                    <p>待服务</p>
                </div>
                <div>
                    <img src="../../public/images/评价.png" alt="">
                    <p>待评价</p>
                </div>
                <router-link to="/allYuyue" tag="div">
                    <img src="../../public/images/预约.png" alt="">
                    <p>全部预约</p>
                </router-link>
            </div>
            <div class="two">
                <div>
                    <img src="../../public/images/账户.png" alt="">
                    <p>我的账户</p>
                </div>
                <div>
                    <img src="../../public/images/代金券.png" alt="">
                    <p>代金券</p>
                </div>
                <div>
                    <img src="../../public/images/订单.png" alt="">
                    <p>商品订单</p>
                </div>
                <div>
                    <img src="../../public/images/消息.png" alt="">
                    <p>消息中心</p>
                </div>
                <div>
                    <img src="../../public/images/在线客服.png" alt="">
                    <p>在线客服</p>
                </div>
                <div>
                    <img src="../../public/images/用户反馈.png" alt="">
                    <p>用户反馈</p>
                </div>
                <div @click="exit">
                    <img src="../../public/images/设置.png" alt="">
                    <p>退出登录</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import mui from "MUI/js/mui.js"
    export default {
        name: "mine",
        data:function () {
            return{

            }
        },
        methods:{
            goallYuyue(){
                if(this.$store.state.loginName){
                    this.$router.push({'path':"/allYuyue"})
                }else{
                    mui.alert('请先登录');
                    this.$router.push({'path':'/login'})
                }
            },
            exit(){
                if( !this.$store.state.loginName.length){
                    mui.alert('尚未登录')
                }else{
                    this.$store.state.loginName = '';
                    mui.alert('已退出')
                }
            },
            login(){
                this.$router.push({'path':'/login'})
            }
        }
    }
</script>

<style scoped lang="less">
    .up{
        padding: 20px 0 60px 20px;
        overflow: hidden;
        background-color: #76DECA;
        >div{
            float: left;
        }
        .touxiang{
            border-radius: 50%;
            width: 50px;
        }
        .gantan{
            margin-left:10px;
            width: 15px;
        }
        .middle{
            line-height: 40px;
            color:#fff;
            font-size: 14px;
        }
    }
    .down{
        position: relative;
        top:-30px;
        margin: 0 10px;
        background-color: #eee;
        height: 380px;
        border-radius: 10px;
        .one{
            padding: 10px;
            display: flex;
            border-bottom: 2px solid #ddd;
            >div{
                flex: 1;
                text-align: center;
                >img{
                    width: 30%;
                }
            }
        }
        .two{
            margin-top: 20px;
            >div{
                float: left;
                width: 25%;
                text-align: center;
                >img{
                    width: 30%;
                }
            }
        }
    }
</style>
