import {useEffect, useState} from 'react'
import {useAutocomplete, useCoordinates} from './hooks.tsx'

import './App.css'

function App() {
    const [searchedValue, setSearchValue] = useState<string>("Freehold");
    const autoComplete = useAutocomplete(searchedValue);
    const [finalSearchedValue, setFinalSearchedValue] = useState<string>("Freehold, NJ");
    const [lat,lon] = useCoordinates(finalSearchedValue)

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
                          setFinalSearchedValue(`${item.city}, ${item.state}`);
                          setSearchValue(`${item.city}, ${item.state}`);
                      }}>{item.formatted}</button></div>
                  </div>)
          }
          {lat}, {lon}
      </>
  )
}

export default App
