import "./TopCharts.css"
import chartpic from "../../images/chart.png"


const TopCharts=()=>{

    const array=[{},{},{}]
    return(
        <div className="TopCharts">
            <h2>Top charts</h2>
            {
                array.map((id,i)=>{
                    return(
                            
                        <div key={i} className="single-chart">
                            <div>
                                <img src={chartpic} alt="" />
                                <div className="single-details">
                                    <span>The end of time</span>
                                    <span>sunny col</span>
                                    <span>shaggy</span>
                                </div>
                            </div>
                            o

                        </div>
                    )
                })
            }

        </div>
    )
}

export default TopCharts;