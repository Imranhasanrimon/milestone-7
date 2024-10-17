import './App.css'
import User from './User';
import Friends from './Friends';
import Counter from './Counter';
import Players from './Players';

function App() {

  const counterStyles = {
    border: '2px solid tomato',
    padding: '15px',
    margin: '15px',
    borderRadius: '15px',
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Players></Players>
      <Counter style={counterStyles}></Counter>


    </>
  )
}

export default App
