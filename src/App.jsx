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
    const startDate = new Date(2022, 1, 20, 21, 22, 31, 0);
    const currDate = new Date(Date.now());

    console.log(startDate.toDateString());
    const timeDifference = Math.floor((currDate - startDate) / 1000);

    console.log(timeDifference);

    let days = Math.floor(timeDifference / 86400) % 86400;

    seconds = timeDifference % 60;
    minutes = Math.floor(timeDifference / 60) % 60;
    hours = Math.floor(timeDifference / 3600) % 24;

    return `${days.toString().padStart(2, '0')}:${hours
      .toString()
      .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const getSeconds = () => {
    const startDate = new Date(2022, 1, 18, 5, 0, 0, 0);
    const currDate = new Date(Date.now());

    const timeDifference = Math.floor((currDate - startDate) / 1000);

    let seconds = timeDifference % 60;

    return `:${seconds.toString().padStart(2, '0')}`;
  };

  const getDay = () => {
    let days = Math.ceil(count / 86400) % 86400;
    return `${days} day`;
  };

  const openContractAddress = () => {};
  //setTimeout(IncrementTimer, 1000);
  return (
    <>
      <nav>
        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0xE1eD692f34BEB30e887c3a9a64Bec1b7A73D5EF3"
          className="contractAddress btn"
          target="_blank"
          onClick={openContractAddress}
        >
          PancakeSwap
        </a>
      </nav>
      <div className="Counter">
        <p className="txt-c bg-black p">Countdown to</p>
        <p className="txt-c bg-black p">rug</p>
        <p className="txt-c timer p">
          {getTime()}
          <span className="lower-Font">{getSeconds()}</span>
        </p>
      </div>
    </>
  );
}
// 0xE1eD692f34BEB30e887c3a9a64Bec1b7A73D5EF3
export default App;
