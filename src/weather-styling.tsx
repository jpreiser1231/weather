import type {Weather} from "./hooks.tsx"

    const Card = ({weather, location}: {weather:Weather, location:string}) => {
        const options: {hour:"numeric", minute:"numeric"} = {

            hour: 'numeric',
            minute: 'numeric'
        };
        return (
            <div className="group relative w-375" >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-sky-500 to-indigo-500 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-sky-500/25">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M20%2016.2A4.5%204.5%200%200017.5%208h-1.8A7%207%200%104%2014.9%22%2F%3E%3Cpath%20d%3D%22M12%2012v9%22%2F%3E%3Cpath%20d%3D%22M8%2017l4%204%22%2F%3E%3Cpath%20d%3D%22M16%2017l-4%204%22%2F%3E%3C%2Fsvg%3E')] bg-center opacity-5" />
                    <div className="relative p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-white">{location.substring(0, location.indexOf(","))}</h3>
                                <p className="text-sm text-white/80">{location.substring(location.indexOf(", ") + 1)}</p>
                            </div>
                            <span
                                className="text-sm text-white/80">{new Date(weather.current.time).toLocaleString("en-US", options)}</span>
                        </div>
                        <div className="mt-8 flex items-center justify-between">
                            <div className="flex items-start">
                                <span className="text-6xl font-bold text-white">{weather.current.temperature_2m}</span>
                                <span className="mt-1 text-2xl text-white/80">°F</span>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 rounded-full bg-white/20 blur-xl transition-opacity duration-300 group-hover:opacity-75"/>
                                {
                                    weather.current.is_day ?
                                        <svg className="relative h-16 w-16 text-white" viewBox="0 0 24 24"
                                             fill="currentColor">
                                            <path
                                                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                                        </svg>
                                        :
                                        <svg width="100" height="100" viewBox="0 0 100 100"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M50 20A40 40 0 1 0 50 70 30 30 0 1 1 50 20z" stroke="black"
                                                  stroke-width="2" fill="yellow"/>
                                        </svg>
                                }

                            </div>
                        </div>
                        <div className="mt-1 text-2xl text-white/80">
                        Feels Like {weather.current.apparent_temperature} °F
                        </div>
                        <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                            <div className="flex flex-col items-center gap-1">
                                <svg className="h-6 w-6 text-white/80" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                                </svg>
                                <span className="text-sm font-medium text-white">Humidity</span>
                                <span
                                    className="text-lg font-semibold text-white">{weather.current.relative_humidity_2m}%</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <svg className="h-6 w-6 text-white/80" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
                                </svg>
                                <span className="text-sm font-medium text-white">Wind</span>
                                <span
                                    className="text-lg font-semibold text-white">{weather.current.wind_speed_10m}mph</span>
                                <span
                                    className="text-lg font-semibold text-white">gusts at {weather.current.wind_gusts_10m}mph</span>

                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <svg className="h-6 w-6 text-white/80" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                                </svg>
                                <span className="text-sm font-medium text-white">Precipitation</span>
                                <span
                                    className="text-lg font-semibold text-white">{weather.current.precipitation} inches</span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h4 className="mb-4 text-sm font-medium text-white/80">Hourly Forecast</h4>
                            {
                                    <div >
                                        {weather.hourly.time.map((_item, index) =>
                                            <div key = {index}>
                                                <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm" id = "hourly-item">
                                                    <div>
                                                        <span className="text-sm font-medium text-white">{weather.hourly.time[index].substring(0, weather.hourly.time[index].indexOf("T"))} {new Date(weather.hourly.time[index]).toLocaleString("en-US", options)}</span>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <div className="item-center flex gap-4">
                                                            <span className="text-sm text-white/80">
                                                                {weather.hourly.temperature_2m[index]} °F
                                                                Feels Like {weather.hourly.apparent_temperature[index]} °F
                                                            </span>
                                                            <span className="text-sm text-white/80">
                                                                Precipitation: {weather.hourly.precipitation_probability[index]}%
                                                                 {weather.hourly.precipitation[index]} inches
                                                            </span>
                                                            <span className="text-sm text-white/80">
                                                                Wind Speed: {weather.hourly.wind_speed_10m[index]}mph
                                                                Wind Direction: {weather.hourly.wind_direction_10m[index]} degrees
                                                                Gusts At: {weather.hourly.wind_gusts_10m[index]}mph
                                                            </span>
                                                            <span className="text-sm text-white/80">
                                                                Wind Speed: {weather.hourly.wind_speed_10m[index]}mph
                                                                Wind Direction: {weather.hourly.wind_direction_10m[index]} degrees
                                                                Gusts At: {weather.hourly.wind_gusts_10m[index]}mph
                                                            </span>
                                                            <span className="text-sm text-white/80">
                                                                Humidity: {weather.hourly.relative_humidity_2m[index]}
                                                                Visibility: {weather.hourly.visibility[index]}
                                                            </span>
                                                            <span className="text-sm text-white/80">
                                                                UV Index: {weather.hourly.uv_index[index]}
                                                            </span>
                                                            {
                                                                weather.hourly.is_day[index] ?
                                                                    <svg className="relative h-16 w-16 text-white" viewBox="0 0 24 24"
                                                                         fill="currentColor">
                                                                        <path
                                                                            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                                                                    </svg>
                                                                    :
                                                                    <svg width="100" height="100" viewBox="0 0 100 100"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M50 20A40 40 0 1 0 50 70 30 30 0 1 1 50 20z" stroke="black"
                                                                              stroke-width="2" fill="yellow"/>
                                                                    </svg>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>)}
                                    </div>
                            }

                        </div>
                        <div className="mt-8">
                            <h4 className="mb-4 text-sm font-medium text-white/80">7-Day Forecast</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                                        <div>
                                            <span className="text-sm font-medium text-white">Tomorrow</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="item-center flex gap-4">
                                            <span className="text-sm text-white/80">
                                                Max Wind Speed: {weather.daily.wind_speed_10m_max[0]}mph
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Sunrise: {new Date(weather.daily.sunrise[0]).toLocaleString("en-US", options)}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                    Sunset: {new Date(weather.daily.sunrise[0]).toLocaleString("en-US", options)}
                                                </span>
                                                <span className="text-sm text-white/80">
                                                UV Index: {weather.daily.uv_index_max[0]}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Precipitation: {weather.daily.precipitation_probability_max[0]}% {weather.daily.precipitation_sum[0]} inches for {weather.daily.precipitation_hours[0]} hours
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Min Feels Like: {weather.daily.apparent_temperature_min[0]} °F
                                                Max Feels Like: {weather.daily.apparent_temperature_max[0]} °F
                                            </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24"
                                                 fill="currentColor">
                                                <path fillRule="evenodd"
                                                      d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                            <div className="flex gap-2">
                                            <span
                                                className="text-sm font-semibold text-white">{weather.daily.temperature_2m_min[0]}</span>
                                                <span
                                                    className="text-sm text-white/80">{weather.daily.temperature_2m_max[0]}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                                        <span className="text-sm font-medium text-white">{weather.daily.time[1]}</span>
                                        <div className="flex items-center gap-4">
                                            <div className="item-center flex gap-4">
                                            <span className="text-sm text-white/80">
                                                Max Wind Speed: {weather.daily.wind_speed_10m_max[1]}mph
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Sunrise: {new Date(weather.daily.sunrise[1]).toLocaleString("en-US", options)}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                    Sunset: {new Date(weather.daily.sunrise[1]).toLocaleString("en-US", options)}
                                                </span>
                                                <span className="text-sm text-white/80">
                                                UV Index: {weather.daily.uv_index_max[1]}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Precipitation: {weather.daily.precipitation_probability_max[1]}% {weather.daily.precipitation_sum[1]} inches for {weather.daily.precipitation_hours[1]} hours
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Min Feels Like: {weather.daily.apparent_temperature_min[1]} °F
                                                Max Feels Like: {weather.daily.apparent_temperature_max[1]} °F
                                            </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                                            </svg>
                                            <div className="flex gap-2">
                                            <span
                                                className="text-sm font-semibold text-white">{weather.daily.temperature_2m_min[1]}</span>
                                                <span
                                                    className="text-sm text-white/80">{weather.daily.temperature_2m_max[1]}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                                        <span className="text-sm font-medium text-white">{weather.daily.time[2]}</span>
                                        <div className="flex items-center gap-4">
                                            <div className="item-center flex gap-4">
                                            <span className="text-sm text-white/80">
                                                Max Wind Speed: {weather.daily.wind_speed_10m_max[2]}mph
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Sunrise: {new Date(weather.daily.sunrise[2]).toLocaleString("en-US", options)}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                    Sunset: {new Date(weather.daily.sunrise[2]).toLocaleString("en-US", options)}
                                                </span>
                                                <span className="text-sm text-white/80">
                                                UV Index: {weather.daily.uv_index_max[2]}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Precipitation: {weather.daily.precipitation_probability_max[2]}% {weather.daily.precipitation_sum[2]} inches for {weather.daily.precipitation_hours[2]} hours
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Min Feels Like: {weather.daily.apparent_temperature_min[2]} °F
                                                Max Feels Like: {weather.daily.apparent_temperature_max[2]} °F
                                            </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                                            </svg>
                                            <div className="flex gap-2">
                                            <span
                                                className="text-sm font-semibold text-white">{weather.daily.temperature_2m_min[2]}</span>
                                                <span
                                                    className="text-sm text-white/80">{weather.daily.temperature_2m_max[2]}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                                        <span className="text-sm font-medium text-white">{weather.daily.time[3]}</span>
                                        <div className="flex items-center gap-4">
                                            <div className="item-center flex gap-4">
                                            <span className="text-sm text-white/80">
                                                Max Wind Speed: {weather.daily.wind_speed_10m_max[3]}mph
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Sunrise: {new Date(weather.daily.sunrise[3]).toLocaleString("en-US", options)}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                    Sunset: {new Date(weather.daily.sunrise[3]).toLocaleString("en-US", options)}
                                                </span>
                                                <span className="text-sm text-white/80">
                                                UV Index: {weather.daily.uv_index_max[3]}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Precipitation: {weather.daily.precipitation_probability_max[3]}% {weather.daily.precipitation_sum[3]} inches for {weather.daily.precipitation_hours[3]} hours
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Min Feels Like: {weather.daily.apparent_temperature_min[3]} °F
                                                Max Feels Like: {weather.daily.apparent_temperature_max[3]} °F
                                            </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                                            </svg>
                                            <div className="flex gap-2">
                                            <span
                                                className="text-sm font-semibold text-white">{weather.daily.temperature_2m_min[3]}</span>
                                                <span
                                                    className="text-sm text-white/80">{weather.daily.temperature_2m_max[3]}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                                        <span className="text-sm font-medium text-white">{weather.daily.time[4]}</span>
                                        <div className="flex items-center gap-4">
                                            <div className="item-center flex gap-4">
                                            <span className="text-sm text-white/80">
                                                Max Wind Speed: {weather.daily.wind_speed_10m_max[4]}mph
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Sunrise: {new Date(weather.daily.sunrise[4]).toLocaleString("en-US", options)}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                    Sunset: {new Date(weather.daily.sunrise[4]).toLocaleString("en-US", options)}
                                                </span>
                                                <span className="text-sm text-white/80">
                                                UV Index: {weather.daily.uv_index_max[4]}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Precipitation: {weather.daily.precipitation_probability_max[4]}% {weather.daily.precipitation_sum[4]} inches for {weather.daily.precipitation_hours[4]} hours
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Min Feels Like: {weather.daily.apparent_temperature_min[4]} °F
                                                Max Feels Like: {weather.daily.apparent_temperature_max[4]} °F
                                            </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                                            </svg>
                                            <div className="flex gap-2">
                                            <span
                                                className="text-sm font-semibold text-white">{weather.daily.temperature_2m_min[4]}</span>
                                                <span
                                                    className="text-sm text-white/80">{weather.daily.temperature_2m_max[4]}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                                        <span className="text-sm font-medium text-white">{weather.daily.time[5]}</span>
                                        <div className="flex items-center gap-4">
                                            <div className="item-center flex gap-4">
                                            <span className="text-sm text-white/80">
                                                Max Wind Speed: {weather.daily.wind_speed_10m_max[5]}mph
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Sunrise: {new Date(weather.daily.sunrise[5]).toLocaleString("en-US", options)}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                    Sunset: {new Date(weather.daily.sunrise[5]).toLocaleString("en-US", options)}
                                                </span>
                                                <span className="text-sm text-white/80">
                                                UV Index: {weather.daily.uv_index_max[5]}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Precipitation: {weather.daily.precipitation_probability_max[5]}% {weather.daily.precipitation_sum[5]} inches for {weather.daily.precipitation_hours[5]} hours
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Min Feels Like: {weather.daily.apparent_temperature_min[5]} °F
                                                Max Feels Like: {weather.daily.apparent_temperature_max[5]} °F
                                            </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                                            </svg>
                                            <div className="flex gap-2">
                                            <span
                                                className="text-sm font-semibold text-white">{weather.daily.temperature_2m_min[5]}</span>
                                                <span
                                                    className="text-sm text-white/80">{weather.daily.temperature_2m_max[5]}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                                        <span className="text-sm font-medium text-white">{weather.daily.time[6]}</span>
                                        <div className="flex items-center gap-4">
                                            <div className="item-center flex gap-4">
                                            <span className="text-sm text-white/80">
                                                Max Wind Speed: {weather.daily.wind_speed_10m_max[6]}mph
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Sunrise: {new Date(weather.daily.sunrise[6]).toLocaleString("en-US", options)}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                    Sunset: {new Date(weather.daily.sunrise[6]).toLocaleString("en-US", options)}
                                                </span>
                                                <span className="text-sm text-white/80">
                                                UV Index: {weather.daily.uv_index_max[6]}
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Precipitation: {weather.daily.precipitation_probability_max[6]}% {weather.daily.precipitation_sum[6]} inches for {weather.daily.precipitation_hours[6]} hours
                                            </span>
                                                <span className="text-sm text-white/80">
                                                Min Feels Like: {weather.daily.apparent_temperature_min[6]} °F
                                                Max Feels Like: {weather.daily.apparent_temperature_max[6]} °F
                                            </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                                            </svg>
                                            <div className="flex gap-2">
                                            <span
                                                className="text-sm font-semibold text-white">{weather.daily.temperature_2m_min[6]}</span>
                                                <span
                                                    className="text-sm text-white/80">{weather.daily.temperature_2m_max[6]}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
                }

                export default Card;


