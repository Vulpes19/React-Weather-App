import { useMemo } from "react";
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
    weather: string,
    humidity: number
};

export default function DayForecast({day, weather, humidity}: DayProps) {

    return (
        <button id="DayForecast">
            <h3>{day}</h3>
            {weather === 'Sunny' && <TiWeatherSunny style={{fontSize: '80px'}} />}
            {weather === 'Cloudy' && <TiWeatherCloudy style={{fontSize: '80px'}} />}
            {weather === 'Rainy' && <TiWeatherDownpour style={{fontSize: '80px'}} />}
            <h3>{humidity}%</h3>
        </button>
    )
};