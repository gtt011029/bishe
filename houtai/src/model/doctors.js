var mongoose = require("mongoose");

var doctorsSchema =  new mongoose.Schema({
    Did:{
        type:String,
    },
    Dname:{
        type:String,
    },
    Dpro:{
        type:String,
    },
    Doffice:{
      type:String,
    },
    Ddetail:{
        type:String,
    },
    Dspecialise:{
        type:String,
    }
})

//类
var Docotor = mongoose.model('doctors',doctorsSchema);

module.exports = Docotor;
