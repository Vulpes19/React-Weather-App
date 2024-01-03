import "../style/TopBar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { WeatherData, useWeatherData } from "../stores/weatherStore";
import { FaSearch } from "react-icons/fa";

export default function TopBar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchButton, setSearchButton] = useState<boolean>(true);
  const [data, setData] = useState<WeatherData | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const weatherData = useWeatherData();

  useEffect(() => {
    if (searchButton) {
      axios.get("http://localhost:3000/", {
        params: {
          city: searchQuery === "" ? "London" : searchQuery,
        },
      }).then((response) => {
        setData(response.data);
        weatherData.setWeather(response.data);
        console.log({ day: weatherData.dayData });
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setError(true);
      });
      setSearchButton(false);
    }
  }, [searchButton])

  const handleSearch = () => {
    setSearchButton(true);
    setLoading(true);
  };

  // useEffect( () => {
  //   const handleKeyDown = (event) => {
  //     if (event.key == 'Enter')
  //       handleSearch();
  //   }
  //   addEventListener('keydown', handleKeyDown);
  //   return () => removeEventListener('keydown', handleKeyDown);
  // }, []);

  if (isLoading) {
    return (
      <nav id="topBar">
        <h3>loading...</h3>
      </nav>
    )
  }
  else if (isError) {
    return (
      <nav id="topBar">
        <h3>error</h3>
      </nav>
    )
  }
  else {
    console.log(data)
    return (
      <nav id="topBar">
        <div id="inputSearch">
          <input
            type="search"
            id="searchBar"
            placeholder="city name"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            value={searchQuery}
          />
          {/* <button id="searchButton" onClick={handleSearch}><FaSearch style={{ color: 'black', fontSize: '20px' }} /></button> */}
        </div>
        <h1 id="logoText">Weather View</h1>
      </nav>
    );
  }
}
