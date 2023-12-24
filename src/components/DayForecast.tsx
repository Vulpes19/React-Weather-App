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
            <p>{weather}</p>
            <h3>{humidity}%</h3>
        </div>
    )
};