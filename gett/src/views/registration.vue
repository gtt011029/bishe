<template>
    <div class="container11">
        <div class="first">
            <div  class="first_title">
                <i class="mui-icon mui-icon-flag"></i>
                <span>    请选择服务类型</span>
            </div>
            <div class="first_content">
                <div :class="nomal?'nomal active':'nomal'" @click="active1">普通号</div>
                <div :class="expert?'expert active':'expert'" @click="active2">专家号</div>
                <div :class="special?'special active':'special'" @click="active3">特需号</div>
            </div>
        </div>
        <div class="second">
            <ul>
                <li>
                    <i class="mui-icon mui-icon-paperplane"></i>
                    <span>无锡市人民医院</span>
                </li>
                <li>
                    <i class="mui-icon mui-icon-paperplane"></i>
                    <span>{{Dname}}</span>
                </li>
                <li>
                    <i class="mui-icon mui-icon-paperplane"></i>
                    <span>{{Doffice}}</span>
                </li>
                <li>
                    <router-link to="/selectDisease">
                        <i class="mui-icon mui-icon-paperplane"></i>
                        <input type="text" placeholder="请选择疾病（必选）" class="input" :value="$store.state.disease">
                    </router-link>
                </li>
                <li>
                    <router-link to="/addPersonInformation">
                        <i class="mui-icon mui-icon-paperplane"></i>
                        <input type="text" placeholder="请选择患者信息" class="input" :value="sick[0].Sname+'/ '+sick[0].Ssex+'/ '+sick[0].relationship" >
                    </router-link>
                </li>
                <li>
                    <i class="mui-icon mui-icon-paperplane"></i>
                    <input type="date" placeholder="请选择挂号时间（必选）" class="input" ref="time">
                </li>
                <li>
                    <textarea name="" id="" cols="30" rows="5" placeholder="病情描述或其他要求（不少于5个字）" v-model="miaoshu"></textarea>
                </li>
            </ul>
        </div>
        <div class="third">
            <span>全程陪诊服务<i class="mui-icon mui-icon-help"></i></span>
            <span class="price">198元/次</span>
        </div>
        <div class="button_outer">
            <button class="button" @click="yuyue"> 发 起 预 约 </button>
        </div>
    </div>
</template>

<script>
    import mui from 'MUI/js/mui.js'
    import mybutton from "../components/mybutton.vue"
    export default {
        name: "registration",
        components:{
            mybutton
        },
        data:function(){
            return{
                type:'普通号',
                miaoshu:'',//描述
                nomal:true,
                expert:false,
                special:false,
                Dname:'',//医生名字
                Doffice:'',//科室
                sick:[
                    {
                        Ssex: '',//
                        Sname: '',//患者名字
                        relationship: '患者信息'//
                    }
                ]
            }
        },
        created(){
            this.getSicker();
            this.getDoctor();
        },
        methods:{
            active1:function(){
               this.nomal = true;
               this.expert = false;
               this.special = false
           },
            active2:function(){
                this.nomal = false;
                this.expert = true;
                this.special = false
            },
            active3:function(){
                this.nomal = false;
                this.expert = false;
                this.special = true
            },
            getSicker(){
                // console.log(this.$store.state.Sname,this.$store.state.Ssex,this.$store.state.relationship);
                this.sick[0].Ssex = this.$store.state.Ssex;
                this.sick[0].Sname = this.$store.state.Sname;
                this.sick[0].relationship = this.$store.state.relationship;
            },
            getDoctor(){
                this.Dname = this.$route.params.Dname;
                this.Doffice = this.$route.params.Doffice
            },
            yuyue(){
                if(this.nomal){
                    this.type = '普通号'
                }
                if(this.expert){
                    this.type = '专家号'
                }
                if(this.special){
                    this.type = '特需号'
                }
                if(!this.$store.state.disease){
                    mui.alert('疾病不能为空');
                }
                if(this.$store.state.disease && !this.sick[0].Sname){
                    mui.alert('请输入患者信息');
                }
                if(this.$store.state.disease && this.sick[0].Sname && !this.$refs.time.value){
                    mui.alert('预约时间不能为空');
                }
                if(this.$store.state.disease && this.sick[0].Sname && this.$refs.time.value && this.miaoshu.length<5){
                    mui.alert("疾病描述不得少于五个字")
                }
                if(this.$store.state.disease && this.sick[0].Sname && this.$refs.time.value && this.miaoshu.length>4){
                    var obj={
                        Uname:this.$store.state.loginName,
                        Stype:this.type,
                        Sdoctor:this.Dname,
                        Soffice:this.Doffice,
                        Sdisease:this.$store.state.disease,
                        Sname:this.sick[0].Sname,
                        Stime:this.$refs.time.value,
                    }
                    this.$http.post("api/saveYuyue",obj).then((data)=>{
                        // console.log(data);
                        mui.alert("预约成功");
                        this.$router.push({'path':'/home'})
                    })
                }
            }
        }
    }
</script>
<style scoped lang="less">
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
    .active{
        color:#76DECA;
        border: 1px solid #76DECA!important;
    }
    .container11{
        color:gray;
        padding-bottom: 40px;
        .first{
            padding: 10px ;
            background-color: #fff;
            .first_title{
                line-height: 50px;
            }
            .first_content{
                overflow: hidden;
                display: flex;
                .nomal,.expert,.special{
                    flex: 1;
                    margin: 0 10px;
                    text-align: center;
                    line-height: 35px;
                    border: 1px solid #000;
                    border-radius: 5px;
                }
            }
        }
        .second{
            overflow: hidden;
            padding: 0 5px;
            margin-top: 10px;
            background-color: #fff;
            ul{
                list-style: none;
                >li{
                    line-height: 50px;
                    border-bottom:1px solid gray;
                    position: relative;
                    .input{
                        border:none;
                        height: 50px;
                        position: absolute;
                        width: 90%;
                        top:0;
                    }
                }
            }
        }
        .third{
            padding: 0 10px;
            margin-top: 10px;
            line-height: 60px;
            background-color: #fff;
            .price{
                float: right;
            }
            input{
                float: right;
            }
        }
    }
</style>
