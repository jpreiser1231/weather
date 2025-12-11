import {useEffect, useState} from 'react'
import {useAutocomplete, useCoordinates, useWeather} from './hooks.tsx'

import './App.css'
import {Weather} from "./weather.tsx";

function App() {
    const [searchedValue, setSearchValue] = useState<string>("Freehold");
    const autoComplete = useAutocomplete(searchedValue);
    const [finalSearchedValue, setFinalSearchedValue] = useState<string>("Freehold, NJ");
    const [lat,lon] = useCoordinates(finalSearchedValue);
    const weather = useWeather(lat,lon);

  return (
      <>
          <input value={searchedValue} placeholder="Enter search here"
                 onChange={e => setSearchValue(e.target.value)}
          />
          <button onClick = {() => setFinalSearchedValue(searchedValue)}>Search</button>
          {
              autoComplete.map((item, index) =>
                  <div key = {index}>
                      <div id = "autoCompleteResults"><button onClick={() => {
                          setFinalSearchedValue(`${item.formatted}`);
                          setSearchValue(`${item.formatted}`);
                      }}>{item.formatted}</button></div>
                  </div>)
          }
          {lat}, {lon}
          {
              weather && <Weather weather = {weather}/>
          }
      </>
  )
}

export default App
