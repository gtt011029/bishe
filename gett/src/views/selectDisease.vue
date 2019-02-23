<template>
    <div>
        <div class="up">
            <div class="img">
                <img src="../../public/images/doctor.png" alt="">
            </div>
            <div class="title">
                已选科室：<span>内科 呼吸内科</span>
            </div>
        </div>
        <div class="down">
            <div v-for="item in disease" @click="getDisease">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "selectDisease",
        data:function(){
            return {
                disease:['间接性肺疾病','哮喘','肺炎','肺癌','肺部疾病','结节病','咳嗽','支气管扩张','慢阻肺','淋巴管肌瘤病',]
            }
        },
        methods:{
            getDisease(e){
                this.$store.commit("changeDesease",e.target.innerText)
                // console.log(e.target.innerText);
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped lang="less">
    .up{
        display: flex;
        background-color: #fff;
        .img{
            flex: 1;
            >img{
                margin-top: 10px;
                width: 60px;
            }
        }
        .title{
            flex:4;
            line-height: 80px;
            color:gray;
            span{
                color:#000;
            }
        }



    }
    .down{
        margin-top: 10px;
        overflow: hidden;
        background-color: #fff;
        >div{
            float: left;
            padding: 5px 10px;
            border:1px solid gray;
            margin: 5px 10px ;
            border-radius: 5px;
        }
    }
</style>