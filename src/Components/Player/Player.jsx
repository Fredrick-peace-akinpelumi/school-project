
import trackImg from "../../images/trackImg.png";
import music1 from "../../audio/wizkid1.mp3"
import music2 from "../../audio/wizkid2.mp3"
import "./Player.css"
import { useCallback, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import format from "format-duration"

const Player=()=>{
    const audioRef=useRef()
    const playAnimationRef = useRef();
    const progressBarRef=useRef() 
    const [volume,setVolume]=useState(1)
    const [isPlaying,setIsPlaying]=useState(false)
    const [isShuffle, setIsShuffle]=useState(false)
    const [duration,setDuration]=useState(0)
    const [currentTime, setCurrentTime]=useState(0)

    const Play=()=>{
        audioRef.current.play()
        setIsPlaying(true)
    }

    const repeat = useCallback(() => {
        const audioTime = audioRef.current.currentTime;
        setCurrentTime(audioTime);
        //progressBarRef.current.value = currentTime;

        progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(progressBarRef.current.value / duration) * 100}%`
        );
        
    
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, progressBarRef, setCurrentTime]);
      
    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
          playAnimationRef.current = requestAnimationFrame(repeat);
        } else {
          audioRef.current.pause();
          cancelAnimationFrame(playAnimationRef.current);
        }
    }, [isPlaying, audioRef, repeat]);

    

    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
    };
    
    const handleLoad=()=>{
        setDuration(audioRef.current.duration)
        //console.log(audioRef.current?.currentTime)
        handleChange()
        
    }

    useEffect(()=>{
        const vol=()=>{
            audioRef.current.volume=volume
        }
        vol()

    },[volume])

    const handleChange=useCallback(()=>{
        console.log("changed")
    },[audioRef.current?.currentTime])
    
    // useEffect(()=>{
        
    //     console.log("change")
    // },[audioRef.current?.currentTime])
    
    const Pause=()=>{
        audioRef.current.pause()
        setIsPlaying(false)
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
                    {isShuffle?<i className="fa notSoBig fa-random" aria-hidden="true"></i>:<i className="fa notSoBig fa-random" aria-hidden="true"></i>}
                    <i className="fa notSoBig fa-step-backward" aria-hidden="true"></i>
                    {isPlaying?<i onClick={Pause} className="fa bigIcon fa-pause-circle-o" aria-hidden="true"></i>:<i onClick={Play} className="fa bigIcon fa-play-circle-o" aria-hidden="true"></i>}
                    <i className="fa notSoBig fa-step-forward" aria-hidden="true"></i>
                    <i className="fa notSoBig fa-stop" aria-hidden="true"></i>


                </div>
                <audio src={music1} ref={audioRef}  onLoadedData={handleLoad} onEndedCapture={(e)=>setIsPlaying(false)}/> 
                <div>
                    <span>{format(1000*currentTime)}</span>
                    <input type="range" className="music-range" value={currentTime} defaultValue={0}  onChange={handleProgressChange} ref={progressBarRef}  max={duration} />
                    <span>{format(1000*duration)}</span>
                </div>           
                
            </div>
            <div>
                <i className="fa fa-volume-up" aria-hidden="true"></i>
                <input type="range" max="8" onChange={(e)=>setVolume(e.target.value/10)}/>
            </div>

        </div>
    )

    
}
export default Player