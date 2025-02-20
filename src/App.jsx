import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const[count,setCount] = useState(0)

  return (
   <div className='App'>
    <input type="text" placeholder='type something' value={text} onChange={(e)=>setText(e.target.value)}/>
    <h1><strong>you typed:{text}</strong></h1>
    <h1>{text.length}</h1>
   </div>
  
)}

export default App

