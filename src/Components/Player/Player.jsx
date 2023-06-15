
import trackImg from "../../images/trackImg.png";
import music1 from "../../audio/wizkid1.mp3"
import music2 from "../../audio/wizkid2.mp3"
import "./Player.css"
import { useCallback, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import format from "format-duration"
import { MusicState } from "../../context/musicContext";
import { useNavigate ,useLocation  }  from "react-router-dom";


const Player = () => {
    const audioRef = useRef()
    const playAnimationRef = useRef();
    const progressBarRef = useRef()
    const [volume, setVolume] = useState(1)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isShuffle, setIsShuffle] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const { playList, songIndex, setSongIndex } = MusicState()
    useEffect(()=>{
        const token=localStorage.getItem("activeSong")?JSON.parse(localStorage.getItem("activeSong")): 0;
        setSongIndex(token)
    },[])
    //const [indexsetIndex] = useState(0);
    const track = playList[songIndex]


    const Play = () => {
        audioRef.current.play()
        setIsPlaying(true)
    }


    const location = useLocation();

  const path = location.pathname;
    const navgate = useNavigate();

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
        // alert(path)
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

    const handleLoad = () => {
        setDuration(audioRef.current.duration)
        //console.log(audioRef.current?.currentTime)
        handleChange()

    }
    const prev = () => {
        const length = playList.length
        if (Number(songIndex) === 0) {
            setSongIndex(length - 1)
            if(path.slice(1,12)=='moredetails'){
                navgate("/moredetails/" + (length - 1))
            }
            localStorage.activeSong = JSON.stringify(length - 1)
        } else {
            if(path.slice(1,12)=='moredetails'){
                navgate("/moredetails/" + (Number(songIndex) - 1));
            }
            localStorage.activeSong = JSON.stringify(Number(songIndex) - 1)
            setSongIndex(songIndex - 1)

        }
        Play()
    }


    const next = () => {
        const length = playList.length
        if (songIndex >= length - 1) {
            if(path.slice(1,12)=='moredetails'){
                navgate("/moredetails/" + 0)
            }
            setSongIndex(0)
            localStorage.activeSong = JSON.stringify(0)
        } else {
            if(path.slice(1,12)=='moredetails'){
                navgate(`/moredetails/${(Number(songIndex) + 1)}`)
            }
            localStorage.activeSong = JSON.stringify(songIndex + 1)
            setSongIndex(songIndex + 1)
        }
        Play()
        console.log(songIndex)
        //setSongIndex(songIndex-1)
    }
    

    useEffect(() => {
        const vol = () => {
            audioRef.current.volume = volume
        }
        vol()

    }, [volume])

    const handleChange = useCallback(() => {
    }, [audioRef.current?.currentTime])

    // useEffect(()=>{

    //     console.log("change")
    // },[audioRef.current?.currentTime])

    const Pause = () => {
        audioRef.current.pause()
        setIsPlaying(false)
    }
    const handleNextPlay=()=>{
        setSongIndex(Number(songIndex) + 1)
        console.log(songIndex)
        Play()

    }
    return (
        <div className="Player">
            <div>
                <img src={track?.cover} alt="track" />
                <div>
                    <span>{track?.artist}</span>
                    <span>{track?.musicTitle}</span>
                </div>

            </div>
            <div>
                <div>
                    {isShuffle ? <i className="fa notSoBig fa-random" aria-hidden="true"></i> : <i className="fa notSoBig fa-random" aria-hidden="true"></i>}
                    <i onClick={prev} className="fa notSoBig fa-step-backward" aria-hidden="true"></i>
                    {isPlaying ? <i onClick={Pause} className="fa bigIcon fa-pause-circle-o" aria-hidden="true"></i> : <i onClick={Play} className="fa bigIcon fa-play-circle-o" aria-hidden="true"></i>}
                    <i onClick={next} className="fa notSoBig fa-step-forward" aria-hidden="true"></i>
                    <i className="fa notSoBig fa-stop" aria-hidden="true"></i>


                </div>
                <audio src={track?.music} ref={audioRef} onLoadedData={handleLoad} onEnded={handleNextPlay} onEndedCapture={(e) => setIsPlaying(false)} />
                <div>
                    <span>{format(1000 * currentTime)}</span>
                    <input type="range" className="music-range" value={currentTime} defaultValue={0} onChange={handleProgressChange} ref={progressBarRef} max={duration} />
                    <span>{format(1000 * duration)}</span>
                </div>

            </div>
            <div>
                <i className="fa fa-volume-up" aria-hidden="true"></i>
                <input type="range" max="8" onChange={(e) => setVolume(e.target.value / 10)} />
            </div>

        </div>
    )


}
export default Player