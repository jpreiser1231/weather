import type {Weather} from "./hooks.tsx"
import {useEffect, useState} from "react";

export function Weather({weather}: {weather: Weather})
{
    const [realWeather, updateIt] = useState<Weather>(weather)
    useEffect(() =>
        {updateIt(weather)}, [weather])
    return(
        <>
            <ul id = "currentWeather">
                <li> Current Temp:{realWeather.current.temperature_2m}</li>
                <li> Current Time: {realWeather.current.time};</li>
                <li> Current Humidity: {realWeather.current.relative_humidity_2m};</li>
                <li> Current Feels Like: {realWeather.current.apparent_temperature};</li>
                <li> Current Is Day?: {realWeather.current.is_day};</li>
                <li> Current Wind Speed: {realWeather.current.wind_speed_10m};</li>
                <li> Current Wind Direction: {realWeather.current.wind_direction_10m};</li>
                <li> Current Wind Gusts: {realWeather.current.wind_gusts_10m}; </li>
                <li> Current Precipitation: {realWeather.current.precipitation};</li>
                <li> Current Weather Code: {realWeather.current.weather_code};</li>
            </ul>
            {
                realWeather.hourly.time.map((_item, index) =>
                    <div key={index}>
                        {realWeather.hourly.time[index]},
                        {realWeather.hourly.temperature_2m[index]},
                        {realWeather.hourly.relative_humidity_2m[index]},
                        {realWeather.hourly.apparent_temperature[index]},
                        {realWeather.hourly.precipitation_probability[index]},
                        {realWeather.hourly.weather_code[index]},
                        {realWeather.hourly.visibility[index]},
                        {realWeather.hourly.wind_speed_10m[index]},
                        {realWeather.hourly.wind_direction_10m[index]},
                        {realWeather.hourly.wind_gusts_10m[index]},
                        {realWeather.hourly.precipitation[index]},
                        {realWeather.hourly.uv_index[index]},
                        {realWeather.hourly.is_day[index]}
                        {realWeather.hourly.dew_point_2m[index]}
                    </div>)
            }
            DAILY
            {
                realWeather.daily.time.map((_item, index) =>
                <div key={index}>
                    {realWeather.daily.time[index]},
                    {realWeather.daily.weather_code[index]},
                    {realWeather.daily.temperature_2m_min[index]},
                    {realWeather.daily.temperature_2m_max[index]},
                    {realWeather.daily.sunrise[index]},
                    {realWeather.daily.sunset[index]},
                    {realWeather.daily.uv_index_max[index]},
                    {realWeather.daily.precipitation_sum[index]},
                    {realWeather.daily.precipitation_hours[index]},
                    {realWeather.daily.precipitation_probability_max[index]},
                    {realWeather.daily.apparent_temperature_max[index]},
                    {realWeather.daily.apparent_temperature_min[index]},
                    {realWeather.daily.wind_speed_10m_max[index]},
                    {realWeather.daily.wind_gusts_10m_max[index]},
                </div>)
            }
            </>
    )
}