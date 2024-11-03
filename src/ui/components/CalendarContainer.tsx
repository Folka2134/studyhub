import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AiFillCaretRight, AiFillFire } from "react-icons/ai";
import { MdOutlineReplay } from "react-icons/md";

const CalendarContainer = () => {
  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(25);

  const handleStartTimer = () => {
    setStartTimer(!startTimer);
  };

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
          <div>
            <AiFillFire />
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
