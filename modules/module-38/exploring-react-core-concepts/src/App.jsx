import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'

function App() {
  const actors = ['Sakib Khan', 'Jashim Khan', 'Amir Khan', 'Hridoy Khan', 'Eliyas Khan']

  return (
    <>

      <h1>Vite + React</h1>
      <Actor name="Bapparaj"></Actor>
      {actors.map(actor => <Actor name={actor}></Actor>)}
      {/* <Todo serial={1} task="learning React JS" isDone={false}></Todo>
      <Todo serial={2} task="Conditional Rendering" isDone={true}></Todo>
      <Todo serial={3} task="Exploring Core Concepts" isDone={false}></Todo> */}
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
