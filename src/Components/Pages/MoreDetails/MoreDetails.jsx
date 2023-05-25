import React from 'react'
import './MoreDetail.css'
import chartpic from "../../../images/chart.png"

const MoreDetails = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="card col-6 mx-auto h-50">
                <div className="card-body">
                    <img src={chartpic} className='card-image' alt="" />
                    <div className="card-title text-center mt-3">
                        <h3>Asake ft Olamide</h3>
                        <p>Amapiano</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MoreDetails