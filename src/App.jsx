import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons1 from './components/Buttons1'
import Buttons2 from './components/Buttons2'
import {buttonsdata1, buttonsdata2} from './assets/data'
function App() {



  return (
    <div className="App">
      <h1>How old are you?</h1>
      <Buttons1 buttonsData ={buttonsdata1} />
      <Buttons2 buttonsData ={buttonsdata2} />
    </div>
  )
}

export default App
