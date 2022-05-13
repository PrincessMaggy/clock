import React, {useState} from 'react';

//importing components
import Length from './components/Length';

//importing sass styling
import './styles/app.scss';
//importing images

import pause from './images/pause.png';
import play from './images/play.png';
import refresh from './images/refresh.png';

function App() {
//states
  const [displayTime, setDisplayTime] = useState(25*60);
  const [breakTime, setBreakTime] = useState(5*60);
  const [sessionTime, setSessionTime] = useState(25*60);
  const [timerOn, setTimerOn] =useState(false);
  const [onBreak, setOnBreak] = useState (false);

  const formatTime =(time) =>{
    let minutes = Math.floor(time/60);
    let seconds = time% 60;
    return (minutes< 10? "0" + minutes: minutes ) + ":" + (seconds< 10? "0" + seconds: seconds )
  }

  const changeTime =(amount, type) =>{
    if (type ==='break'){
      if(breakTime <= 60 && amount <0){
        return;
      }
      setBreakTime(prev => prev + amount)
    }else{
      if(sessionTime <= 60 && amount < 0){
        return;
      }
      setSessionTime(prev => prev + amount)
      if(!timerOn){
        setDisplayTime(sessionTime + amount)
      }
    }
  }

  const controlTime =() =>{
    

  }

  const resetTime =()=> {
    setDisplayTime(25*60);
    setBreakTime(5*60);
    setSessionTime(25*60);
  }

  return (
    <div className="App">
      <h1> POMODORO CLOCK</h1>
      <div className='comp'>
        <Length 
        title={"Break Length"} 
        changeTime={changeTime} 
        type={"break"} 
        time={breakTime} 
        formatTime={formatTime}
        />
      
      <Length 
        title={"Session Length"} 
        changeTime={changeTime} 
        type={"session"} 
        time={sessionTime} 
        formatTime={formatTime}
        />
    </div>
      <h1>{formatTime(displayTime)}</h1>
     <div className='comp'> 
      <div onClick={controlTime}>{ timerOn? <img src={pause}  id="pause" alt=""/>: <img src={play} id="play" alt=""/>}</div>
    
      <div onClick={resetTime}>
        <img src={refresh} alt ="" id='refresh' /></div>    
    </div>
    </div>

  );
}

export default App;
