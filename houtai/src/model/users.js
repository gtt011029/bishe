var mongoose = require("mongoose");

var UsersSchema =  new mongoose.Schema({
    Uid:{
        type:String,
    },
    Uname:{
        type:String,
    },
    Upassword:{
        type:String,
    },
    Utel:{
        type:String,
    },
    Uaddress:{
        type:String,
    },
    Sicker:[
        {
            Sid:{
                type:String,
            },
            Sname:{
                type:String,
            },
            Ssex:{
                type:String
            },
            Saddress:{
                type:String,
            },
            relationship:{
                type:String,
            },
        }
    ]
})
//静态方法，增加用户
UsersSchema.statics.insertUsers = function(json,callback){
    var users = new Users(json);
    users.save(function(err){
        if(err){
            callback(-2);  //服务器错误
            return;
        }
        //发回1这个状态
        callback(1);
    });
}

//类
var Users = mongoose.model('Users',UsersSchema); //mongoose.model()函数创建一个模型，是一个类，一个mongoose的model就对应一个集合（Users为一个类名字，将自动大写变为小写，后面加s，变为集合的名字，第二个参数是字段列表，用KV对表示字段名字和类型）

module.exports = Users;


