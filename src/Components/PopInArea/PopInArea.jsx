
import { useContext } from "react"
import trackImg from "../../images/trackImg.png"
import { MusicContext } from "../../context/musicContext"

const PopInArea=()=>{
    const array=[{},{},{},{},{},{},{},{},{},{},]
    const {addMusicToPlayer}=useContext(MusicContext);
    return(
        <div className="NewRelease">
            <h3>Popular in your Area</h3>
            <div>
                {array.map((id,i)=>{
                    return(
                        <div onClick={(e)=>addMusicToPlayer(i)} key={i} className="newReleaseTrack">
                            <img src={trackImg} alt="track name" />
                            <span>love me more</span>
                            <span>Brainiac col</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default PopInArea;