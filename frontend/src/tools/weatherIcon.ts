import { WEATHER } from "../components/DayForecast";

export const getWeatherIcon = (weather: string | undefined) => {
    if (!weather)
        return WEATHER.NONE;
    if (weather.toLocaleLowerCase().includes('sunny'))
        return WEATHER.SUNNY;
    else if (weather.toLocaleLowerCase().includes('overcast') ||
        weather.toLocaleLowerCase().includes('cloudy'))
        return WEATHER.CLOUDY;
    else if (weather === 'Moderate rain' || weather === 'Heavy rain')
        return WEATHER.RAINY;
    else if (weather.toLocaleLowerCase().includes('patchy') ||
        weather.toLocaleLowerCase().includes('shower') ||
        weather.toLocaleLowerCase().includes('light'))
        return WEATHER.SHOWER;
    else if (weather.toLocaleLowerCase().includes('snow'))
        return WEATHER.SNOWY;
    return WEATHER.NONE;
}