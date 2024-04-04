import React from 'react'

function TextWithHover(props) {
  return (
    <>
     <div className={`${props.active? 'text-white':'text-gray-400'} flex items-center justify-start cursor-pointer hover:text-white`}>
       <div className='px-5 py-2'>
       </div>
       <div className='text-sm text-gray-400 font-bold hover:text-white hover:text-lg '>
            {props.text}
       </div>
      </div>
    </>
  )
}

export default TextWithHover