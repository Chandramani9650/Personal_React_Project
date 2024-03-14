import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './component/user'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserForm/>
    </>
  )
}

export default App
