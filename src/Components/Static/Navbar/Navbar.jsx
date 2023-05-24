import './Navbar.css'
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Search from './Search'
import { useCookies } from "react-cookie";


const Navbar = () => {
  const navigate = useNavigate()

    const [cookies,,removecookies]=useCookies(["currentUser"])
    const logOut=()=>{
        navigate("/")
        removecookies("currentUser")
    }
  return (
    <>
    <Search/>
    {/* <button >show</button> */}
    <section className="container-fluid position-relative d-lg-block d-none d-md-block">
      <div className='sec2 d-flex  flex-column gap-4 align-items-center'>
      <NavLink to="/"><i className="icon2 fa-solid fs-4 fa-house mt-3 nav"></i></NavLink>
      <NavLink to="/playlist"><i className=" icon2 fa-4 fa-solid fa-list"></i></NavLink>
      <NavLink><i className=" icon2 fs-4 fa-solid fa-radio"></i></NavLink>
      <NavLink><i className="icon2 fs-4 fa-solid fa-video"></i></NavLink>
      </div>
      <div className='sec3 d-flex flex-column gap-5 align-items-center'>
      <NavLink to="/profile"><i className="fa-solid fa-user fa-lg mt-4 icon2"></i></NavLink>
      <NavLink><i className="fa-solid fa-right-from-bracket icon2 fs-4" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"></i></NavLink>
      </div>
    </section>

    {/* <!-- Button trigger modal --> */}
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

{/* <!-- Modal --> */}
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

export default Navbar