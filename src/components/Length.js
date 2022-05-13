import React from "react";

//importing images
import pause from '../images/pause.png';
import play from '../images/play.png'
import up from '../images/up.png'
import down from '../images/down.png'
import refresh from '../images/refresh.png'


const Length =({title, changeTime, type, time, formatTime})=>{
    return(
        <div>
            {/* <h3>{Title}</h3> */}
            <div className="times">
                <img src={up} />
            </div>
        </div>
    )
}

export default Length;