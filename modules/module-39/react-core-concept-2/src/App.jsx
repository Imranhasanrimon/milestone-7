import './App.css'
import Counter from './Counter';
import User from './User';
import Friends from './Friends';

function App() {
  const handleClick = (name) => {
    // const name = 'imrna'
    alert(name)

  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <button onClick={() => handleClick('imrna')}>Click</button>

    </>
  )
}

export default App
