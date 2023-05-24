import React from 'react'
import './MoreDetail.css'
import chartpic from "../../../images/chart.png"

const MoreDetails = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="card col-6 mx-auto">
                <div className="card-body">
                    <img src={chartpic} className='card-image' alt="" />
                    <div className="card-title">
                        <h3>hello</h3>
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