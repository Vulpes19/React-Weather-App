// import { useMemo } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
// import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherSnow } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherShower } from "react-icons/ti";
import { useWeatherData } from "../stores/weatherStore";
import { getWeatherIcon } from "../tools/weatherIcon";
import { useMemo } from "react";

export enum WEATHER {
    NONE,
    SUNNY,
    CLOUDY,
    PARTLY_CLOUDY,
    RAINY,
    SHOWER,
    STORM,
    SNOWY
};

interface DayProps {
    date: Date,
    day: string,
    weather: string,
    humidity: number
};

export default function DayForecast({ date, day, weather, humidity }: DayProps) {

    const weatherData = useWeatherData();
    const handleDayChange = () => {
        weatherData.setDay(date);
    }

    const buttonColor = useMemo(() => {
        return {backgroundColor: weatherData.selectedDate === date ? '#3179E2' : 'white',
    color: weatherData.selectedDate === date ? 'white' : 'black'};
    }, [weatherData.selectedDate]);
    let weatherIcon: WEATHER = getWeatherIcon(weather);
    return (
        <button style={buttonColor} id="DayForecast" onClick={handleDayChange}>
            <h3>{day}</h3>
            {weatherIcon === WEATHER.SUNNY && <TiWeatherSunny style={{ fontSize: '80px' }} />}
            {weatherIcon === WEATHER.CLOUDY &&  <TiWeatherCloudy style={{ fontSize: '80px' }} />}
            {weatherIcon === WEATHER.RAINY && <TiWeatherDownpour style={{ fontSize: '80px' }} />}
            {weatherIcon === WEATHER.SHOWER && <TiWeatherShower style={{ fontSize: '80px' }} />}
            {weatherIcon === WEATHER.SNOWY && <TiWeatherSnow style={{ fontSize: '80px' }} />}
            <h3>{humidity}%</h3>
        </button>
    )
};