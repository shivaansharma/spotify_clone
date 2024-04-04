const express = require("express")
const passport = require('passport')
const app = express();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
// dotenv is used to create environment variables
const dotenv = require("dotenv")
dotenv.config('./')
const User = require('./model/user')
const authRouts = require("./routes/auth")
const createPlaylist = require("./routes/playlist")
const port = 8000;
const cors = require("cors")
app.use(cors())
app.use(express.json())
console.log(process.env.mongo_password,process.env.key)
const mongoose = require("mongoose")
const createSongs = require("./routes/songs")

//connecting mongodb
const url = `mongodb+srv://shivaansharma16:${process.env.mongo_password}@cluster0.8v7bwrw.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})//this is returning a promise
.then((res)=>console.log("connected to mongo: "))
.catch((err)=>console.log("error :",err))


//setting up passport
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.key;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, User) {
        if (err) {
            return done(err, false);
        }
        if (User) {
            return done(null, User);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

//setup of home rout
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.use("/auth",authRouts)

app.use("/songs",createSongs)

app.use("/playlist",createPlaylist)

app.listen(port,()=>{
    console.log("app is running on port : "+port)
})