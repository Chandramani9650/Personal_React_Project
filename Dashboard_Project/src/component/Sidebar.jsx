import React, { useContext } from 'react'
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data/dummy';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhKYVJwWmFZfVpgdVdMY1pbQXRPMyBoS35RckVgWXZecHdTQ2JZUUxz');
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Valcontext } from '../context/AuthContext';
const Sidebar = () => {

 const {ActiveMenu, setActiveMenu,screenSize, setScreenSize} = useContext(Valcontext)

 function handlecloseSidebar(){
  if (ActiveMenu !== undefined && screenSize <= 900) {
    setActiveM  
  }
 }

  
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white font-bold bg-blue-200 text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';


  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {ActiveMenu && (<>
      <div className='flex justify-between items-center'>
        <Link to="/" onClick={()=>{}} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
          <SiShopware/><span>CMMaurya</span>
        </Link>
        <TooltipComponent content="menu" position='BottomCenter' >
            <button type='button' onClick={()=>{setActiveMenu(!ActiveMenu)}} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
              <MdOutlineCancel/>
            </button>

          </TooltipComponent>
      </div>
      <div className='mt-10'>
      {links.map((item)=>(
        <div key={item.title}>
          <p className='text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase'>
          {item.title}
          </p>

          {item.links.map((link)=>(
            <NavLink 
            to={`/${link.name}`}
            key={link.name}
            onClick={handlecloseSidebar}
            className={({isActive})=>(
              isActive?activeLink:normalLink
            )}
            >
              {link.icon}
              <span className="capitalize ">{link.name}</span>
            </NavLink>
          ))}
        </div>
      ))}
      </div>
      </>)

      }
    </div>
  )
}

export default Sidebar
