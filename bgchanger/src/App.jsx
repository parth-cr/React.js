import {useState} from "react"

function App() {
  let [color, setColor] = useState('black')

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor : color}}>

      <div className="w-full h-screen">

      <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "red"}}>red</button>
      <br /><br />
      <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "blue"}}>blue</button>
      <br /><br />
      <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "green"}}>green</button>

      </div>
      </div>
      
    </>
  )
}

export default App
