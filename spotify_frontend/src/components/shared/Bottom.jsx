import React, { useContext } from 'react'
import { Icon } from '@iconify/react'
import { useState,useEffect } from 'react';
import songContext from '../../context/songContext';
import Progressbar from './Progressbar';
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  }

function Bottom() {
   
    const {currentSong,setProgress,clicked,setClicked, setTime,playingSound, playSound,togglePlayPause}=useContext(songContext);
    // const [playingSound, setPlayingSound] = useState(null);
        
        useEffect(() => {
            if (playingSound) {
                const intervalId = setInterval(() => {
                    setProgress(playingSound.seek() / playingSound.duration());
                    setTime(formatTime(playingSound.seek()));
                }, 1000);
                
                return () => clearInterval(intervalId);
            }
        }, [playingSound]);
    //    const playSound = (url) => {     useEffect(() => {
    //         if (playingSound) {
    //             const intervalId = setInterval(() => {
    //                 setProgress(playingSound.seek() / playingSound.duration());
    //                 setTime(formatTime(playingSound.seek()));
    //             }, 1000);
                
    //             return () => clearInterval(intervalId);
    //         }
    //     }, [playingSound]);
    //       setClicked(!clicked);
    //       if (playingSound) {playingSound.stop()}
    //       const sound = new Howl({
    //           src: [url],
    //           onplay: () => {
    //             setTime(formatTime(0));
    //         },
            
    //       });
    //       setPlayingSound(sound);
    //       console.log("current url : ",url)
    //       sound.play();
    //   };
  return (
   <>
   <div className='w-full h-full flex'>
   <div className='h-full  bg-app-black text-white mt-5 flex w-1/5'>
     
    
     <div className='flex'>
     <div >
      <img src={currentSong.url} alt="" className='rounded-md h-20 w-20  ' />
      </div>
    <div className='ml-2'>
    <div>{currentSong.title}</div>
    <div className='text-sm'>{currentSong.dis}</div>                 
    </div>

     </div>
    
  </div>
  <div className='h-full w-4/5 bg-app-black mt-5 flex items-center justify-center'>
 
               <div className='flex flex-col '>
               <div className='flex items-center space-x-4 justify-center mr-16 text-white '>
                    <Icon icon="radix-icons:shuffle" width="32" height="32" />
                    <Icon icon="fluent:arrow-previous-12-filled" width="32" height="32" />
              {clicked ? (
               <div className='my-2 bg-app-black' onClick={togglePlayPause}>
                   <Icon icon="carbon:play-filled" width="32" height="32" />
               </div>
           ) : (
               <div className='my-2'>
                   <Icon icon="zondicons:pause-outline" width="32" height="32" onClick={togglePlayPause} />
                   
               </div>
              
           )}
                   <Icon icon="fluent:arrow-next-12-filled" width="32" height="32" />
                   <Icon icon="mingcute:volume-fill" width="32" height="32" />
                   <div className='w-20'>
                       {/* Volume Control */}
                   </div>
                   <Icon icon="ri:playlist-line" width="32" height="32" />
                   
               </div>
               <div className='w-1/2 h-full'>
               {
                clicked ? (<div className='bg-app-black mb-2'><p>.</p></div>):( <Progressbar />)
               }
               </div>
               </div>
         
               </div>
               
  </div>

  
   </>
  )
}

export default Bottom
