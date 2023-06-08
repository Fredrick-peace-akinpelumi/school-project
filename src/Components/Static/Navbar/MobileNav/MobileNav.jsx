import React from 'react'
import './MobileNav.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";

const MobileNav = () => {
  const navigate = useNavigate()

  const [cookies,setCookies,removeCookie]=useCookies(["currentUser"])
  const logOut=()=>{
    removeCookie("currentUser")
      navigate("/")
  }
  return (
    <>
      <div className=" fixed-bottom nav d-lg-none d-sm-block d-md-none ">
      <div className='d-flex sec  gap-5 justify-content-around'>
      <NavLink to="/"><i className="icon2 fa-solid fs-4 fa-house nav"></i></NavLink>
      <NavLink to="/playlist"><i className=" icon2 fa-4 fa-solid fa-list"></i></NavLink>
      <NavLink><i className=" icon2 fs-4 fa-solid fa-radio"></i></NavLink>
      <NavLink><i className="icon2 fs-4 fa-solid fa-video"></i></NavLink>
      <NavLink to="/register"><i className="fa-solid fa-user fa-lg  icon2"></i></NavLink>
      <NavLink><i className="fa-solid fa-right-from-bracket icon2 fs-4" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"></i></NavLink>
      </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure you want to log out??</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Nope</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>logOut()}>Sure</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default MobileNav