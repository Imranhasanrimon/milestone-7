import { useEffect, useState } from "react"

import "./App.css"
import { Watch } from "./Components/Watch/Watch";

function App() {
  // const watches = [
  //   { id: 1, name: "Rolex Submariner", price: 8000 },
  //   { id: 2, name: "Omega Seamaster", price: 5000 },
  //   { id: 3, name: "Casio G-Shock", price: 100 },
  //   { id: 4, name: "Tag Heuer Carrera", price: 4000 },
  //   { id: 5, name: "Seiko 5", price: 200 },
  // ];
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Imranhasanrimon/fruit-burst/refs/heads/main/watches.json")
      .then(res => res.json())
      .then(data => setWatches(data))
  }, [])
  return (
    <>

      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }

    </>
  )
}

export default App
const json = [
  {
    "name": "imran",
    "age": 23,
    "hobbies": ["coding", "reading", "playing"],
    "isMarried": false,
    "profession": {
      "professionName": "web developer",
      "skills": ["html", "css", "js", "react", "tailwind"],
      "salary": 20000
    }
  }
]