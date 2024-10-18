import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'

function App() {
  const [state, setState] = useState(true);
  const handleSwitch = () => {
    setState(!state)
  }
  console.log(state);
  return (
    <>

      <h3>Vite + React</h3>
      <button onClick={handleSwitch}>Switch</button>



    </>
  )
}

export default App
