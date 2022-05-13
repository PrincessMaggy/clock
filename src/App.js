import React, {useState} from 'react';
import Length from './components/Length';
import './styles/app.scss';

function App() {

  const [displayTime, setDisplayTime] = useState(25*60);

  const formatTime =(time) =>{
    let minutes = Math.floor(time/60);
    let seconds = time% 60;
    return (minutes< 10? "0" + minutes: minutes ) + ":" + (seconds< 10? "0" + seconds: seconds )
  }
  return (
    <div className="App">
      <h1>{formatTime(displayTime)}</h1>
      
    <Length/>
    </div>

  );
}

export default App;
