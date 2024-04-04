import React, { useContext, useState } from 'react';
import songContext from '../../context/songContext';

function Progressbar(props) {
  const{progress,time} = useContext(songContext)
  
    return (
        <>
      <div className='flex items-center justify-center mb-5'>
      <div className='h-full w-1/2 bg-gray-800 rounded-md'>
            <div className='bg-green-500 p-1 rounded-md' style={{ width: `${progress*100}%` }}></div>
        </div>
        <div className='p-2 text-white'>
             {time}
        </div>
      </div>
       </>
    );
}

export default Progressbar;
