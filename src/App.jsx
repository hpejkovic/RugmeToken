import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
 
  const IncrementTimer = () => {
    setCount(count + 1);
  };



  useEffect(() => {
    const timer = setInterval(() => {
      IncrementTimer();
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  const getTime = () => {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    const startDate = new Date(2022, 1, 18, 5, 0, 0, 0);
    const currDate = new Date(Date.now());
  
    const timeDifference = Math.floor((currDate - startDate) / 1000);

    console.log(timeDifference)
  

    let days = Math.floor(timeDifference / 86400) % 86400;

    seconds = timeDifference % 60;
    minutes = Math.floor(timeDifference / 60) % 60;
    hours = Math.floor(timeDifference / 3600) % 24;

    return `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  };

  const getSeconds = () => {
    const startDate = new Date(2022, 1, 18, 5, 0, 0, 0);
    const currDate = new Date(Date.now());
  
    const timeDifference = Math.floor((currDate - startDate) / 1000);

  


    let seconds = timeDifference % 60;

    return `:${seconds.toString().padStart(2, '0')}`
  }

  const getDay = () => {
    let days = Math.ceil(count / 86400) % 86400;
    return `${days} day`;
  };
  //setTimeout(IncrementTimer, 1000);
  return (
    <div className="Counter">
      <p className="txt-c bg-black">Countdown to rug</p>
      <p className='txt-c timer'>{getTime()}<span className='lower-Font'>{getSeconds()}</span></p>
    </div>
  );
}

export default App;
