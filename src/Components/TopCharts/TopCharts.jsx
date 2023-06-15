import "./TopCharts.css"
import chartpic from "../../images/chart.png"
import { MusicState } from "../../context/musicContext"
import { useNavigate } from "react-router-dom"


const TopCharts=()=>{

    const array=[{},{},{}]
    const {allSongs}=MusicState()
    const navigate=useNavigate()
    const topSong= [allSongs[2],allSongs[5], allSongs[8]]
    console.log(topSong)
    return(
        <div className="TopCharts">
            <h2>Top charts</h2>
            {
                topSong.map((song,index)=>{
                    const handleSongToPlay=()=>{
                        // setSongIndex(index)
                        navigate(`/moredetails/${index}`)
                        
                    }
                    return(
                            
                        <div onClick={()=>handleSongToPlay()} key={index} className="single-chart">
                            <div>
                                <img src={song?.cover} alt="" />
                                <div className="single-details">
                                    <span>{song?.musicTitle}</span>
                                    <span>{song?.artist}</span>
                                    
                                </div>
                            </div>
                            

                        </div>
                    )
                })
            }

        </div>
    )
}

export default TopCharts;