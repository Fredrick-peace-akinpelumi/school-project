import NewRelease from "../../NewRelease/NewRelease";
import PopInArea from "../../PopInArea/PopInArea";
import TopCharts from "../../TopCharts/TopCharts";
import Hero from "../../hero/hero";
import "./LandingPage2.0.css"



const LandingPage2=()=>{
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