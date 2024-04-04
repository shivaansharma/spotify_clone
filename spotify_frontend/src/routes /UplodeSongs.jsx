
import { useState } from 'react'

import {useNavigate} from "react-router-dom";


import TextInput from '../components/shared/TextInput';
import CloudinaryUpload from '../components/shared/CloudinaryUpload'
import {  makeAuthenticatedPOSTRequest} from '../utils/ServerHelper'
import Common from '../../common/Common'
import React from 'react'

function UplodeSongs() {
  const[artist,setArtist] = useState("");
    const [name ,setName] = useState("");
    const [thumbnail,setThumbnail]=useState("")
    const [playlistUrl,setPlaylistUrl]=useState("");
    

    console.log(window.cloudinary)
  let token =document.cookie.substring(6)
  console.log(token)
  const url =""
  
  
  const navigate = useNavigate();

    const submitSong = async () => {
        const data = {name, thumbnail, track: playlistUrl,artist};
        const response = await makeAuthenticatedPOSTRequest(
            "/songs/create",
            data
        );
        if (response.err) {
            alert("Could not create song");
            return;
        }
        alert("Success");
        navigate("/");
    };
  return (
    <>
     <Common>
     <div className='w-full h-full'>
      <div className='text-4xl text-white font-bold'>Uplode music</div>
      <div className='flex justify-evenly text-white'>
      <TextInput label="Name" id = "89798" type = "text" placeholder="Name" color = "white" value={name} setValue={setName}/>
      <div className=' border-solid border-white p-2'></div>
       <TextInput label="Thumbnail" id = "89798" type = "text" placeholder="Thumbnail" color="white" value={thumbnail} setValue={setThumbnail} />
      </div>
    
      <div className='w-1/3'>
      <TextInput label="Thumbnail" id = "8979238" type = "text" placeholder="Artist" color="white" value={artist} setValue={setArtist} />
   
      </div>
      <div className=' text-white py-3'>
    <CloudinaryUpload setUrl = {setPlaylistUrl} />
    <button className='ml-4 bg-white rounded-full px-3 py-1 font-semibold text-black ' onClick={submitSong}>Uplode Song</button>

      </div>
     </div>

     </Common>
    </>
  )
}

export default UplodeSongs

