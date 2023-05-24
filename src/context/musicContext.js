import { createContext,useState } from "react";

export const MusicContext=createContext();

const MusicContextProvider=({children})=>{
    const [currentMusic,setCurrentMusic]= useState("hello");

    const addMusicToPlayer=(num)=>{
        setCurrentMusic(num)
    }
    return(
        <MusicContext.Provider value={{currentMusic, addMusicToPlayer}}>
            {children}
        </MusicContext.Provider>
    )
}

export default MusicContextProvider