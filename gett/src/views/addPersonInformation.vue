<template>
    <div>
        <div class="up">
            <div v-for="item in sicker" class="sicker" :name="item.Sname" @click="tosicker(item.Sname,item.Ssex,item.relationship)">
                <div>
                    <span class="sickerName">{{item.Sname}}</span>
                    <span class="sickSex">{{item.Ssex}}</span>
                    <span class="sickerRelationship">{{item.relationship}}</span>
                </div>
                <div>
                    <span class="mui-icon mui-icon-chatboxes"></span>
                </div>
            </div>

        </div>
        <div class="down">
            <div>添 加 患 者</div>
            <form class="mui-input-group" id="input_example">
                <div class="mui-input-row">
                    <label>姓名</label>
                    <input type="text" class="mui-input-clear" placeholder="请输入姓名" v-model="name">
                </div>
                <div class="mui-input-row">
                    <label>身份证号</label>
                    <input type="text" class="mui-input-clear" placeholder="请输入身份证号" v-model="address">
                </div>
                <div class="mui-input-row">
                    <label>性别</label>
                    <select name="sex" id="sex" v-model="sex">
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </div>
                <div class="mui-input-row">
                    <label>关系</label>
                    <select name="guanxi" id="guanxi" v-model="relationship">
                        <!--<option value="">与患者的关系</option>-->
                        <option value="自己">自己</option>
                        <option value="爸爸">爸爸</option>
                        <option value="妈妈">妈妈</option>
                        <option value="朋友">朋友</option>
                        <option value="孩子">孩子</option>
                        <option value="其他">其他</option>
                    </select>
                </div>
                <div class="mui-button-row">
                    <button type="button" class="mui-btn mui-btn-primary" @click="submit" >保存</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
    import mui from 'MUI/js/mui.js'
    export default {
        name: "addPersonInformation",
        data:function(){
            return{
                sicker:[
                    {
                        Sname:"xx",
                        Ssex:"xx",
                        relationship:"xx"
                    }
                ],
                name:'',
                address:'',
                sex:'',
                relationship:''
            }
        },
        created(){
            this.getSicker()
        },
        methods:{
            submit(){
                var check = true;
                mui("#input_example input").each(function() {
                    //若当前input为空，则alert提醒
                    if(!this.value || this.value.trim() == "") {
                        var label = this.previousElementSibling;
                        mui.alert(label.innerText + "不允许为空");
                        check = false;
                        return false;
                    }
                }); //校验通过，继续执行业务逻辑
                if(check){
                    var obj={
                        "loginName":this.$store.state.loginName,
                        "Sname":this.name,
                        "Ssex":this.sex,
                        "Saddress":this.address,
                        "relationship":this.relationship
                    }
                    // console.log(obj)
                    this.$http.post("api/addSicker",obj,{emulateJSON:true}).then((data)=>{
                        // console.log(data.bodyText)
                        if(data.bodyText){
                            this.sicker.push(obj);
                            mui.alert('添加成功!');
                        }
                    })
                }
            },
            getSicker(){
                var loginName = this.$store.state.loginName;
                this.$http.get("api/getSicker",{params:{'loginName':loginName}}).then((data)=>{
                    if(data.body.Sicker.length){
                        this.sicker = data.body.Sicker;
                    }
                })
            },
            tosicker(Sname,Ssex,relationship){
                var obj={
                    'Sname':Sname,
                    'Ssex':Ssex,
                    'relationship':relationship
                }
                this.$store.commit('changesicker',obj);
                this.$router.go(-1);
            }
        },
    }
</script>

<style scoped lang="less">
    .sicker{
        display: flex;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        color:gray;
        font-size: 14px;
        >div{
            flex:1;
            display: flex;
            span{
                flex: 1;
                text-align: center;
                line-height: 40px;
            }
        }
        >:nth-of-type(2){
            span{
                padding-right: 20px;
                text-align: right;
            }
        }
    }
    .down{
        background-color: #fff;
        >div{
            text-align: center;
            line-height: 40px;
            font-size: 18px;
        }
        margin-top: 20px;
    }
</style>