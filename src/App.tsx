import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [searchedValue, search] = useState("Freehold")
    useEffect(() => {
        fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${"cuppertino"}&type=city&limit=10&filter=countrycode%3Aus&format=json&apiKey=b8568cb9afc64fad861a69edbddb2658`)
            .then((response) => response.json())
            .then((data) => {
                console.log("autO", data);
            })
            .catch((error) => console.log(error));
    },);
    useEffect(() => {
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${"Cupertino,%20CA"},%20United%20States%20of%20America&lang=en&limit=1&type=city&filter=countrycode:us&format=json&apiKey=b8568cb9afc64fad861a69edbddb2658`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Search", data);
            })
            .catch((error) => console.log(error));
    },);
    useEffect(() => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${37.3228934}&longitude=${-122.0322895}&daily=weather_code,temperature_2m_min,temperature_2m_max,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,precipitation_probability_max,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,wind_gusts_10m_max&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,weather_code,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,uv_index,is_day&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,weather_code&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`)
            .then((response) => response.json())
            .then((data) => {
                console.log("weather", data);
            })
            .catch((error) => console.log(error));
    },);
  return (
    <>

    </>
  )
}

export default App
