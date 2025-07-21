import React, { useEffect, useState } from 'react'

const Countdown = ({startDate , endDate}) => {

    const [timeleft, setTimeleft] = useState({});

    const calculateTime = (diff , status) =>{
    return {
      status,
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

    useEffect(() => {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const updateCountdown = ()=>{
        const now = new Date();

        if(now < start){
            const diff = start-now;
            setTimeleft(calculateTime(diff , "Starts In"));
        }
        else if (now<= start && now<end){
            const diff = end - now;
            setTimeleft (calculateTime(diff , "Ends In"))
        }
        else {
            setTimeleft({status: "Registration Closed"});
        }
      };
    
     updateCountdown();

     const interval = setInterval(updateCountdown, 1000);
     return () => clearInterval(interval);
    }, [startDate , endDate]);
    

  return (
    <div className='font-mono'>
        {timeleft.status === "Registration Closed" ? ( <div>Registration Closed</div> ) : (<p>{timeleft.days}h {timeleft.hours}min {timeleft.seconds}sec</p>
        )}
      
    </div>
  )
}

export default Countdown
