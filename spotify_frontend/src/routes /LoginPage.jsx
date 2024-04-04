import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import {useNavigate} from "react-router-dom"
import { useCookies } from 'react-cookie';
import TextInput from '../components/shared/TextInput';
import { Link } from 'react-router-dom';
import { makeUnauthenticatedPOSTRequest} from '../utils/ServerHelper'
function LoginPage() {
  const[email,setEmail]= useState("")
  const[password,setPassword]=useState("");
  const[cookie,setCookie]=useCookies(["token"]);
  const nav = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {email,password}
    const res = await  makeUnauthenticatedPOSTRequest('/auth/login',data);
    if(res && !res.err){
      const token = res.token;
      const date = new Date();
      date.setDate(date.getDate()+30);
      setCookie("token",token,{path:"/",expires:date})
     nav("/")
  }
}
  return (
    
   <>
   <div className=' w-full h-full flex  flex-col bg-white '>
   <div className='w-full  border-b-2 p-2 border-gray-400 flex justify-center'>
    <Link to={'/'}>
   <Icon icon="logos:spotify" width="165" color=''  />
   </Link>
   </div>

   <div className='h-full w-full flex flex-col items-center justify-top m-5'> 
      <span className='text-black py-3 font-bold'>To continue, Login to Spotify</span>
     <div className='mt-2 mb-2 w-1/4'>
     <TextInput placeholder= 'you@gmail.com' type = 'email' className='' id = '1234' label = 'Email or Username' value={email} setValue={setEmail}/>
     <TextInput placeholder='Password' type = 'password' id = '5678' label = 'Password' value={password} setValue={setPassword}/>
     <div className='w-full flex justify-start'>

     </div>
     <div className=' w-full flex justify-end'>   
      <button  className=' bg-green-400 rounded-full mt-6 font-semibold ' onClick={handleSubmit}>LOG IN</button>
     </div>
     <div className='w-full border border-solid mt-4'></div>
     </div>
        <div className=' mt-4 text-black font-bold text-lg'>Don't have an account ?</div>
        <div className='text-gray-500 border-solid border-2 border-gray-500 rounded-full font-bold mb-5 w-1/4 flex items-center justify-center mt-3 p-2'>
          <Link to={'/signup'}>
          SIGN UP FOR SPOTIFY
          </Link>
          </div>
   </div>
   </div>
   </>
  )
}

export default LoginPage