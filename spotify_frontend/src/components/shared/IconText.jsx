import React from 'react'
import { Icon } from '@iconify/react'
function IconText(props) {
  return (
      <>
      <div className={`${props.active? 'text-white':'text-gray-400'} flex items-center justify-start cursor-pointer hover:text-white`}>
       <div className='px-5 py-2'>
            <Icon icon = {props.icon} fontSize={27}/>
       </div>
       <div className='text-sm font-bold'>
            {props.text}
       </div>
      </div>
      </>
  )
}

export default IconText