import React, { useEffect, useState } from 'react'
import Box from './Box'
import {RiLayout6Fill} from 'react-icons/ri'

const Main = ({ l, b, dict }) => {
    const [array, setArray] = useState([])

    useEffect(() => {
        document.querySelector("#grid").style.gridTemplateColumns = `repeat(${l},minmax(0,1fr))`
        const arr = []
        const s = []
        for(let i=0;i<l;i++) s.push(i)
        for (let i = 0; i < b; i++) {
            arr.push(s)
        }
        console.log(arr)
        setArray(array => arr)
    }, [l,b])

    return (
        <>
            <div className={`flex flex-col bg-white dark:bg-black/90 dark:border-l dark:border-white/20 dark:text-white w-[100vw] relative h-[100vh]  border-l-2 `}>
                <div className='p-5 flex items-center gap-2 border-b dark:border-none border-primary'>
                    <RiLayout6Fill className='text-purple-500 text-4xl' />
                    <h2 className='text-xl font-semibold'>Layout</h2>
                </div>
                <div id="grid" className='w-full grid h-[calc(100vh-3rem)] '>
                    {array.map((x, i) => {
                        return x.map(y => <Box dict={dict} l={i + 1} b={y} key={i.toString() + y.toString()} />)
                    })}
                </div>

            </div>
        </>
    )
}

export default Main