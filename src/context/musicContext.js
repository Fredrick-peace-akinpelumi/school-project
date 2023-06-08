import { useEffect } from "react";
import { createContext,useState } from "react";
import axios from "axios"
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';


export const MusicContext=createContext();

const MusicContextProvider=({children})=>{
    const [playList,setPlayList]= useState({});
    const [allSongs,setAllSongs]=useState([])
    const [loading,setLoading]=useState(false)
    const [songIndex, setSongIndex]=useState(0)
    
    const apiUrl=process.env.REACT_APP_API_URL
    
    useEffect(()=>{
        const getAllSongs=async()=>{
            setLoading(true)
            try {
                const {data}= await axios.get(`${apiUrl}/songs/singles`)
                setAllSongs(data)
                setPlayList(data)
                setLoading(false)
            } catch (error) {
                toast.error(error.message)
                setLoading(false)
                
            }
            
        }
        getAllSongs()
    },[])

    // const addMusicToPlayer=(num)=>{
    //     setCurrentMusic(num)
    // }
    return(
        <MusicContext.Provider value={{playList, setPlayList,loading,setLoading,allSongs,setAllSongs,songIndex,setSongIndex}}>
            {children}
        </MusicContext.Provider>
    )
}

export const MusicState=()=>{
    return useContext(MusicContext)
}


export default MusicContextProvider