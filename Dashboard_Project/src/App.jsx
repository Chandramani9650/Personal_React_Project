import { useContext, useState } from 'react'
import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhKYVJwWmFZfVpgdVdMY1pbQXRPMyBoS35RckVgWXZecHdTQ2JZUUxz');
import Sidebar from './component/Sidebar'
import './App.css'
import Allroutes from './AllRoutes/Allroutes';
import Navbar from './component/Navbar';
import { Valcontext } from './context/AuthContext';

function App() {
const {ActiveMenu, setActiveMenu} = useContext(Valcontext)


  return (
  <div>
    <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:"1000"}}>
          <TooltipComponent content="setting"  position='Top'>
            <button type='button' className='text-3xl p-3 hover:shadow-lg rounded-lg '  style={{borderRadius:"50%", backgroundColor:'blue', color:"white"}}>

              <FiSettings/>
            </button>


          </TooltipComponent>

        </div>
       {ActiveMenu?
      <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
       <Sidebar/>
 
      </div>:
      <div className=' w-0 dark:bg-secondary-dark-bg'>
   <Sidebar/>
      </div> 
       }

       <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${ActiveMenu?'md:ml-72':'flex-2'}`}>
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
        <Navbar/>
          </div>
          <div>
          <Allroutes/>
          </div>
        
       </div>
       
    </div>
  </div>
  )
}

export default App
