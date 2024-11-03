import "./App.css";
import CalendarContainer from "./components/CalendarContainer";

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex justify-center items-center">
      <div>
        <div className="">
          <CalendarContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
