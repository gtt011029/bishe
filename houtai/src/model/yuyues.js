var mongoose = require("mongoose")

var yuyuesSchema = new mongoose.Schema({
    YUname:{
        type:String,
    },
    YStype:{
        type:String,
    },
    YDname:{
        type:String,
    },
    YSoffice:{
        type:String,
    },
    YSdisease:{
        type:String,
    },
    YSname:{
        type:String,
    },
    YStime:{
        type:String,
    }
})

//静态方法，增加预约
yuyuesSchema.statics.insertyuyues = function(json,callback){
    var yuyues = new Yuyues(json);
    yuyues.save(function(err){
        if(err){
            callback(-2);  //服务器错误
            return;
        }
        //发回1这个状态
        callback(1);
    });
}

var Yuyues = mongoose.model("Yuyues",yuyuesSchema);

module.exports = Yuyues;