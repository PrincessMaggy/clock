import React from "react";

//importing images
import up from '../images/up.png'
import down from '../images/down.png'


const Length =({title, changeTime, type, time, formatTime})=>{
    return(
        <div className="length">
            <h3>{title}</h3>
            <div className="times1">
                <div><img src={down} id="break-decrement" alt="" onClick={()=> changeTime(-60, type)} /></div>
                <h3>{formatTime(time)}</h3>
                <div><img src={up} id="break increment" alt="" className="up" onClick={()=> changeTime(60, type)} /></div>
            </div>
        </div>
    )
}

export default Length;