import "./NewRelease.css"
import trackImg from "../../images/trackImg.png"

const NewRelease=()=>{
    const array=[{},{},{},{},{},{},{},{},{},{},]
    return(
        <div className="NewRelease">
            <h3>New Release</h3>
            <div>
                {array.map((id,index)=>{
                    return(
                        <div key={index} className="newReleaseTrack">
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

export default NewRelease;