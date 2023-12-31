import DayForecast from "./DayForecast";
import '../style/WeekForecast.css'
import { useWeatherData } from "../stores/weatherStore";

export default function WeekForecast() {
    const weatherStore = useWeatherData();

    return (
        <div id="weekForecast">
            {weatherStore.weatherData !== null ? (
                weatherStore.weatherData?.forecast.forecastday.map((day, idx) => {
                    console.log(day.date);
                    return <DayForecast key={'forecast ' + idx} date={day.date} day={new Date(day.date).toLocaleDateString('en-US', { weekday: "long" })} weather={day.day.condition.text} humidity={day.day.avghumidity} />
                })
            ) : (
                <div>no data</div>
            )}
        </div>
    )
}