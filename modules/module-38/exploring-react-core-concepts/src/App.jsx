import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <Actor name="Bapparaj"></Actor>
      <Todo serial={2} task='Conditonal Rendering' isDone={true}></Todo>


    </>
  )
}


export default App
