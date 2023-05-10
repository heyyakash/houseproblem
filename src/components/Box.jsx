import React, { useState } from 'react'
import House from "../assets/home.svg"
import Hospital from "../assets/hospital.svg"
import Gym from "../assets/gym.svg"
import Restaurant from "../assets/restaurant.svg"
import close from "../assets/close.svg"

const Box = ({ l, b, dict }) => {
    const [type, setType] = useState([])
    const [data, setData] = useState(null)
    const [color, setColor] = useState(null)
    const [show, setShow] = useState(false)
    const colorMap = {
        House: "bg-green-100",
        Gym: "bg-blue-100",
        Restaurant: "bg-pink-100",
        Hospital: "bg-red-100"
    }
    const handleChange = (e) => {
        if (e.target.value === "+") {
            setColor(null)
            return
        }
        dict[e.target.value].push([l - 1, b])
        setColor(colorMap[e.target.value])
        console.log(dict)
    }
    return (
        <>
            <div className={`absolute w-full h-[100vh] trans ${show ? "top-0" : "-top-[1000%]"} flex justify-center items-center bg-purple-500/10  z-[1000] w-[400px] drop-shadow-xl`}>
                <div className='flex flex-col rounded-lg bg-white'>
                    <div className='flex items-center'>
                        <h3 className='text-xl font-semibold p-5 '>Select Building</h3>
                        <div className='h-7 w-7 hover:bg-purple-500 rounded-md trans pointer-cursor grid place-items-center'>
                            <img src={close} alt="" />
                        </div>

                    </div>
                    <div className='grid bg-white grid-cols-2 gap-2 w-[400px] min-h-[200px] grid-rows-2 p-2'>

                        <label htmlFor="House" className={`checkbox`}><img src={House} alt="house" /></label>
                        <input type="checkbox" id="House" className="hidden" />

                        <label htmlFor="Hospital" className='checkbox'><img src={Hospital} alt="hospital" /></label>
                        <input type="checkbox" id="Hospital" className="hidden" />

                        <label htmlFor="Gym" className='checkbox'><img src={Gym} alt="dumbell" /></label>
                        <input type="checkbox" id="House" className="hidden" />

                        <label htmlFor="Restaurant" className='checkbox'><img src={Restaurant} alt="food" /></label>
                        <input type="checkbox" id="Restaurant" className="hidden" />
                    </div>
                </div>
            </div>
            <div className={` ${color ? color : "bg-white"} border-primary relative z-0 overflow-hidden  hover:z-[100] cursor-pointer trans hover:scale-110  text-xl font-bold ${data ? "" : "text-sm font-normal"}`}>
                <button onClick={() => setShow(!show)} className='absolute  bg-purple-500 px-3 text-white  bottom-0 right-0'>{show ? "-" : "+"}</button>


            </div>
        </>
    )
}

export default Box