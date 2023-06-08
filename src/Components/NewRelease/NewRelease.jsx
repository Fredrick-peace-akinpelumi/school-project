import "./NewRelease.css"
import { useNavigate } from "react-router";
import { MusicState } from "../../context/musicContext"
import { PulseLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';



const NewRelease=()=>{
    const navigate = useNavigate()
    const {allSongs,setSongIndex,loading}=MusicState()
  
    if (loading) {
        return(
            <div className='text-center mt-5'>
                <PulseLoader size={30} color="red"/>
            </div>
        )   
    }

    
    
    return(
        <>
      <ToastContainer />
        
        <div className="NewRelease">
            <h3>New Release</h3>
            {/* <PulseLoader size={30} color="red"/> */}
            <div>
                {allSongs?.map((song,index)=>{
                    const handleSongToPlay=()=>{
                        // setSongIndex(index)
                        navigate(`/moredetails/${index}`)
                        
                    }
                    return(
                        <div onClick={()=>handleSongToPlay()} key={song._id} className="newReleaseTrack">
                            <img src={song.cover} alt={song.musicTitle} />
                            <span>{song.musicTitle}</span>
                            <span>{song.artist}</span>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )

}

export default NewRelease;