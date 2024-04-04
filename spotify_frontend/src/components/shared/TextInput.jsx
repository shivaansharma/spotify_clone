import React from 'react'

function TextInput(props) {
  return (
   <>
   <div className='flex flex-col space-y-2 w-full'>
    <label htmlFor={props.id} className={`font.${props.color} font-bold mt-1`}>{props.label}</label>
    <input type={props.type}
     name=""
     placeholder={props.placeholder}
     id={props.id}
    className='p-2 rounded-md border-gray-300 border-solid border-2 bg-white text-black'
    value = {props.value}
    onChange={(e)=>{props.setValue(e.target.value)}}
    />
   </div>
   </>
  )
}

export default TextInput