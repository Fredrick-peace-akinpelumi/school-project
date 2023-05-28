import { useEffect } from "react";
import NewRelease from "../../NewRelease/NewRelease";
//import Player from "../../Player/Player";
import PopInArea from "../../PopInArea/PopInArea";
import TopCharts from "../../TopCharts/TopCharts";
import Hero from "../../hero/hero";
import "./LandingPage2.0.css"
import axios from "axios";



const LandingPage2=()=>{

    // useEffect(()=>{
    //     axios.get("http://localhost:5000/api/songs/singles")
    //     .then((res)=>{
    //         // console.log(res.data)
    //         const data=res.data
    //         console.log(data);
    //         console.table(data.music)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // },[])
    return(
        <div className="LandingPage2">
            <div className="first-section">
                <Hero />
                <TopCharts />
            </div>
            <NewRelease />
            <PopInArea />

        </div>
    )
}

export default LandingPage2;