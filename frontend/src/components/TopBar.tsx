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

export const useWeatherData = (searchQuery: string, searchButton: boolean) => {
  return useQuery(['weather', searchQuery], () => fetchWeatherData(searchQuery), {
    enabled: searchButton
  });
};

export default function TopBar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchButton, setSearchButton] = useState<boolean>(true);
  const [data, setData] = useState<WeatherData | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  // const { data, isLoading, isError } = useWeatherData('', searchButton);

  // setSearchButton(false)
  useEffect(() => {
    if (searchButton && searchQuery === '') {
      axios.get("http://localhost:3000/", {
        params: {
          city: searchQuery === "" ? "London" : searchQuery,
        },
      }).then((response) => {
        setData(response.data);
        setLoading(false);
      }).catch((error) => {
        setError(error);
      });
      setSearchButton(false);
    }
  }, [searchButton])

  const handleSearch = () => {
    setSearchButton(true);
  };

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
}
