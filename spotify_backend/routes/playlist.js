const express = require('express')
const router = express.Router();
const playlist = require("../model/playlist");
const passport = require("passport");
const song = require('../model/song')
//const user = require('../model/user')
router.post("/create",passport.authenticate('jwt',{session:false}),async (req,res)=>{
    const{name ,thumbnail,Songs}=req.body
    const owner = req.user;
    const playlistData = {name,thumbnail,Songs,owner:owner._id,collaborators: []}
    const newPlaylist = await playlist.create(playlistData)

    return res.status(200).json(newPlaylist);
})
router.get("/get/playlist/:playlistId",passport.authenticate('jwt',{session:false}),async (req,res)=>{
    const playlistId = req.params.playlistId
    const Playlist = await playlist.findOne({_id:playlistId});
    if(!Playlist) return res.status(301).json({err:"invalid id"})
    return res.status(200).json(Playlist);
})
router.get("/get/artist/:artistId",passport.authenticate('jwt',{session:false}),async ()=>{
    const ArtistId = req.params.artistId;
    const playlists = await playlist.find({owner:ArtistId})
    return res.status(200).json({data:playlists});
})
router.post('/add/song',passport.authenticate('jwt',{session:false}),async (req,res)=>{
    const currentUser = req.user
    const {playlistId,songId}=req.body
    const PlayList = await playlist.findOne({_id:playlistId})
    if(!PlayList) return res.status(301).json({err:"playlist does not exist"})

    const Song = await song.findOne({_id:songId})
    if(!Song) return res.status(301).json({err:'song does not exist'})

    if(PlayList.owner.equals(currentUser._id) || PlayList.collaborators.includes(currentUser)){
            PlayList.songs.push(songId)
            await PlayList.save()
            return res.status(200).json({PlayList})
    }
    return res.status(301).json({err:"invalid user"})
})
module.exports = router