<template>
    <div>
        <h3>推荐医生</h3>
        <router-link :to="'/docotorDetail/'+item.Did" class="mainInner" v-for="item in doctors">
            <div>
                <img src="../../public/images/doctor.png" alt="">
            </div>
            <div>
                <p>{{item.Dname}} <span>{{item.Dpro}}</span></p>
                <p>{{item.Doffice}}</p>
                <p class="specialize">擅长：{{item.Dspecialise}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "recommendedHospitals",
        data:function(){
            return{
                doctors:[]
            }
        },
        created(){
            this.getoffice();
        },
        methods:{
            getoffice(){
                var Hoffice = this.$route.params.Hoffice;
                this.$http.get("api/getoffice",{params:{'Hoffice':Hoffice}}).then((data)=>{
                    this.doctors = data.body
                })
            }
        }
    }
</script>

<style scoped lang="less">
    h3{
        text-align: center;
        line-height: 60px;
    }
    .mainInner{
        margin-top: 20px;
        background-color: #fff;
        flex: 1;
        display: flex;
        >:nth-of-type(1){
            flex:1;
            img{
                width: 100%;
            }
        }
        >:nth-of-type(2){
            padding-left: 5px;
            flex: 3;
            overflow: hidden;
        }
    }
    .specialize{
        width: 100%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
</style>