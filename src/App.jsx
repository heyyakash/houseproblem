import { useState } from 'react'
import Main from './components/Main'

function App() {
  const [vertical, setVertical] = useState(3)
  const [horizontal, setHorizontal] = useState(6)

  return (
    <div className='flex lg:h-[100vh]'>
    <div className='h-full w-[400px] hidden lg:flex bg-white  flex-col'>
      <div className='w-full font-bold py-5 grid place-items-center'>
        <h2 className='text-2xl'>House Selection</h2>
      </div>
      <div className='flex flex-col gap-2 px-5'>
        <input type="number" value = {vertical} onChange={(e)=>setVertical(e.target.value)} placeholder='veritical' className='border outline-none p-3' />
        <input type="number" value = {horizontal} onChange={(e)=>setHorizontal(e.target.value)} placeholder='Horizontal' className='border outline-none p-3' />
      </div>
    </div>
    <Main l = {horizontal} b = {vertical} />
    </div>
  )
}

export default App
