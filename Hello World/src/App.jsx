import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './Portfolio'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div><Portfolio/></div>
    <div>
      <Button label="Login" />
      <Button label="Signin" />
    </div>
    </>
  )
}

export default App
