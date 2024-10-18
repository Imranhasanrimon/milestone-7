import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'

function App() {
  const [state, setState] = useState(0);
  const handleAdd = () => {
    setState(state + 1)
  }
  console.log(state);
  return (
    <>

      <h3>Vite + React</h3>
      <button onClick={handleAdd}>Add</button>



    </>
  )
}

export default App
