import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AiFillCaretRight, AiFillFire } from "react-icons/ai";
import { MdOutlineReplay } from "react-icons/md";

// timer pseudo
// set the timer to 60 seconds (defaultTimer)
// start the timer on button click
// if timer is running, stop the timer
// reset timer to 60 seconds (defaultTimer)
// when timer reaches 0
// stop timer
// reset timer to 60 seconds (defaultTimer)
// increment pomodoro count by 1

const CalendarContainer = () => {
  const [defaultTimer, setDefaultTimer] = useState<number>(60);
  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(defaultTimer);
  const [pomoCount, setPomoCount] = useState<number>(0);

  const handleStartTimer = () => {
    if (startTimer) {
      setStartTimer(false);
      setTimer(defaultTimer);
    } else {
      setStartTimer(true);
    }
  };

  // Effect to manage the countdown
  useEffect(() => {
    if (!startTimer || timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTimer, timer]);

  // Effect to handle timer reaching zero
  useEffect(() => {
    if (timer === 0 && startTimer) {
      setStartTimer(false); // Stop the timer
      setTimer(defaultTimer); // Reset the timer
      setPomoCount((prevCount) => prevCount + 1); // Increment pomodoro count
    }
  }, [timer, startTimer, defaultTimer]);

  return (
    <div className="w-72 text-center ">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <h3>{timer}</h3>
            <button onClick={() => handleStartTimer()}>
              {startTimer ? <MdOutlineReplay /> : <AiFillCaretRight />}
            </button>
          </div>
          <div className="flex">
            {Array.from({ length: pomoCount }, () => (
              <AiFillFire />
            ))}
          </div>
        </div>
      </div>
      <div className="text-black">
        <Calendar />
      </div>
    </div>
  );
};

export default CalendarContainer;
