import { useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  const [vertical, setVertical] = useState(8)
  const [horizontal, setHorizontal] = useState(8)
  const dict = {
    Restaurant: [],
    Hospital: [],
    Gym: [],
    House: []
  }
  return (
    <div className='flex lg:h-[100vh]'>
      <Sidebar vertical={vertical} horizontal={horizontal} dict={dict} />
      <Main l={horizontal} b={vertical} dict={dict} />
    </div>
  )
}

export default App
