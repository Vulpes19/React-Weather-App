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
    possible_rain: number;
    condition: Condition
}

interface DayForecast {
    daily_chance_of_rain: number,
    icon: WEATHER,
    avgtemp_c: number,
    avgtemp_f: number,
    avgvis_km: number,
    avgvis_miles: number,
    avghumidity: number,
    maxtemp_c: number,
    maxtemp_f: number,
    mintemp_c: number,
    mintemp_f: number,
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
    selectedDate: Date | null;

    setWeather: (weather: WeatherData) => void,
    setDay: (day: Date) => void,
}

export const useWeatherData = create<WeatherStore>((set, get) => ({
    weatherData: null,
    dayData: null,
    selectedDate: null,

    setWeather(weather) {
        set({ weatherData: weather });
        this.setDay(weather.forecast.forecastday[0].date);
    },
    setDay(day) {
        const week = get().weatherData?.forecast.forecastday;
        if (week) {
            for (let i = 0; i < week?.length; i++) {
                if (week[i].date === day)
                {
                    set({ selectedDate: week[i].date });
                    set({
                        dayData: {
                            date: week[i].date,
                            temp_c: week[i].day.avgtemp_c,
                            temp_f: week[i].day.avgtemp_f,
                            wind_kph: week[i].day.avgvis_km,
                            wind_mph: week[i].day.avgvis_miles,
                            humidity: week[i].day.avghumidity,
                            is_day: true,
                            uv: week[i].day.uv,
                            possible_rain: week[i].day.daily_chance_of_rain,
                            condition: week[i].day.condition
                        }
                    });
                }
            }
        }
    },
}))