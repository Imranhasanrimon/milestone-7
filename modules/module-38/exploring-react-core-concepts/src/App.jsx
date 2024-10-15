import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <Person></Person>


    </>
  )
}

function Person() {
  const name = "Imran";
  const age = 23;
  const passions = {
    first: 'Coding',
    second: 'Traveling',
    third: 'Content Creation'
  }
  return <h3>I am {name} and {age} years old. My first passion is {passions.first}</h3>
}

export default App
