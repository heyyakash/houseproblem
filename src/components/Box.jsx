import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BiDumbbell } from 'react-icons/bi'
import { TbBuildingHospital } from 'react-icons/tb'
import { ImSpoonKnife } from 'react-icons/im'

import Popup from './Popup'

const Box = ({ l, b, dict }) => {
    const [type, setType] = useState(new Set())
    const [data, setData] = useState(null)
    const [color, setColor] = useState(null)
    const [show, setShow] = useState(false)


    const colorMap = {
        House: "bg-green-100",
        Gym: "bg-blue-100",
        Restaurant: "bg-pink-100",
        Hospital: "bg-red-100"
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




            <div className={` ${color ? color : "bg-white"} border-primary relative z-0 overflow-hidden p-2 flex-wrap  hover:z-[100]   cursor-pointer trans hover:scale-110  text-xl font-bold flex items-center justify-center ${data ? "" : "text-sm font-normal"}`}>
                {type.size === 0 ? (<p className='text-xs'>Plot</p>) : (<>{
                    [...type].map((x) => {
                        return (
                            <>
                                <div className={`grow ${colorMap[x.mode]} flex ${type.size===3?"h-[50%]":"h-full"} items-center font-bold justify-center`}>
                                    {x.label}
                                    <div className='text-[4rem] absolute text-black/10 '>
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