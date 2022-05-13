import React from "react";

//importing images
import pause from '../images/pause.png';
import play from '../images/play.png'
import up from '../images/up.png'
import down from '../images/down.png'
import refresh from '../images/refresh.png'


const Length =({title, changeTime, type, time, formatTime})=>{
    return(
        <div className="length">
            <h3>{title}</h3>
            <div className="times1">
                <div><img src={down} alt="" onClick={()=> changeTime(-60, type)} /></div>
                <h3>{formatTime(time)}</h3>
                <div><img src={up} alt="" className="up" onClick={()=> changeTime(60, type)} /></div>
            </div>
        </div>
    )
}

export default Length;