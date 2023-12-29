import create from 'zustand';
import { WEATHER } from '../components/DayForecast';

interface Condition {
    text: string;
    icon: string
};
interface WeatherDay {
    date: Date;
    temp_c: number;
    temp_f: number;
    wind_kph: number;
    wind_mph: number;
    humidity: number;
    is_day: boolean;
    uv: number;
    condition: Condition
}

interface DayForecast {
    avgtemp_c: number,
    avgtemp_f: number,
    avgis_km: number,
    avgis_miles: number,
    avghumidity: number,
    is_day: boolean,
    uv: number
    condition: Condition,
}
interface ForecastDay {
    date: Date;
    day: DayForecast
}

interface Forecast {
    forecastday: ForecastDay[]
}
interface Location {
    name: string;
    country: string
}
export interface WeatherData {
    current: WeatherDay;
    forecast: Forecast;
    location: Location;
};

interface WeatherStore {
    weatherData: WeatherData | null;
    dayData: WeatherDay | null;

    setWeather: (weather: WeatherData) => void,
    setDay: (day: Date) => void,
}

export const useWeatherData = create<WeatherStore>((set, get) => ({
    weatherData: null,
    dayData: null,

    setWeather(weather) {
        set({ weatherData: weather });
        set({ dayData: weather.current })
    },
    setDay(day) {
        const week = get().weatherData?.forecast.forecastday;
        if (week) {
            for (let i = 0; i < week?.length; i++) {
                if (week[i].date === day)
                    set({
                        dayData: {
                            date: week[i].date,
                            temp_c: week[i].day.avgtemp_c,
                            temp_f: week[i].day.avgtemp_f,
                            wind_kph: week[i].day.avgis_km,
                            wind_mph: week[i].day.avgis_miles,
                            humidity: week[i].day.avghumidity,
                            is_day: true,
                            uv: week[i].day.uv,
                            condition: week[i].day.condition
                        }
                    })
            }
        }
    },
}))