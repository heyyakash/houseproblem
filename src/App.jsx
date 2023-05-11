import { useEffect, useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  const [vertical, setVertical] = useState(5)
  const [horizontal, setHorizontal] = useState(5)
  const [Dimensions, setDimensions] = useState(false)

  const dict = {
    Restaurant: [],
    Hospital: [],
    Gym: [],
    House: []
  }
  useEffect(() => {
    const html = document.querySelector("html")
    html.classList.add("dark")
  }, [])


  return (
    <div className='flex lg:h-[100vh]'>
      <Sidebar setHorizontal={setHorizontal} setVertical={setVertical} vertical={vertical} horizontal={horizontal} dict={dict} />
      <Main l={horizontal} b={vertical} dict={dict} />

    </div>
  )
}

export default App
