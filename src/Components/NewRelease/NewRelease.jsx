import "./NewRelease.css"
import trackImg from "../../images/trackImg.png"
import { MusicState } from "../../context/musicContext"

const NewRelease=()=>{
    const {allSongs,setSongIndex}=MusicState()
    console.log(process.env.REACT_APP_API_URL)
    return(
        <div className="NewRelease">
            <h3>New Release</h3>
            <div>
                {allSongs?.map((song,index)=>{
                    const handleSongToPlay=()=>{
                        setSongIndex(index)

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
    )

}

export default NewRelease;