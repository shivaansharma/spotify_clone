import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoginPage from './routes /LoginPage'
import LandingPage from './routes /LandingPage'
import SignupPage from './routes /SignupPage'
import { useCookies } from 'react-cookie'
import UplodeSongs from './routes /UplodeSongs'
import songContext from './context/songContext'
function App(){
  const[currentSong,setCurrentsong] = useState({});
  const [progress,setProgress]=useState(1)
  const [cookie,setCookie] = useCookies()
  const [clicked,setClicked] = useState(true)
  const [time ,setTime]= useState("00:00")
  const [playingSound, setPlayingSound] = useState(null);
      useEffect(( )=>{
        if(!playingSound)return
        playSound(currentSong.songUrl)
        setClicked(false)
        console.log(" song ====" ,currentSong)
      },[currentSong])
      
        const playSound = (url) => {
          // setClicked(!clicked);
          console.log(clicked , url,playingSound)
          if (playingSound) stopSong()
          const sound = new Howl({
              src: [url],
              onplay: () => {
                setTime(formatTime(0));
            },
            
          });
          setPlayingSound(sound);
          console.log("current url : ",url)
          sound.play();
      };
      function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
        const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${remainingSeconds}`;
      }
      function togglePlayPause(){
        if(clicked){
          playSound(currentSong.songUrl)
          setClicked(false)
        }
        else{
          handlePause();
          setClicked(true)
        }
      }

      const handlePause = () => {
        playingSound.pause();
    };
    const stopSong = function(){
      playingSound.stop()
      setClicked(true)
    }
  const token = cookie.token;
    return <>
    <div className='w-screen h-screen text-black font-poppins overflow-hidden bg-black'>
    <BrowserRouter> 
    <songContext.Provider value={{currentSong
                                  ,setCurrentsong
                                  ,progress
                                  ,setProgress
                                  ,clicked
                                  ,setClicked
                                  ,time 
                                  ,setTime
                                  ,playingSound
                                  ,setPlayingSound
                                  ,playSound
                                  ,togglePlayPause}}>
      <Routes>
       
        <Route path ='/' element= {<LandingPage/>}/>
        <Route path='/login' element = {<LoginPage/>}/>
        <Route path='/signup' element = {<SignupPage/>}/>
        <Route path='/uplodesongs' element={<UplodeSongs/>}/>
        
      </Routes>
      </songContext.Provider>
    </BrowserRouter>
    </div>
    </>
}
export default App
