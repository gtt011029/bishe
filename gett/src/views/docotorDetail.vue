<template>
    <div>
        <div class="up">
            
        </div>
        <div class="down">
            <div class="doctor_title">
                <img src="../../public/images/doctor.png" alt="">
                <p class="name">{{doctordetail.Dname}}<span>{{doctordetail.Dpro}}</span></p>
                <p class="danwei">无锡人民医院</p>
                <p>{{doctordetail.Doffice}}</p>
            </div>
            <div class="doctor_desc" ref="doctor_desc">
                <h4>个人简介</h4>
                <p class="desc" ref="desc">{{doctordetail.Ddetail}}</p>
            </div>
            <div class="open_close" @click="open_close">
                <span v-if="openClose">收起内容</span>
                <span v-else>展开全部</span>
            </div>
        </div>
        <mybutton innerText="选 择 医 生"  :Dname="doctordetail.Dname" :Doffice="doctordetail.Doffice"></mybutton>

    </div>
</template>

<script>
    import mybutton from "../components/mybutton.vue"
    export default {
        name: "docotorDetail",
        components:{
            mybutton
        },
        data:function(){
            return{
                doctordetail:{},
                openClose:false,
            }
        },
        created(){
            this.getdoctordetail()
        },
        methods:{
            open_close:function(){
                // console.log("open_close",this.$refs.doctor_desc.innerTEXT);
                this.openClose = !this.openClose;
                if(this.openClose){
                    this.$refs.doctor_desc.style.height = "450px";
                    this.$refs.desc.className = null;
                }else{
                    this.$refs.doctor_desc.style.height = "120px";
                    this.$refs.desc.className = "desc";
                }
                this.$refs.doctor_desc.style.overflow = "hidden";
            },
            getdoctordetail(){
                var id =  this.$route.params.Did
                // console.log(this.$route.params.Did)
                this.$http.get("api/getdoctordetail",{params: {Did:id}}).then(function(data){
                    this.doctordetail = data.body[0];
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .up{
        height: 120px;
        background-color:  #76DECA;
        border-radius: 0 0 60px 60px;
    }
    .down{
        position: relative;
        margin: 0 10px;
        background-color: #fff;
        border-radius: 5px;
        top:-50px;
        .doctor_title{
            position: relative;
            top:-30px;
            text-align: center;
            border-bottom: 2px solid #eee;
            >img{
                width: 80px;
            }
            .name{
                color:#000;
                font-size: 16px;
                >span{
                    color:gray;
                    font-size: 12px;
                }
            }
            .danwei{
                color:#000;
            }
        }
        .open_close{
            line-height: 30px;
            border-top: 1px solid #eee;
            text-align: center;
            color:red;
            font-size: 12px;
        }
        .doctor_desc{
            height: 120px;
            overflow: hidden;
            .desc{
                position: relative;
                line-height: 20px;
                max-height: 80px;
                overflow: hidden;
            }
            .desc::after{
                content: "...";
                position: absolute;
                bottom: 0;
                right: 0;
                padding-left: 40px;
                background: -webkit-linear-gradient(left, transparent, #fff 55%);
                background: -o-linear-gradient(right, transparent, #fff 55%);
                background: -moz-linear-gradient(right, transparent, #fff 55%);
                background: linear-gradient(to right, transparent, #fff 55%);
            }
        }
    }

</style>