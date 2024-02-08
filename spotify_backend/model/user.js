const mongoose = require("mongoose");
const User = new mongoose.Schema({
    firstName:{
        type : String,
        required : true, 
    },
    lastName : {
        type : String,
        required : false,
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
    }
});

const userModel = mongoose.Model("User",User)

module.exports=userModel