import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import {FaUserAlt } from 'react-icons/fa'
import {GrOrganization } from 'react-icons/gr'
import Avatar from '@mui/material/Avatar';
import { Navigate } from 'react-router-dom'


function UserAvatarContent({user}) {

    const handleLogOut=()=>{
        localStorage.clear()
        window.location.reload()
        }
       

        const handleCreate=()=>{

        }
    
  return (
    <div className='UserAvatarContent'>
        {localStorage.getItem("loggedInUser")&&<div className='UserAvatarHeading'>
           {/* <div classname='logogo'>
            <FaUserAlt/>
            </div>  */}
            <div className='image'> <Avatar alt="NO IMG" src={user?.profileImage} /></div>

            <div className='name'>
             {user?.name}
            </div>

        </div>}
        {localStorage.getItem("loggedInNgo")&& <div className='UserAvatarHeading'>
        {/* <div classname='logogo'>
         <GrOrganization/>
         </div>  */}
         <div className='image'> <Avatar alt="NO IMG" src={user?.profileImage} /></div>

         <div className='name'>
          {user?.name}
         </div>
         
            <div className='createButton' onClick={handleCreate}>Create</div>

     </div>}
        <div className='LogOutButton' onClick={handleLogOut}>Log Out</div>
    </div>
  )
}

export default UserAvatarContent