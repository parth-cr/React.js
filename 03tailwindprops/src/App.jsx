import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
  
  let [count, setCounter] = useState(0)
  let myobj = {
    username : "parth",
    age : 20
  }
  let newArr = [1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">tailwind test</h1>
      <Cards username='chai aur code' btntext="click me" />
      <Cards username="chai without code" btntext="no click"/>
    </>
  )
}

export default App
