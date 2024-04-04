import React from 'react'

import { Link } from 'react-router-dom'
import TextWithHover from './TextWithHover'



function TopBar({token}) {
    const handelLogout = function (){
                //console.log(Cookies)
                document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              }
            
  return (
   <>
   <div className=' h-1/10 w-full flex justify-end'>
   <div className='flex '>
          <TextWithHover text="Premium" />
            <TextWithHover text="Support" />
            <TextWithHover text="Download" />
            {

!token?
<div className='flex items-center'>
    <div className="border-r border-white h-6 mx-3"></div>
    <Link to='/signup'>
        <TextWithHover text="Sign up" />
    </Link>
    <Link to='/login'>
        <button className='ml-4 bg-white rounded-full px-3 py-1 font-semibold text-black'>LOG IN</button>
    </Link>
</div>
:
<div className='flex items-center mx-4'>
    
<div className="border-r border-white h-6 mx-3 "></div>
<button className='ml-4 bg-white rounded-full px-3 py-1 font-semibold text-black' onClick={handelLogout}>Log Out</button>
<button className='ml-4 bg-white rounded-full px-3 py-1 font-semibold text-black'>ac</button>
</div>
        }
        </div>
   </div>
   </>
  )
}

export default TopBar


// function TopBar({token}) {
//    
//   return (
    
//   <>
//     <div className='h-1/10 flex items-center justify-end bg-black bg-opacity-30'>
//         <div className='flex justify-between'>
//             <TextWithHover text="Premium" />
//             <TextWithHover text="Support" />
//             <TextWithHover text="Download" />
//         </div>
//         {

// !token?
// <div className='flex items-center'>
//     <div className="border-r border-white h-6 mx-3"></div>
//     <Link to='/signup'>
//         <TextWithHover text="Sign up" />
//     </Link>
//     <Link to='/login'>
//         <button className='ml-4 bg-white rounded-full px-3 py-1 font-semibold text-black'>LOG IN</button>
//     </Link>
// </div>
// :
// <div className='flex items-center mx-4'>
    
// <div className="border-r border-white h-6 mx-3 "></div>
// <button className='ml-4 bg-white rounded-full px-3 py-1 font-semibold text-black' onClick={handelLogout}>Log Out</button>
// <button className='ml-4 bg-white rounded-full px-3 py-1 font-semibold text-black'>ac</button>
// </div>
//         }
     
//     </div>
//   </>
//   )
// }

// export default TopBar