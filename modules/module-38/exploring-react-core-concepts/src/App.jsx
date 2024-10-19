import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'

function App() {
  const products = [
    { title: 'Cabbage', id: 1, status: true },
    { title: 'Garlic', id: 2, status: false },
    { title: 'Apple', id: 3, status: true },
  ];
  const listItems = products.map(product =>
    <li style={{
      color: !product.status ? 'tomato' : 'white'
    }} key={product.id}>
      {product.title}
    </li>
  );

  return (
    <>

      <h3>Vite + React</h3>
      {/* {
        products.map(product => <li style={{
          color: !product.status ? 'tomato' : 'white'
        }} key={product.id}>{product.title}</li>)
      } */}
      {listItems}





    </>
  )
}

export default App
