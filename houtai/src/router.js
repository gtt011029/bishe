var express = require('express');
var router = express.Router();
const http = require('http');
const path = require('path');
const url = require('url');
const querystring = require('querystring');
var formidable = require("formidable");
var Docotor = require("./model/doctors.js")
var Users = require("./model/users.js")
var commons = require("./model/commons.js")
var lunbos = require("./model/lunbo.js")
var hots = require("./model/hots.js")
var yuyues = require("./model/yuyues.js")

router.get("/doctors",function(req,res){
    // console.log("请求到了吗doctors")
    Docotor.find({}, function (err, result) {
        // console.log(result);
        res.send(result);
    });
})

//根据id找医生
router.get("/getdoctordetail",function(req,res){
    var id = url.parse(req.url, true).query.Did;
    // console.log(url.parse(req.url, true).query.Did);
    Docotor.find({'Did':id}, function (err, result) {
        // console.log(result);
        res.send(result);
    });
})

//保存预约信息
router.post("/saveYuyue",function(req,res){
    // console.log(req.body)
    var obj={
        YUname:req.body.Uname,
        YStype:req.body.Stype,
        YDname:req.body.Sdoctor,
        YSoffice:req.body.Soffice,
        YSdisease:req.body.Sdisease,
        YSname:req.body.Sname,
        YStime:req.body.Stime,
    }
    // console.log(obj)
    yuyues.insertyuyues(obj,function(result){
        // console.log(result);
    })
    res.send("ok")
})

//根据用户名获取预约信息
router.get("/getYuyue",function(req,res){
    var Uname = url.parse(req.url,true).query.Uname;
    yuyues.find({'YUname':Uname},function(err,result){
        // console.log(result);
        res.send(result);
    })
})

//判断用户是否注册
router.post("/getUsers",function(req,res){
    var name = req.body.name;
    var password = req.body.password
    Users.find({Uname:name}, function (err, result) {
        // console.log(result)
        res.send(result);
    });
})

//添加新用户
router.post("/addUsers",function(req,res){
    // console.log(req.body);
    Users.find({Uname:req.body.name},function(err,result){
        if(result.length){
            // console.log("用户名已存在")
            res.send("用户已存在");
        }else{
            var obj = {
                Uname: req.body.name,
                Upassword:req.body.password,
            }
            Users.insertUsers(obj,function(result){
                    // console.log(result);
            })
            res.send("")
        }
    })
})

//找用户下面的病人
router.get("/getSicker",function(req,res){
    var loginName = req.query.loginName;
    // console.log("loginName"+loginName)
    Users.find({Uname:loginName},function(err,result){
        // console.log(result[0])
        res.send(result[0]);
    })
    // console.log(sick);
})

//在用户下面添加病人
router.post("/addSicker",function(req,res){
    var obj = req.body;
    // console.log(obj)
    var Sicker=[];
    Users.find({Uname:obj.loginName},function(err,result){
        Sicker = result[0].Sicker;
        Sicker.unshift(obj);
        Users.update({Uname:obj.loginName},{$set:{Sicker:Sicker}},function(err,result){
           res.send('ok');
        })
    })
})

//获取hot疾病
router.get("/gethot",function(req,res){
    hots.find({},function(err,result){
        // console.log(result)
        res.send(result);
    })
})

//获取推荐医生
router.get("/getoffice",function(req,res){
    var Hoffice = url.parse(req.url,true).query.Hoffice;
    Docotor.find({'Doffice':Hoffice},function(err,result){
        res.send(result);
        // console.log(result);
    })
})

// 获取常见疾病
router.get("/getcommons",function(req,res){
    commons.find({},function(err,result){
        // console.log(result)
        res.send(result)
    })
})

//根据id找常见疾病
router.get("/getcommonsdetail",function(req,res){
    var Cid = url.parse(req.url,true).query.Cid;
    commons.find({'Cid':Cid},function(err,result){
        res.send(result);
    })
})

//请求轮播数据
router.get("/getlunbos",function(req,res){
    lunbos.find({},function(err,result){
        // console.log(result);
        res.send(result)
    })
})


//用户登录之后，在node后台将用户信息保存到node服务器
router.get("/setsession",function(req,res){
    req.session.userinfo = "张三";
    res.send("setsession")
})

//用户登录之后下次再去访问node服务器的时候就可以获取node服务器中所保存的session的数据了
router.get("/getsession",function(req,res){
    res.send(req.session.userinfo)
})


module.exports = router;
