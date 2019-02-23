var mongoose = require("mongoose");

var commonsSchema =  new mongoose.Schema({
    Cid:{
        type:String,
    },
    Cname:{
        type:String,
    },
    Cimage:{
        type:String,
    },
    Cdetail:[

    ]
})

//类
var commons = mongoose.model('commons',commonsSchema);

module.exports = commons;
