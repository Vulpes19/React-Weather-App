import { TiWeatherCloudy } from "react-icons/ti";
import '../style/TodayWeather.css'
import { useWeatherData } from "../stores/weatherStore";
import { getWeatherIcon } from "../tools/weatherIcon";
import { WEATHER } from "./DayForecast";
import { TiWeatherDownpour } from "react-icons/ti";
// import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherSnow } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherShower } from "react-icons/ti";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function TodayWeather() {
    const weatherData = useWeatherData();

    const getFullDate = () => {
        let day = 'invalid date';
        if (weatherData.dayData)
            day = new Date(weatherData.dayData?.date).toLocaleDateString('en-US', {weekday: "long", year: "numeric", month: "long", day: "numeric"});
        return (day);
    };
    let weatherIcon: WEATHER = getWeatherIcon(weatherData.dayData?.condition.text);
    return (
        <div id="TodayWeather">
            <ToastContainer/>
            <div id="todayWeatherTop">
                <h1>{weatherData.weatherData?.location.name}</h1>
                <h2>{weatherData.weatherData?.location.country}</h2>
                <h3>{getFullDate()}</h3>
            </div>
            <div id="temperature">
                {weatherIcon === WEATHER.SUNNY && <TiWeatherSunny style={{color: 'black', fontSize: '200px'}} />}
                {weatherIcon === WEATHER.CLOUDY &&  <TiWeatherCloudy style={{color: 'black', fontSize: '200px'}} />}
                {weatherIcon === WEATHER.RAINY && <TiWeatherDownpour style={{color: 'black', fontSize: '200px'}} />}
                {weatherIcon === WEATHER.SHOWER && <TiWeatherShower style={{color: 'black', fontSize: '200px'}} />}
                {weatherIcon === WEATHER.SNOWY && <TiWeatherSnow style={{color: 'black', fontSize: '200px'}} />}
                {/* <div id="weatherIcon">Icon</div> */}
                <h2 id="weatherTemperature">{weatherData.dayData?.temp_c}°</h2>
            </div>
            <div id="weatherDetails">
                <div>
                    <h3>Humidity</h3><p>{weatherData.dayData?.humidity}%</p>
                    <h3>Possible rain</h3><p>{weatherData.dayData?.possible_rain}%</p>
                </div>
                <div>
                    <h3>Wind speed</h3><p>{weatherData.dayData?.wind_kph}</p>
                    <h3>uv</h3><p>{weatherData.dayData?.uv}</p>
                </div>
            </div>
        </div>
    )
};