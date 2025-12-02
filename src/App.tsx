import {useEffect, useState} from 'react'
import {useAutocomplete} from './hooks.tsx'

import './App.css'

function App() {
    const [searchedValue, search] = useState("Freehold")
    const autoComplete = useAutocomplete(searchedValue);



  return (
    <>

    </>
  )
}

export default App
