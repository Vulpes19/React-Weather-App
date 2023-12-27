import DayForecast, { WEATHER } from "./DayForecast";
import '../style/WeekForecast.css'

export default function WeekForecast() {
    return (
        <div id="weekForecast">
            <DayForecast day="Today" weather={WEATHER.CLOUDY} humidity={11} />
            <DayForecast day="Monday" weather={WEATHER.SUNNY} humidity={11} />
            <DayForecast day="Tuesday" weather={WEATHER.RAINY} humidity={11} />
            <DayForecast day="Wednesday" weather={WEATHER.SUNNY} humidity={11} />
            <DayForecast day="Wednesday" weather={WEATHER.SUNNY} humidity={11} />
            <DayForecast day="Wednesday" weather={WEATHER.SUNNY} humidity={11} />
            <DayForecast day="Wednesday" weather={WEATHER.SUNNY} humidity={11} />
        </div>
    )
}