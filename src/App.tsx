import {useState} from 'react'
import {useAutocomplete, useCoordinates, useWeather} from './hooks.tsx'
import Input from './search-stying.tsx'
import './App.css'
import Card from "./weather-styling.tsx"

function App() {
    const [searchedValue, setSearchValue] = useState<string>("Freehold");
    const autoComplete = useAutocomplete(searchedValue);
    const [finalSearchedValue, setFinalSearchedValue] = useState<string>("Freehold, NJ");
    const [lat,lon] = useCoordinates(finalSearchedValue);
    const weather = useWeather(lat,lon);

  return (
      <>
          <Input searchedValue = {searchedValue} setSearchValue={setSearchValue} setFinalSearchedValue={setFinalSearchedValue}></Input>

          {
              autoComplete.map((item, index) =>
                  <div key = {index}>
                      <div id = "autoCompleteResults"><button onClick={() => {
                          setFinalSearchedValue(`${item.formatted}`);
                          setSearchValue(`${item.formatted}`);
                      }}>{item.formatted}</button></div>
                  </div>)
          }

          {
              weather && <Card weather={weather} location={finalSearchedValue} ></Card>
          }
      </>
  )
}

export default App
