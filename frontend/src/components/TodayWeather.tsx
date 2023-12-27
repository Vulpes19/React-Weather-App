import { TiWeatherCloudy } from "react-icons/ti";

export default function TodayWeather() {
    return (
        <div id="TodayWeather">
            <div id="todayWeatherTop">
                <h1>Casablanca</h1>
                <h3>Sun. 24 Dec 2023</h3>
            </div>
            <div id="temperature">
                <TiWeatherCloudy id="weatherIcon" style={{color: 'black', fontSize: '200px'}}/>
                {/* <div id="weatherIcon">Icon</div> */}
                <h2 id="weatherTemperature">17°</h2>
            </div>
            <div id="weatherDetails">
                <div>
                    <h3>Humidity</h3>
                    <p>30%</p>
                </div>
                <div>
                    <h3>Wind speed</h3>
                    <p>17 km/h</p>
                </div>
            </div>
        </div>
    )
};