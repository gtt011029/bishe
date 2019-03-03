<template>
    <div>
        <div>
            <div class="top">
                <span>热门科室</span>
                <span class="right more">更多 ></span>
            </div>
            <div class="main">
                <router-link :to="'/recommendedDoctor/'+item.Hoffice" tag="div" v-for="item in hot" :key="item.Hoffice">
                    <img :src="'http://39.96.198.192:8899/upload/'+item.Hsrc" alt="">
                    <p>{{item.Hoffice}}</p>
                </router-link>
            </div>
        </div>
        <div>
            <div class="top">
                <span>常见疾病</span>
                <span class="right more">更多 ></span>
            </div>
            <div class="main">
                <router-link :to="'/commondetail/'+item.Cid" tag="div" v-for="item in commons" :key="item.name">
                    <img :src="'http://39.96.198.192:8899/upload/'+item.Cimage" alt="">
                    <p>{{item.Cname}}</p>
                </router-link>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "information",
        data:function(){
            return{
                hot:[
                    {
                    name:"皮肤科",
                    url:"/static/img/奶瓶.37204c03.png"
                    }
                ],
                commons:[],
            }
        },
        created(){
            this.getcommons();
            this.gethots();
        },
        methods:{
            getcommons(){
                this.$http.get("api/getcommons").then((data)=>{
                    this.commons = data.body
                    // console.log(data)
                })
            },
            gethots(){
                this.$http.get("api/gethot").then((data)=>{
                    // console.log(data)
                    this.hot = data.body;
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .right{
        float: right;
    }
    .top{
        height: 40px;
        /*background-color: red;*/
        line-height: 40px;
        .more{
            color: gray;
            font-size: 14px;
        }
    }
    .main{
        width: 100%;
        overflow: hidden;
        >div{
            overflow: hidden;
            float: left;
            width: 25%;
            height: 80px;
            text-align: center;
            img{
                width: 50px;
            }

        }
    }
    .main1{
        width: 100%;
        >div{
            float: left;
            width: 33%;
            text-align: center;
            img{
                width: 90%;
            }
        }
    }
</style>
