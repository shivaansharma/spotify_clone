const mongoose = require("mongoose");
const { strategies } = require("passport");
const User = new mongoose.Schema({
    firstName:{
        type : String,
        required : true, 
    },
    lastName : {
        type : String,
        required : false,
    },
    password : {
        type : String,
        required : true,

    },
    email : {
        type : String,
        required : true, 
    },
    userName : {
        type : String,
        required : true,
    },
    likedSongs : {
        type : String,
        default : "",
    },
    likedPlaylist : {
        type : String,
        default : "",
    },
    subcribesArtist :{
        type : String,
        default : "",
    },
    loggedIn :{
        type : Boolean,
        default : false
    }

});

const userModel = mongoose.model("User",User)

module.exports=userModel
