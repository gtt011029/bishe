<template>
    <div class="main">
        <h1 class="title">{{commons.Cname}}</h1>
        <div v-for="item in commons.Cdetail">{{item}}</div>
    </div>
</template>

<script>
    export default {
        name: "commondetail",
        data:function(){
            return{
                commons:[]
            }
        },
        created(){
            this.getcommons();
        },
        methods:{
            getcommons(){
                // console.log(this.$route.params.id)
                var Cid  = this.$route.params.id;
                this.$http.get("api/getcommonsdetail",{params:{'Cid':Cid}}).then((data)=>{
                    this.commons = data.body[0]
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .main{
        .title{
            text-align: center;
            line-height: 80px;
        }
        >div{
            padding: 0 5px;
            text-indent: 25px;
            color:gray;
            font-size: 14px;
            line-height: 30px;
        }
    }
</style>