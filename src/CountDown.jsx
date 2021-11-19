import React, { useState, useEffect } from 'react'

const CountDown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (paused || over) return;
    if (h === 0 && m === 0 && s === 0) setOver(true);
    else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  const reset = () => {
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="text-2xl text-center">
      <p className="md: text-4xl text-green-700 font-bold">{`${h.toString().padStart(2, '0')}:${m
        .toString()
        .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
      <div className="text-red-600 font-semibold text-xl">{over ? "时间到了!" : ''}</div>
      <button 
        onClick={() => setPaused(!paused)}
        className="px-3 py-2 border-1 border-gray-800 rounded-md text-sm"
      >
        {paused ? 'Resume' : 'Pause'}
      </button>
      <button className="text-sm" onClick={() => reset()}>Restart</button>
    </div>
  );
};

export default CountDown
