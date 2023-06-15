import React, {useState,} from 'react'
import { NavLink } from 'react-router-dom'
import useFetchDetails from '../../customHooks/UseFetchDetails'
import Likes from '../UsersData/Likes'
import UsersData from '../UsersData/UsersData'
import './Profile.css'

const Profile = () => {
  const [show, setshow] = useState(false)
  const [showButt, setshowButt] = useState(false)
  const [first] = useFetchDetails();
  // let show = false

  console.log(first)


 const showDetails =()=>{
    setshow(true)
    setshowButt(true)
 }
 const hideDetails=()=>{
  setshow(false)
  setshowButt(false)
 }
  return (
      <>
      <div className="container ">
        <div className="d-flex justify-content-between">
        <div className='mt-4 d-flex'>
        <div className='pics'></div>
       <div className='ms-3'>
       <h3 className='text-white '>Welcome</h3>
        <h4 className='text-white '>{first&&first.username}</h4>
       </div>
        </div>

       <div>
       {!showButt? <NavLink><i onClick={()=>showDetails()} className="fa-sharp float mt-5  fs-3 fa-solid fa-arrow-down text-white"></i></NavLink>:""}
        {showButt? <NavLink><i onClick={()=>hideDetails()} className="fa-sharp float mt-5  fs-3 fa-solid fa-arrow-down text-white"></i></NavLink> :""}
       </div>

        </div>
        <hr className='text-white'/>
        {show ?<UsersData followers={first.followers}  followings={first.followings}/>:""}
        
      </div>
      <Likes/>
    </>
  )
}

export default Profile