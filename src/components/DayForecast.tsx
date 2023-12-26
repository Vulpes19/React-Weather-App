import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";

export enum WEATHER {
    SUNNY,
    CLOUDY,
    RAINY
};

interface DayProps {
    day: string,
    weather: WEATHER,
    humidity: number
};

export default function DayForecast({day, weather, humidity}: DayProps) {
    return (
        <div id="DayForecast">
            <h3>{day}</h3>
            {weather === WEATHER.SUNNY && <TiWeatherSunny style={{fontSize: '80px'}} />}
            {weather === WEATHER.CLOUDY && <TiWeatherCloudy style={{fontSize: '80px'}} />}
            {weather === WEATHER.RAINY && <TiWeatherDownpour style={{fontSize: '80px'}} />}
            <h3>{humidity}%</h3>
        </div>
    )
};