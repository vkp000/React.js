import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    // counter += 1
    if(counter <20)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1) // intresting question check once again
    setCounter(counter+1)
    setCounter(counter+1)
   
    
  }
  const removeValue = () => {
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button
    onClick={removeValue}>Decrease value: {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
