import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [number, setNumber] = useState(0);

  const onIncrease = () =>{
    setNumber(number + 1);
    console.log('increase가 클릭됨')/*동작 안됨*/
  }
  const onDecrease = () =>{
    setNumber(number - 1);
    console.log('decrease가 클릭됨')
  }

  return (
   <div>
     <h2>{number}</h2>
     <button onClick={onIncrease}>+1</button>
     <button onClick={onDecrease}>-1</button>
   </div>
  )
}

export default App
