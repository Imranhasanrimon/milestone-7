import './App.css'
import User from './User';
import Friends from './Friends';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount)
  }


  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Counter prop={count}></Counter>
      <button onClick={handleCount}>Add</button>
      <button onClick={handleReduce}>Reduce</button>

    </>
  )
}

export default App
