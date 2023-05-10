import React, { useEffect, useState } from 'react'
import close from "../assets/close.svg"
import { AiFillHome } from 'react-icons/ai'
import { BiDumbbell } from 'react-icons/bi'
import { TbBuildingHospital } from 'react-icons/tb'
import { ImSpoonKnife } from 'react-icons/im'

const Popup = ({ show, setShow, type, setType, l, b, dict }) => {
    const [mode, setMode] = useState(null)
    const [disabled, setDisabled] = useState(mode==="House"?true:false)
    const [label, setLabel] = useState("")

    useEffect(()=>{
        setDisabled(mode==="House")
    },[mode])

    const handleSubmit = () => {
        const data = { label, l, b }
        dict[mode].push(data)
        type.add({ ...data, mode })
        setShow(false)
        console.log(dict)
    }

    const reset = () => {
        dict.House = dict.House.filter(obj => obj.l !== l || obj.b !== b)
        dict.Hospital = dict.Hospital.filter(obj => obj.l !== l || obj.b !== b)
        dict.Restaurant = dict.Restaurant.filter(obj => obj.l !== l || obj.b !== b)
        dict.Gym = dict.Gym.filter(obj => obj.l !== l || obj.b !== b)
        console.log(dict)
        setType(new Set())
        setMode(null)
        setDisabled(false)
    }

    return (
        <div className={`absolute w-full h-[100vh] trans ${show ? "top-0" : "-top-[1000%]"} flex justify-center items-center bg-purple-500/10  z-[1000] w-[400px] drop-shadow-xl`}>
            <div className='flex flex-col rounded-xl bg-white'>
                <div className='flex items-center justify-between p-4 w-full'>
                    <h3 className='text-2xl font-semibold'>Select Building</h3>
                    <div onClick={() => setShow(!show)} className='h-7 w-7  group hover:bg-purple-500 rounded-md trans cursor-pointer grid place-items-center'>
                        <img src={close} alt="close" className='group-hover:brightness-0 group-hover:invert-[1]' />
                    </div>

                </div>
                <div className='grid  grid-cols-4 gap-2 w-[400px] min-h-[70px] text-xl px-3 pb-2'>

                    <button onClick={() => setMode("House")} className={`checkbox`}><AiFillHome /></button>
                    <button disabled = {disabled} onClick={() => setMode("Hospital")} className='checkbox disabled:opacity-50 disabled:pointer-events-none'><TbBuildingHospital /></button>
                    <button onClick={() => setMode("Gym")} className='checkbox'><BiDumbbell /></button>
                    <button onClick={() => setMode("Restaurant")} className='checkbox'><ImSpoonKnife /></button>

                </div>
                {mode ? (
                    <div className='px-3 flex flex-col gap-2'>
                        <label htmlFor="input" className='label-input-primary'>{mode} name</label>
                        <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} className='input-primary' />
                    </div>
                ) : (
                    <></>
                )}
                <div className='flex gap-2 p-3 w-full items-center justify-center'>
                    <button onClick={() => handleSubmit()} className='bg-blue-500 grow py-3 text-white font-bold text-lg rounded-md hover:text-blue-400 trans hover:bg-white'>Add</button>
                    <button onClick={() => reset()} className='bg-red-400 grow py-3 text-white font-bold text-lg rounded-md hover:text-red-400 trans hover:bg-white'>Reset</button>
                </div>
            </div>

        </div>

    )
}

export default Popup