import React,{useState} from 'react'
import './MoreDetail.css'
import head from "../../../images/head.PNG"
import ReactTimeAgo from 'react-time-ago'
import  Comment from '../../Comments/Comment'
import { MusicState } from '../../../context/musicContext'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const MoreDetails = () => {
    const {playList,songIndex,setSongIndex}=MusicState()
    const [followNo, setfollowNo] = useState(0)
    const [showBtn, setshowBtn] = useState(true)
    const {musicdetails}=useParams()


    const track=playList[musicdetails]
    useEffect(()=>{
        if(musicdetails){
            localStorage.activeSong=JSON.stringify(musicdetails)
            setSongIndex(musicdetails)
        }
    },[musicdetails])

   const follow =()=>{
            setfollowNo(followNo+1)
            console.log(followNo);
            setshowBtn(false)
   }
   const unFollow =()=>{
        setfollowNo(followNo-1)
         console.log(followNo);
         setshowBtn(true)
   }
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="card col-lg-6 m-auto ">
                <div className="card-body">
                    <img src={track?.cover} className='card-image ms-lg-5' alt="" />
                    <div className="card-title text-center mt-3">
                        <h3>{track?.artist}</h3>
                        <p>{track?.musicTitle}</p>
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
            <h3 className='text-white'>{track?.artist}</h3>
        <p className='text-danger'>500,995 <b>Followers</b></p>
        <ReactTimeAgo date={new Date(track.createdAt)} locale={"en-US"} className='text-white' />
        </div>
        </div>
        {
            showBtn? <button className='btn btn-outline-warning h-25 w-25 mt-3 rounded-pill' onClick={()=>follow()}>Follow</button>:
            <button className='btn btn-warning h-25 w-25 mt-3 rounded-pill' onClick={()=>unFollow()}>Following</button>
        }
       </div>
    </div>
    <Comment/>
    
    </>
  )
}

export default MoreDetails