import React, {useState} from 'react';
import Length from './components/Length';
import './styles/app.scss';

function App() {
//states
  const [displayTime, setDisplayTime] = useState(25*60);
  const [breakTime, setBreakTime] = useState(5*60);
  const [sessionTime, setSessionTime] = useState(25*60);

  const formatTime =(time) =>{
    let minutes = Math.floor(time/60);
    let seconds = time% 60;
    return (minutes< 10? "0" + minutes: minutes ) + ":" + (seconds< 10? "0" + seconds: seconds )
  }

  const changeTime =(amount, type) =>{
    if (type =='break'){
      setBreakTime(prev => prev + amount)
    }else{
      setSessionTime(prev => prev + amount)
    }
  }

  return (
    <div className="App">

    
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

      <h1>{formatTime(displayTime)}</h1>
      
    </div>

  );
}

export default App;
