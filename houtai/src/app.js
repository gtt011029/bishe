const express = require("express");
const router = require("./router");
var app = express();
var mongoose = require('mongoose');

//使用node压缩
const compression = require('compression');
app.use(compression());

mongoose.connect("mongodb://127.0.0.1/gett", {useNewUrlParser:true}, function(err){
    if(err){
        console.log('Connection Error:' + err)
    }else{
        console.log('Connection success!') }
})
mongoose.connection.on('connected', function () {
    console.log('连接成功' );
});


var bodyParser = require("body-parser")
var expressSession = require('express-session')
//配置 bodyparser用于解析post请求，一定要在挂在请求之前
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


var expressSession = require('express-session');
app.use(expressSession({
    name : "gett",
    secret : 'secret', // 对session id 相关的cookie 进行签名
    resave : false,
    rolling: true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
}));



//配置跨域请求
app.all('/api/*',(req,res,next)=>{
    //设置允许跨域响应报文头
    //设置跨域
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","*");
    res.setHeader('Content-Type','application/json;charset=utf-8');
    next();
});


app.use("/api",router)

//文件上传的目录
app.use("/upload",express.static("../upload/"))


app.listen(8899);
