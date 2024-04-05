import React, { useContext, useState } from 'react'
import './Sidebar.css'
import NotesIcon from '@mui/icons-material/Notes';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import { Link, NavLink } from 'react-router-dom';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import CategoryIcon from '@mui/icons-material/Category';
import ToggleSidebarState from '../../Context/ToggleSidebarState'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AdminUser from "../../Context/Athorization";
import LogoutIcon from '@mui/icons-material/Logout';


export default function Sidebar({isShowSidebar , setIsShowSidebar}) {

  const [isShowProductDropDown , setIsShowProductDropDown] = useState(false)
  const {toggleSidebar , setToggleSidebar} = useContext(ToggleSidebarState)
  const {username , setUsername , password , setPassword , setIsUserLoggedIn} = useContext(AdminUser)


 

  return (

    <>

    

    <aside className={`sidebar ${isShowSidebar ? 'block' : 'hidden'}   xl:block  transition-all duration-300 ease-in-out delay-150 ${toggleSidebar ? 'flex-0' : 'flex-1'} p-5 `}>
      <div className={`header-siedebar flex justify-between gap-36  items-center  ${toggleSidebar ? 'justify-center' : ''}`}>
       {toggleSidebar ? '' :  <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 198.43 176.06" className="h-10"><g><rect fill="#3b82f675" x="0" y="88.03" width="141.73" height="88.03" rx="44.02" ry="44.02"></rect><rect fill="#3b82f6d0" x="0" y="44.02" width="170.08" height="88.03" rx="44.02" ry="44.02"></rect><rect fill="#3b82f6f0" x="0" y="0" width="198.43" height="88.03" rx="44.02" ry="44.02"></rect></g></svg>}
     
         <NotesIcon  className='text-white cursor-pointer' onClick={() => setToggleSidebar(!toggleSidebar)}  /> 
      
      </div>
      <div >


        <ul className="sales-dashbourd  flex flex-col cursor-pointer overflow-hidden  text-zinc-500   transition-all duration-300 ease-in-out border-zinc-400 text-zinc-500 gap-1 text-[13px] justify-start  mt-5 ">
          <NavLink to={'/'} className={`sidebar-links mb-2 px-3 py-2 gap-2 flex  cursor-pointer overflow-hidden rounded-xl hover:text-zinc-100  transition-all duration-300 ease-in-out hover:text-zinc-100   `}>
          <WorkspacesOutlinedIcon style={{fontSize:'medium', color : '#000'}} />
          {toggleSidebar ? '' : <li className='cursor-pointer  w-full flex list-none items-start overflow-hidden '>Sales Dashbourd</li>}
          </NavLink>

          <NavLink to={'/'} className='mb-2 px-3 py-2 gap-2 flex  cursor-pointer overflow-hidden rounded-xl hover:text-zinc-100  transition-all duration-300 ease-in-out hover:text-zinc-100   '>
          <i class="fa-solid fa-bolt"></i>
          {toggleSidebar ? '' : <li className='cursor-pointer  w-full flex list-none items-start overflow-hidden '>AI Dashbourd</li>}
          </NavLink>
              


            <div>
            <li className='flex justify-start'>
            <span>Apps</span>
            </li>

            <NavLink  onClick={() => setIsShowProductDropDown(!isShowProductDropDown)} className='sidebar-links mb-2 px-3 py-2 gap-2 flex items-center cursor-pointer overflow-hidden rounded-xl    hover:text-zinc-100  transition-all duration-300 ease-in-out hover:text-zinc-100   '>
           
           <MonetizationOnIcon  style={{fontSize:'medium'}} />
           {toggleSidebar ? '' : <li className='cursor-pointer  w-full flex list-none items-start overflow-hidden  '>Sales</li>}
           
             {toggleSidebar ? '' : <ExpandMoreIcon className={`transition-all ${isShowProductDropDown ? 'rotate-180' : ''}  duration-300 ease-in-out`} />}
         
           </NavLink>
 
           <ul style={{height:'auto'}} className={` flex flex-col transition-all duration-300 ease-in-out ${isShowProductDropDown ? '' : 'hidden'}`}>
             <NavLink className='sidebar-links mb-2 px-3 py-2 gap-2 flex items-center cursor-pointer overflow-hidden rounded-xl    hover:text-zinc-100  transition-all duration-300 ease-in-out hover:text-zinc-100   ' to={'/products'}>
               <JoinFullIcon style={{fontSize:'medium'}}/>
             {toggleSidebar ? '' : <li className='cursor-pointer  w-full flex list-none items-start overflow-hidden whitespace-nowrap'>Products</li>}
             </NavLink>
             <NavLink className='mb-2 px-3 py-2 gap-2 flex items-center cursor-pointer overflow-hidden rounded-xl    hover:text-zinc-100  transition-all duration-300 ease-in-out hover:text-zinc-100   ' to={'/cart'}>
               <CategoryIcon style={{fontSize:'medium'}} />
             {toggleSidebar ? '' : <li className='cursor-pointer  w-full flex list-none items-start overflow-hidden whitespace-nowrap'>Cart</li>}
             </NavLink>
           </ul>
            </div>

            <NavLink to={'/users'} className={`sidebar-links mb-2 px-3 py-2 gap-2 flex  cursor-pointer overflow-hidden rounded-xl hover:text-zinc-100  transition-all duration-300 ease-in-out hover:text-zinc-100   `}>
          <GroupOutlinedIcon style={{fontSize:'medium', color : '#000'}} />
          {toggleSidebar ? '' : <li className='cursor-pointer  w-full flex list-none items-start overflow-hidden whitespace-nowrap'>Users</li>}
          </NavLink>
          <NavLink  onClick={() => setIsUserLoggedIn(false)} className={`sidebar-links mb-2 px-3 py-2 gap-2 flex  cursor-pointer overflow-hidden rounded-xl hover:text-zinc-100  transition-all duration-300 ease-in-out hover:text-zinc-100   `}> 
         <LogoutIcon style={{fontSize:'medium', color : '#000'}} />
          {toggleSidebar ? '' : <li className='cursor-pointer  w-full flex list-none items-start overflow-hidden whitespace-nowrap'>Logout</li>}
         </NavLink>
          
        </ul>
      </div>
    </aside>

    </>
  )
}
