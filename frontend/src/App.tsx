import TempCharts from "./components/TempCharts";
import TodayWeather from "./components/TodayWeather";
import TopBar from "./components/TopBar";
import WeekForecast from "./components/WeekForecast";
import './App.css'

function App() {
  return (
    <>
      <TopBar/>
      <div id="content">
        <TodayWeather/>
        <div id="side">
          <TempCharts/>
          <WeekForecast/>
        </div>
      </div>
    </>
  )
}

export default App
