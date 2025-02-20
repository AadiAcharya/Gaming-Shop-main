import React, { useEffect, useState } from "react";

const Time = ({ duration }) => {
  const [time, setTime] = useState(duration);
  // useEffect(()=>{
  //   const timer=setTimeout(()=>{
  //     setTime(time-1000);
  //   },1000);
  //   return ()=>clearTimeout(timer);
  // },[time]);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormatedTime = (millisecond) => {
    let seconds = Math.floor(millisecond / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 24);
    let days = Math.floor(hours / 24);

    let total_seconds = seconds % 60;
    let total_minutes = minutes % 60;
    let total_hours = hours % 24;
    let total_days = days;
    return (
      <div className="flex gap-4">
        `
        <div className="flex flex-col w-[42px] h-[50px] items-start gap-4 flex-shrink-0">
          <div className="text-secondary "> Days </div>
          <div className="text-red-600 font-bold text-[32px] leading-[30px] tracking-[1.28px] "> {total_days} </div>
        </div>
{/* 
    
font-family: Inter;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 30px; /* 93.75% 
letter-spacing: 1.28px; */}

        :
        <div className="flex flex-col">
          <div className="text-secondary text-2xl">Hours</div>
          <div className="text-red-600 font-bold text-xl ">{total_hours}</div>
        </div>
        :
        <div className="flex flex-col">
          <div className="text-secondary text-2xl">Minutes</div>
          <div className="text-red-600 font-bold text-xl ">{total_minutes}</div>
        </div>
        :
        <div className="flex flex-col">
          <div className="text-secondary text-2xl">Seconds</div>
          <div className="text-red-600 font-bold text-xl ">{total_seconds}</div>
        </div>
        `
      </div>
    );
  };

  return <div>{getFormatedTime(time)}</div>;
};

export default Time;
