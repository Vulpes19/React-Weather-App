import create from 'zustand';
import { WEATHER } from '../components/DayForecast';

interface WeatherDay {
    city: string,
    day: string,
    weather: WEATHER,
    humidty: number,
    windSpeed: number
};

interface WeatherStore {
    weather: WeatherDay | null,
    week: WeatherDay[] | null,

    setWeather: (weather: WeatherDay[]) => void,
    setDay: (day: string) => void,
}

const useWeatherDay = create<WeatherStore>((set, get) => ({
   weather: null,
   week: null,

   setWeather(weather) {
       set({weather: weather[0]});
       set({week: weather});
   },
   setDay(day) {
    const week = get().week;
    if (week)
    {
        for (let i = 0; i < week?.length; i++) {
            if (week[i].day === day)
                set({weather: week[i]});
        }
    }
},
}))