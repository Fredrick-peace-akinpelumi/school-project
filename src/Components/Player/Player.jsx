
import trackImg from "../../images/trackImg.png";
import music1 from "../../audio/wizkid1.mp3"
import music2 from "../../audio/wizkid2.mp3"
import "./Player.css"
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Player=()=>{
    const audioRef=useRef()
    const [volume,setVolume]=useState(1)

    const Play=()=>{
        audioRef.current.play()
    }

    useEffect(()=>{
        const vol=()=>{
            audioRef.current.volume=volume
        }
        vol()

    },[volume])
    
    const Pause=()=>{
        audioRef.current.pause()
    }
    return(
        <div className="Player">
            <div>
                <img src={trackImg} alt="track" />
                <div>
                    <span>Olamide</span>
                    <span>1999</span>
                </div>

            </div>
            <div>
                <div>
                    <button onClick={Play} >play</button>
                    <button onClick={Pause}>pause</button>
                </div>
                <audio src={music2} ref={audioRef}/>            
                <input type="range" max="200" />
            </div>
            <div>
                <i className="bi" />
                <input type="range" max="8" onChange={(e)=>setVolume(e.target.value/10)}/>
            </div>

        </div>
    )
}
export default Player