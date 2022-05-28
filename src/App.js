import React, { useState } from 'react'

import CustomForm from './Components/CustomForm/CustomForm'
import Breathing from './Components/Breathing/Breathing'

import './App.css';

function App() {

  const [start, setStart] = useState(false)
  const [breathingConfig, setBreathingConfig] = useState({})

  function configBreathing(config){
    setBreathingConfig(config)
    setStart(true)
  }

  function onStop(){
    setStart(false)
  }

  return (
    <div className="App">
      {start
        ? <Breathing data={breathingConfig} onStop={onStop} />
        : <CustomForm configBreathing={configBreathing} />
      }
    </div>
  );
}

export default App;
