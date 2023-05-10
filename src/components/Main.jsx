import React, { useEffect, useState } from 'react'
import Box from './Box'
import rsvg from '../assets/layout.svg'

const Main = ({ l, b }) => {
    const dict = {
        Restaurant: [],
        Hospital: [],
        Gym: [],
        House: []
    }
    const arr = []
    const s = Array.from(Array(l).keys(), x => x + 1)
    for (let i = 0; i < b; i++) {
        arr.push(s)
    }
    useEffect(() => {
        document.querySelector("#grid").style.gridTemplateColumns = `repeat(${l},minmax(0,1fr))`
    }, [])

    return (
        <>
            <div className={`flex flex-col bg-white w-[100vw] relative h-[100vh]  border-l-2 `}>
                <div className='p-5 flex items-center gap-2 border-b border-primary'>
                    <img src={rsvg} alt="" />
                    <h2 className='text-xl font-semibold'>Layout</h2>
                </div>
                <div id="grid" className='w-full grid h-[calc(100vh-3rem)] '>
                    {arr.map((x, i) => {
                        return x.map(y => <Box dict={dict} l={i + 1} b={y} key={i.toString() + y.toString()} />)
                    })}
                </div>

            </div>
        </>
    )
}

export default Main