import React from 'react'
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './Breadcrumb.css'





function handleClick(event) {
    event.preventDefault();
    
  }

  

export default function Breadcrumb({current}) {


  const prevRout = () => {
    window.history.back()
  }
 
  

  return (
    <div>
       <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <p className=' text-zinc-400  text-sm  cursor-pointer hover:text-blue-500 active:text-blue-500 transition-all duration-300 ease-in-out' onClick={() => prevRout()} underline="hover" color="#fff" >
        <i class="fa-solid fa-arrow-left mr-1 dark:text-white text-black"></i> back to List
        </p>
        <Typography ><p className='dark:text-white text-black'>{current}</p></Typography>
      </Breadcrumbs>
    </div>
    </div>
  )
}
