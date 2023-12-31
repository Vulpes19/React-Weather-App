// import { useMemo } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
// import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { useWeatherData } from "../stores/weatherStore";
import { TiWeatherShower } from "react-icons/ti";

enum WEATHER {
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

export default function DayForecast({date, day, weather, humidity}: DayProps) {

    const weatherData = useWeatherData();
    const handleDayChange = () => {
        weatherData.setDay(date);
    }
    let weatherIcon: WEATHER = WEATHER.NONE;

    const getWeatherIcon = () => {
        if (weather.toLocaleLowerCase().includes('sunny'))
            weatherIcon = WEATHER.SUNNY;
        else if (weather.toLocaleLowerCase().includes('overcast') || 
                    weather.toLocaleLowerCase().includes('cloudy'))
            weatherIcon = WEATHER.CLOUDY;
        else if (weather === 'Moderate rain' || weather === 'Heavy rain')
            weatherIcon = WEATHER.RAINY;
        else if (weather.toLocaleLowerCase().includes('patchy') || 
            weather.toLocaleLowerCase().includes('shower') || 
            weather.toLocaleLowerCase().includes('light'))
            weatherIcon = WEATHER.SHOWER;
    }
    return (
        <button id="DayForecast" onClick={handleDayChange}>
            <h3>{day}</h3>
            {weatherIcon === WEATHER.SUNNY && <TiWeatherSunny style={{fontSize: '80px'}} />}
            {(weather.toLocaleLowerCase().includes('overcast') ||
             weather.toLocaleLowerCase().includes('cloudy')) && <TiWeatherCloudy style={{fontSize: '80px'}} />}
            {(weather === 'Moderate rain' || 
             weather === '') && <TiWeatherDownpour style={{fontSize: '80px'}} />}
            {(weather.toLocaleLowerCase().includes('patchy') || 
             weather.toLocaleLowerCase().includes('shower') || 
             weather.toLocaleLowerCase().includes('light') ) && <TiWeatherShower style={{fontSize: '80px'}} />}
            <h3>{humidity}%</h3>
        </button>
    )
};