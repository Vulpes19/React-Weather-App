import { TiWeatherCloudy } from "react-icons/ti";
import '../style/TodayWeather.css'
import { useWeatherData } from "../stores/weatherStore";
import { useCallback } from "react";

export default function TodayWeather() {
    const weatherData = useWeatherData();

    const getFullDate = useCallback(() => {
        if (weatherData.dayData)
            const day = new Date(weatherData.dayData.date).toLocaleDateString('en-US', {weekday: "long"});
    }, [weatherData.dayData?.date])
    return (
        <div id="TodayWeather">
            <div id="todayWeatherTop">
                <h1>{weatherData.weatherData?.location.name}</h1>
                <h3>Sun. 24 Dec 2023</h3>
            </div>
            <div id="temperature">
                <TiWeatherCloudy id="weatherIcon" style={{color: 'black', fontSize: '200px'}}/>
                {/* <div id="weatherIcon">Icon</div> */}
                <h2 id="weatherTemperature">{weatherData.dayData?.temp_c}°</h2>
            </div>
            <div id="weatherDetails">
                <div>
                    <h3>Humidity</h3>
                    <p>{weatherData.dayData?.humidity}%</p>
                </div>
                <div>
                    <h3>Wind speed</h3>
                    <p>{weatherData.dayData?.wind_kph}</p>
                </div>
            </div>
        </div>
    )
};