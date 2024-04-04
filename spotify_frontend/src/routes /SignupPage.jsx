import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import {useNavigate} from "react-router-dom"
import { useCookies } from 'react-cookie';
import TextInput from '../components/shared/TextInput';
import { Link } from 'react-router-dom';
import { makeUnauthenticatedPOSTRequest} from '../utils/ServerHelper'
function SignupPage() {
  const [email,setEmail] = useState("");
  const [confirmEmail,setConfirmEmail]=useState("");
  const [password,setPassword]=useState("")
  const [userName ,setUserName] =useState("")
  const[firstName,setFirstName]= useState("")
  const[lastName,setLastName]=useState("")
  const[cookie,setCookie]=useCookies(["token"]);
  const nav = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email!=confirmEmail) alert("the email is mismatched")
    const data = {email,password,userName,firstName,lastName}
    const res = await  makeUnauthenticatedPOSTRequest('/auth/register',data);
    if(res && !res.err){
      const token = res.token;
      const date = new Date();
      date.setDate(date.getDate()+30);
      setCookie("token",token,{path:"/",expires:date})
     nav("/")
  }
  };
  return (
    <>
    <div className=' w-full h-full flex  flex-col overflow-x-hidden bg-white'>
    <div className='w-full  border-b-2 p-2 border-gray-400 flex justify-center'>
      <Link to={'/'}>
    <Icon icon="logos:spotify" width="165"  />
    </Link>
    </div>
 
    <div className='h-full w-full flex flex-col items-center justify-top m-5'> 
       <span className='text-black py-3 font-bold text-2xl'>SIGN UP FOR FREE AND START LISTNING</span>
      <div className='mt-2 mb-2 w-1/4'>
      <TextInput placeholder= 'you@gmail.com' type = 'email' className='' id = '1234' label = 'Email Address' value = {email} setValue={setEmail}/>
      <TextInput placeholder= 'Confirm Email Address' type = 'email' className='' id = '1235' 
      label = 'Confirm Email address' 
      value = {confirmEmail}
      setValue={setConfirmEmail}
      />
      <TextInput placeholder='Password' type = 'password' id = '5678' label = 'Create Password' value={password} setValue={setPassword}/>

      <TextInput placeholder='Enter User name' type = 'text' id = '5778' label = 'User name' value={userName} setValue={setUserName}/>
      <div className='w-full flex flex-col justify-between'>
      <TextInput placeholder='Enter First name' type = 'text' id = '53778' label = 'First name' value={firstName} setValue={setFirstName}/>
      <TextInput placeholder='Enter Last name' type = 'text' id = '57738' label = 'Last name' value={lastName} setValue={setLastName}/>
      </div>
      <div className=' w-full flex justify-center'>   
       <button  className=' bg-green-400 rounded-full mt-6 font-semibold' onClick={handleSubmit}>SIGN UP</button>
      </div>
      <div className='w-full border border-solid mt-4'></div>
      </div>
     <div className='h-full w-full flex flex-col items-center justify-center mb-5'>
         <div className=' mt-4 text-black font-bold text-lg'>Already have an account ?</div>
         <div className='text-gray-500 border-solid border-2 border-gray-500 rounded-full font-bold mb-9 w-1/4 flex items-center justify-center mt-3 p-2'>
            <Link to={'/login'} >
            LOG IN INSTEAD
            </Link>
            </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default SignupPage