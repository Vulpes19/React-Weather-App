import { useQuery } from "react-query";
import "../style/TopBar.css";
import axios from "axios";
import { useEffect, useState } from "react";

interface WeatherData {
  city: string;
  temp: number;
}

export const fetchWeatherData = async (searchQuery: string) => {
  const res = await axios.get("http://localhost:3000/", {
    params: {
      city: searchQuery === "" ? "London" : searchQuery,
    },
  });
  return res;
};

export const useWeatherData = (searchQuery: string) => {
    console.log(searchQuery)
  return fetchWeatherData(searchQuery);
};

export default function TopBar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const handleSearch = () => {
    const res = useWeatherData(searchQuery);
  };

  return (
    <nav id="topBar">
      <input
        id="searchBar"
        placeholder="city name"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
      />
      <button onClick={handleSearch}>search</button>
      <h1 id="logoText">Weather View</h1>
    </nav>
  );
}
