import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCounter] = useState(15)

  // let count = 15
  const addValue = ()=>
      {
        if(count < 20){
        // count =count + 1;
        console.log("value added",count); 
        setCounter(prevCount => prevCount + 1)
        setCounter(prevCount => prevCount + 1)
        setCounter(prevCount => prevCount + 1)
        setCounter(prevCount => prevCount + 1)
        }
        else{
          console.log("large number")
        }
      }
      const removeValue = ()=>{
        if(count>0){
        count = count -1;
        console.log("value decreased", count)
        setCounter(count)
        }
        else{
          console.log("negative number")
        }
      }
  return (
    <>
      <h1>chai aur raect</h1>
      <h2>counter value: {count}</h2>

      <button onClick={addValue} >add value</button>
      <br />
      <button onClick={removeValue}>dec value</button>
    </>
  )
}

export default App
