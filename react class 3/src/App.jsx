import React from 'react'
import Navbar from './component/navbar'
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  function handleClickdec() {
    setCount(count - 1)
  }

  function handleClickreset() {
    setCount(0)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClickdec}>Clickdec</button>
      <button onClick={handleClickreset}>Clickresest</button>
       <Navbar name= "hasib" age= {22}/>
       <Navbar name= "hasib1" age= {223}/>
       <Navbar name= "hasib2" age= {222}/>
       <Navbar name= "hasib3" age= {225}/>
       <Navbar name= "hasib4" age= {224}/>
       <Navbar name= "hasib5" age= {226}/>
    </div>
  )
}

export default App