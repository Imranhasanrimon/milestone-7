import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      {/* <Person></Person>
      <Student name="imran" age="23"></Student>
      <Developer></Developer> */}


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

function Student({ name, age }) {
  console.log(name, age);
  return (
    <div className='student'>
      <h2>This is student container</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h3>Web App Developer</h3>
      <p>Coding</p>
      <p>Programming</p>
    </div>
  )
}
export default App
