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
    let days = Math.ceil(count / 86400) % 86400;

    seconds = count % 60;
    minutes = Math.floor(count / 60) % 60;
    hours = Math.floor(count / 3600) % 3600;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getDay = () => {
    let days = Math.ceil(count / 86400) % 86400;
    return `${days} day`;
  };
  //setTimeout(IncrementTimer, 1000);
  return (
    <div className="Counter">
      {/* <p className="txt-c">{getDay()}</p> */}
      <p>{getTime()}</p>
    </div>
  );
}

export default App;
