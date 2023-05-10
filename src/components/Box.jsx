import React, { useState } from 'react'
import close from "../assets/close.svg"
import { AiFillHome } from 'react-icons/ai'
import { BiDumbbell } from 'react-icons/bi'
import { TbBuildingHospital } from 'react-icons/tb'
import { ImSpoonKnife } from 'react-icons/im'

const Box = ({ l, b, dict }) => {
    const [type, setType] = useState(new Set())
    const [data, setData] = useState(null)
    const [color, setColor] = useState(null)
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [house, setHouse] = useState("")
    const [hospital, setHospital] = useState("")
    const [restaurant, setRestaurant] = useState("")
    const [gym, setGym] = useState("")

    const colorMap = {
        House: "bg-green-100",
        Gym: "bg-blue-100",
        Restaurant: "bg-pink-100",
        Hospital: "bg-red-100"
    }


    const handleChange = (data) => {
        if (type.has(data)) setType(type => {
            let temp = type
            temp.delete(data)
            return temp
        })
        else {
            setType((type) => type.add(data))
        }
        switch (data) {
            case "House":
                setShow1(!show1)
                break
            case "Hospital":
                setShow2(!show2)
                break
            case "Gym":
                setShow3(!show3)
                break
            case "Restaurant":
                setShow4(!show4)
                break
        }
    }

    const handleAddition = () => {
        type.forEach((e)=>{
            dict[e]=[l,b]
        })
        console.log(dict)
    }

    return (
        <>
            <div className={`absolute w-full h-[100vh] trans ${show ? "top-0" : "-top-[1000%]"} flex justify-center items-center bg-purple-500/10  z-[1000] w-[400px] drop-shadow-xl`}>
                <div className='flex flex-col rounded-xl bg-white'>
                    <div className='flex items-center justify-between p-4 w-full'>
                        <h3 className='text-2xl font-semibold'>Select Building</h3>
                        <div onClick={() => setShow(!show)} className='h-7 w-7  group hover:bg-purple-500 rounded-md trans cursor-pointer grid place-items-center'>
                            <img src={close} alt="close" className='group-hover:brightness-0 group-hover:invert-[1]' />
                        </div>

                    </div>
                    <div className='grid  grid-cols-4 gap-2 w-[400px] min-h-[70px] text-xl px-3 pb-2'>
                        <label htmlFor="House" className={`checkbox`}><AiFillHome /></label>
                        <input onChange={() => handleChange("House")} type="checkbox" id="House" className="hidden" />

                        <label htmlFor="Hospital" className='checkbox'><TbBuildingHospital /></label>
                        <input onChange={() => handleChange("Hospital")} type="checkbox" id="Hospital" className="hidden" />

                        <label htmlFor="Gym" className='checkbox'><BiDumbbell /></label>
                        <input onChange={() => handleChange("Gym")} type="checkbox" id="Gym" className="hidden" />

                        <label htmlFor="Restaurant" className='checkbox'><ImSpoonKnife /></label>
                        <input onChange={() => handleChange("Restaurant")} type="checkbox" id="Restaurant" className="hidden" />
                    </div>
                    {/* {type} */}
                    <div className="flex flex-col gap-3 p-4">
                        {show1 ?
                            (<div className='flex flex-col gap-2'>
                                <label htmlFor="house" className='label-input-primary'>House Name</label>
                                <input type="text" className='input-primary' value={house} onChange={(e) => setHouse(e.target.value)} />
                            </div>) : (<></>)}
                        {show2 ?
                            (<div className='flex flex-col gap-2'>
                                <label htmlFor="house" className='label-input-primary' >Hospital Name</label>
                                <input disabled={type.has("House")} className='input-primary' type="text" value={hospital} onChange={(e) => setHospital(e.target.value)} />
                            </div>) : (<></>)}
                        {show3 ?
                            (<div className='flex flex-col gap-2'>
                                <label htmlFor="house" className='label-input-primary'>Gym Name</label>
                                <input type="text" className='input-primary' value={gym} onChange={(e) => setGym(e.target.value)} />
                            </div>) : (<></>)}
                        {show4 ?
                            (<div className='flex flex-col gap-2'>
                                <label htmlFor="house" className='label-input-primary'>Restaurant Name</label>
                                <input type="text" className='input-primary' value={restaurant} onChange={(e) => setRestaurant(e.target.value)} />
                            </div>) : (<></>)}
                    </div>
                    <div className='flex gap-2 p-3 w-full items-center justify-center'>
                        <button onClick={()=>handleAddition()} className='bg-blue-500 grow py-3 text-white font-bold text-lg rounded-md'>Add</button>
                        <button onClick={()=>setShow(false)} className='bg-gray-200 grow py-3 text-white font-bold text-lg rounded-md'>Cancel</button>
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