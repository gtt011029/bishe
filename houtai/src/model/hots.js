var mongoose = require("mongoose");

var hotsSchema = new mongoose.Schema({
    'Hid':{
        type:String,
    },
    'Hoffice':{
        type:String,
    },
    'Hsrc':{
        type:String,
    }
})

var hots = mongoose.model('hots',hotsSchema);

module.exports = hots;