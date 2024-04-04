
import React, { useState } from 'react'
import LogosSpotify from '/src/assets/LogosSpotify.jsx'
import IconText from './IconText'
import { Icon } from '@iconify/react'
import {Howl, Howler} from 'howler';
import { Link } from 'react-router-dom'
import TextWithHover from './TextWithHover'


function LeftPannel({token}) {
  return (
   <>
      <div className=' h-5/6 bg-black flex flex-col justify-between w-1/5'>
            <div>
          <div className='w-full h-full mt-2 p-2'>
            <LogosSpotify/>
            <div className='w-full h-full py-5 flex flex-col justify-between '>
                <Link to={'/'}>
            <IconText icon = {"material-symbols:home"} text = {"Home"}  />
            </Link>
            <IconText icon = {"material-symbols:search-rounded"} text = {"Search"}/>
            <IconText icon = {"icomoon-free:books"} text = {"Library"}/>
            <div className='pt-7'>
            <IconText icon = {"material-symbols:add-box"} text = {"Create Playlist"}/>
            <IconText icon = {"mdi:cards-heart"} text = {"Liked Songs"}/>
            {
              !
              token?<div></div>
              :
                <Link to={'/uplodesongs'}>
              <IconText icon = {"material-symbols:library-music-sharp"} text = {"Uplode Music"}  />
              </Link>
            }
           <div>
           {/* <button className=' rounded-full text-gray-400 hover:text-white border-gray-400 border-solid border-2 text-sm font-semibold hover:border-white cursor-pointer '>English</button> */}
           </div>
            </div>
           
            </div>
            <div className=''>

            </div>
            </div>
          </div>
        </div>

   </>
  )
}

export default LeftPannel