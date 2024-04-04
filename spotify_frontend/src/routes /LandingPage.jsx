import React from 'react'
import Common from '../../common/Common'
import { CardData } from '../utils/CardData'
import Cards from '../components/shared/Cards';
const data = await CardData();
const realData = data.data;
console.log(realData)

function LandingPage() {
  return (
     
     <Common>
     
          <> 
        
        
         <div className='h-full w-full overflow-auto'>
            <PlaylistView title="Usttad saab" DisplayData={realData} />
            <PlaylistView title="Recently Created" DisplayData={realData} />
            <PlaylistView title="maha usdaat" DisplayData={realData} />
         </div>
          
          </>
     
     </Common>
   
  )
}
const PlaylistView = function (props){
    return(
      <div className='text-white'>
      <div className=' p-8 text-2xl font-semibold'>{props.title}</div>
      <div className='w-full px-4 flex justify-between space-x-3'>
          {props.DisplayData.map((item,) => (
            <Cards title={item.name} dis={item.artist} url={item.thumbnail} songUrl={item.track} />
        ))}
      </div>
      </div>
    )
}


export default LandingPage