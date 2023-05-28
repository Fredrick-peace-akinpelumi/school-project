import React from 'react'
import './MoreDetail.css'
import chartpic from "../../../images/chart.png"
import head from "../../../images/head.PNG"
import Comment from '../../Comments/Comment'
import { MusicState } from '../../../context/musicContext'

const MoreDetails = () => {
    const {playList,songIndex}=MusicState()

    const track=playList[songIndex]
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="card col-lg-6 mx-auto h-50">
                <div className="card-body">
                    <img src={track?.cover} className='card-image' alt="" />
                    <div className="card-title text-center mt-3">
                        <h3>Asake ft Olamide</h3>
                        <p>Amapiano</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* artist and follow button */}
    <div className='col-lg-6 mt-5 mx-auto p-2'>
       <div className="d-flex justify-content-between">
       <div className="d-flex gap-4">
        <img src={head} className='rounded-circle roun' alt="" />
        <div>
            <h3 className='text-white'>Asake</h3>
        <p className='text-danger'>500,995 <b>Followers</b></p>
        </div>
        </div>
        <button className='btn btn-outline-warning h-25 w-25 mt-3 rounded-pill'>Follow</button>
       </div>
    </div>
    <Comment/>
    
    </>
  )
}

export default MoreDetails