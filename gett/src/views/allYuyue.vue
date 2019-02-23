<template>
    <div>
        <div class="main" v-for="item in yuyue">
            <div class="top">
                <p>挂号陪诊 <span>【{{item.YStype}}】</span></p>
            </div>
            <div class="down">
                <ul>
                    <li>
                        <img src="../../public/images/医院.png" alt="">
                        <span>无锡市人民医院</span>
                    </li>
                    <li>
                        <img src="../../public/images/time.png" alt="">
                        <span>{{item.YStime}}</span>
                    </li>
                    <li>
                        <img src="../../public/images/医生.png" alt="">
                        <span>接诊医生：{{item.YDname}}</span>
                    </li>
                    <li>
                        <img src="../../public/images/病人.png" alt="">
                        <span>患者：{{item.YSname}}</span>
                    </li>
                    <li>
                        <img src="../../public/images/疾病.png" alt="">
                        <span>疾病：{{item.YSdisease}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "allYuyue",
        data:function(){
            return{
                yuyue:[]
            }
        },
        created(){
            this.getYuyue();
        },
        methods:{
            getYuyue(){
                var Uname = this.$store.state.loginName;
                this.$http.get("api/getYuyue",{params:{'Uname':Uname}}).then((data)=>{
                    this.yuyue = data.body;
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .main{
        margin-bottom: 20px;
        background-color: #fff;
        .top{
            line-height: 40px;
            border-bottom: 1px solid #eee;
            p{
                font-size: 18px;
                color:#000;
                span{
                    font-size: 16px;
                    color:gray;
                }
            }

        }
        .down{
            ul{
                li{
                    img{
                        vertical-align:middle;
                        width: 25px;
                    }
                    span{
                        padding-left: 15px;
                    }
                }
            }
        }
    }
</style>