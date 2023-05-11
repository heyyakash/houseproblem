import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BiDumbbell } from 'react-icons/bi'
import { TbBuildingHospital } from 'react-icons/tb'
import { ImSpoonKnife } from 'react-icons/im'

import Popup from './Popup'

const Box = ({ l, b, dict }) => {
    const [type, setType] = useState(new Set())
    const [data, setData] = useState(null)
    // const [color, setColor] = useState(null)
    const [show, setShow] = useState(false)


    const colorMap = {
        House: "bg-green-500",
        Gym: "bg-blue-500",
        Restaurant: "bg-pink-500",
        Hospital: "bg-red-500"
    }

    const iconMap = {
        House : <AiFillHome />,
        Gym : <BiDumbbell />,
        Hospital : <TbBuildingHospital />,
        Restaurant : <ImSpoonKnife />
    }


    return (
        <>
            <Popup type={type} setType={setType} l={l} b={b} dict={dict} show={show} setShow={setShow} />




            <div className={`dark:bg-[#323232] text-black bg-white dark:text-white border-primary gap-2 relative z-0 overflow-hidden p-2   hover:z-[100]   cursor-pointer trans hover:scale-110  text-xl font-bold grid ${type.size===3?"grid-cols-2 grid-rows-2":"s"}   ${data ? "" : "text-sm font-normal"}`}>
                {type.size === 0 ? (<p className='text-xs'>Plot</p>) : (<>{
                    [...type].map((x) => {
                        return (
                            <>
                                <div key = {x.label} className={`grow ${colorMap[x.mode]} bg-opacity-70 hover:bg-opacity-100 trans rounded-md  first:col-span-2 border-black first-letter: flex items-center font-bold justify-center h-full`}>
                                    {x.label}
                                    <div className='text-[3rem] absolute text-black/10 '>
                                        {/* <AiFillHome /> */}
                                        {iconMap[x.mode]}
                                    </div>
                                </div>
                            </>
                        )
                    })
                }</>)}
                <button onClick={() => setShow(!show)} className='absolute  bg-purple-500 px-3 text-white  bottom-0 right-0'>{show ? "-" : "+"}</button>


            </div>
        </>
    )
}

export default Box