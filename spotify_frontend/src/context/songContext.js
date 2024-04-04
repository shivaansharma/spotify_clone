import { createContext } from "react";

const songContext = createContext({
    currentSong:null,
    setCurrentsong :(currentSong)=>{},
},{
    progress:null,
    setProgress :(currentSong)=>{}
},{
    time:null,
    setTime:()=>{}
},{
    clicked:null,
    setClicked:()=>{}
},{
    playingSong:null,
    setPlayingSong:()=>{}
},{
    playSong:()=>{}
});

export default songContext;