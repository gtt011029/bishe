var mongoose = require('mongoose');

var lunbosSchema = new mongoose.Schema({
    Lid:{
        type:String,
    },
    Lsrc:{
        type:String
    }
})

const lunbo = mongoose.model('lunbo',lunbosSchema)

module.exports =  lunbo
