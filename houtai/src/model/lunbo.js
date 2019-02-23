var mongoose = require('mongoose');

var lunbosSchema = new mongoose.Schema({
    Lid:{
        type:String,
    },
    Lsrc:{
        type:String
    }
})

var lunbos = mongoose.model('lunbos',lunbosSchema)

module.exports =  lunbos