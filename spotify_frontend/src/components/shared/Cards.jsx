import React, { useState, useEffect,useContext } from 'react';
import { Icon } from '@iconify/react';
import Progressbar from './Progressbar';
import { Howl } from 'howler';
import songContext from '../../context/songContext';



function Cards(props) {
    
    const {currentSong,setCurrentsong}=useContext(songContext);
    return (
        <div className='bg-black bg-opacity-60 w-1/5 p-4 py-6 rounded-md hover:bg-gray-900 hover:bg-opacity-60' onClick={ ()=>{setCurrentsong(props)}}>
            <div>
                <img src={props.url} alt="" className='w-full rounded-lg mb-2' />
            </div>
            <div className='text-white font-semibold text-lg'>{props.title}</div>
            <div className='text-gray-500 text-sm'>{props.dis}</div>
        </div>
    );
}

export default Cards;
