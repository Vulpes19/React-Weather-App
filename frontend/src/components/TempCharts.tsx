import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Line } from 'react-chartjs-2';
import { useWeatherData } from '../stores/weatherStore';
import { useMemo } from 'react';

export default function TempCharts() {
    const weatherData = useWeatherData();
    useMemo(() => {
        ChartJS.register(
            Title,
            Legend,
            PointElement,
            LineElement,
            Tooltip,
            CategoryScale,
            LinearScale
        );
    }, []);

    const options = {
        maintainAspectRatio: false,
        // responsive: true,
        scales: {
            y: {
                gridLines: {
                    display: false
                },
                beginAtZero: false,
                min: -40,
                max: 50
            }
        },
        plugins: {
            legend: {
            },
            title: {
                display: true,
                text: 'Temperature chart'
            }
        }
    }
    const data = {
        labels: weatherData.weatherData?.forecast.forecastday.map((day) => new Date(day.date).toLocaleDateString('en-US', { weekday: "long" })),
        datasets:
        [ 
            {
                label: 'Max temp',
                data: weatherData.weatherData?.forecast.forecastday.map((day) => day.day.maxtemp_c),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Min temp',
                data: weatherData.weatherData?.forecast.forecastday.map((day) => day.day.mintemp_c),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }
    return (
        <div id="tempChart">
            {/* <div id="charts">charts</div> */}
            <Line options={options} data={data} />
        </div>
    )
}