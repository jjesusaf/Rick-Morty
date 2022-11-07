import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DataMorty from './components/DataMorty'
import Diagram from './assets/img/Diagram.png'
import Rectangle1 from './assets/img/Rectangle1.png'

function App() {
  

  return (
    <div className="App">
      <div className='header'>
        <img src={Rectangle1} alt="" id='rick'/>
      </div>
        <DataMorty/>
      </div>
  )
}

export default App
