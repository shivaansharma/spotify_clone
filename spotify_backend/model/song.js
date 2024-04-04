const mongoose = require('mongoose');
const { schema } = require('./playlist');
const song = new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    thumbnail :{
        type : String,
        required : true,
    },
    track :{
        type : String,
        required : true,
    },
    artist :{
        type : String,
        required : true,
    }

})
const songModel = mongoose.model('song',song)
module.exports=songModel