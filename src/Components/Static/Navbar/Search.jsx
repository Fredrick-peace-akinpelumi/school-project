import React from 'react'
const vector ='./images/Vector.png'
const vector1 ='./images/Vector1.png'

const Search = () => {
  return (
    <>
    <div className="container-fluid">
    <div className='m-4 d-flex col-lg-6 col-md-12 col-sm-12'>
    <div>
    <img src={vector} alt="" />
    <img className='imgg' src={vector1} alt="" />
    </div>
        <input type="search" placeholder='Search artist'  className='rounded-pill form-control w-75 bg-dark shadow-none text-secondary' />
      </div>
    </div>
    </>
  )
}

export default Search