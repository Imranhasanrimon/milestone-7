import './App.css'

function App() {
  function handleClick() {
    alert('Button Clicked')
  }
  const parameter = (num) => alert(num + 5);
  return (
    <>

      <h3>React Core Concepts 2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert('This is from arrow function')}>Arrow</button>
      <button onClick={() => parameter(5)}>Parameter</button>

    </>
  )
}

export default App
