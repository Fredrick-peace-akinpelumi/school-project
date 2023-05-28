import React, {useState, useEffect} from 'react'
import './List.css'
import axios from 'axios'
import { PulseLoader } from 'react-spinners';
import chartpic from "../../../images/trackImg.png"
import { ToastContainer, toast } from 'react-toastify';



const PlayList = () => {
    const [getEp, setgetEp] = useState({})
    const [getAlbum, setgetAlbum] = useState({})
    useEffect(() => {
    axios.get('http://localhost:5000/api/songs/extendedPlay/')
    .then((res)=>{
        setgetEp(res.data)
        console.log(res.data);
        if (!res) {
            return(
                <div className='text-center mt-5'>
                    <PulseLoader size={30} color="red"/>
                </div>
            )   
        }
    })
    .catch((err)=>{
      toast.error(err);
    })
    axios.get('http://localhost:5000/api/songs/album/')
    .then((res)=>{
        setgetAlbum(res.data)
        console.log(res.data);
        if (!res) {
            return(
                <div className='text-center mt-5'>
                    <PulseLoader size={30} color="red"/>
                </div>
            )   
        }
    })
    .catch((err)=>{
      toast.error(err);
    })
  }, [])
    

    
  return (
    <>
      <ToastContainer />
    {/* Album */}
    <div className="container mt-3">
        <div className="d-flex col-lg-4 gap-2">
            <button className='btn  btn-warning col-4 text-white rounded-pill' >Album</button>
        </div>
        <div className="d-flex flex-wrap gap-5">
            {
                Object.values(getAlbum).map((album,index)=>{
                    return(
            <div className='list1 mt-3' key={index} >
                            
                        <div className="">
                            <div className=''>
                                <img src={album.cover} alt="" className='image' />
                                <div className="text-white text-center">
                                    <span>{album.albumTitle}</span>
                                    <p className='text-warning'>{album.artist}</p>
                                </div>
                            </div>
                        </div>
            </div>
                    )
                })
            }
            </div>
    </div> 
    {/* Extended Play */}
    <div className="container mt-3">
        <div className="d-flex col-lg-4 gap-2">
            <button className='btn  btn-warning col-4 text-white rounded-pill' >Ep</button>
        </div>
        <div className="d-flex flex-wrap gap-5">
            {
                Object.values(getEp).map((ep,index)=>{
                    return(
            <div className='list1 mt-3' key={index}>
                            
                        <div  className="">
                            <div className=''>
                                <img src={ep.cover} alt="" className='image' />
                                <div className="text-white text-center">
                                    <span>{ep.epTitle}</span>
                                    <p className='text-warning'>{ep.artist}</p>
                                </div>
                            </div>
                        </div>
            </div>
                    )
                })
            }
            </div>
    </div>
    </>
  )
}

export default PlayList