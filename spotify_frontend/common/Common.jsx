import { useCookies } from 'react-cookie';
import LeftPannel from '../src/components/shared/LeftPannel';
import Bottom from '../src/components/shared/Bottom';
import TopBar from '../src/components/shared/TopBar';

function Common({ children }) {
  const [cookie, setCookie] = useCookies();
  const token = cookie.token;
  
  return (
 
      
       <>
       <div className='w-full bg-black flex justify-stretch h-5/6'>
        <div >
        <LeftPannel token={token}/>
        </div>
        <div className='w-full '>
          <TopBar token={token}/>
       
          {children}
       
     
        </div>
       
       </div> 
       <div className='w-full h-1/6'>
          <Bottom/>
        </div>
       </>
 
  );
}

export default Common;
