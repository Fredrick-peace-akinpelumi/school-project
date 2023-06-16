import React, {useState, useEffect} from 'react'
import './List.css'
import axios from 'axios'
import { PulseLoader } from 'react-spinners';
import chartpic from "../../../images/trackImg.png"
import { ToastContainer, toast } from 'react-toastify';
import { MusicState } from '../../../context/musicContext';
import { useNavigate } from 'react-router-dom';



const PlayList = () => {
    const {loading,allEp,setAllEp,setPlayList}=MusicState()
    const [getEp, setgetEp] = useState([])
    const [getAlbum, setgetAlbum] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:5000/api/songs/extendedPlay/')
    .then((res)=>{
        setAllEp(res.data)
        console.log(res.data);
    })
    .catch((err)=>{
      toast.error(err.message);
    })
    axios.get('http://localhost:5000/api/songs/album/')
    .then((res)=>{
        setgetAlbum(res.data)
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    }, [])

if (loading) {
    return(
        <div className='text-center mt-5'>
            <PulseLoader size={30} color="red"/>
        </div>
    )   
}
    

    
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
                getAlbum?.map((album,index)=>{
                    console.log(album)
                    const handleAlbumDetails=()=>{
                        navigate(`listdetails/${index}`)
                    }
                    return(
            <div className='list1 mt-3' key={index} onClick={()=>handleAlbumDetails()}>
                            
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
                allEp?.map((ep,index)=>{
                    const handleEpDetails=()=>{
                        setPlayList(ep.track)
                        navigate(`listdetails/${index}`)
                    }
                    return(
            <div className='list1 mt-3' key={index} onClick={()=>handleEpDetails()}>
                            
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