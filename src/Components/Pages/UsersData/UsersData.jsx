import React from 'react'
import { Link } from 'react-router-dom'


const UsersData = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-6 d-lg-flex gap-lg-3 flex-wrap">
        <div className='col-4 d-flex'>
        <h5 className='p-1 bg-danger rounded-pill text-white text-center'>Followers</h5> 
        <h4 className='text-white m-auto ms-2'>0</h4>
        </div>
        <div className='col-4 d-flex'>
        <h5 className='p-1 bg-danger rounded-pill text-white text-center'>Following</h5> <h4 className='text-white m-auto ms-2'>0</h4>
        </div>
        <div className='col-4 d-flex'>
        <h5 className='p-1 bg-danger rounded-pill text-white text-center'>Streams</h5> <h4 className='text-white m-auto ms-2'>0</h4>
        </div>
        <Link to='/category' className='navLink text-info text-decoration-none'>Upload Your Music now</Link>

            </div>
        </div>
    </div>
    </>
  )
}

export default UsersData