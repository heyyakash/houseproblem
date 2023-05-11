import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'
import {CgDarkMode} from "react-icons/cg"

const Sidebar = ({ vertical, horizontal, dict }) => {
    const [result, setResult] = useState([])
    const [error, setError] = useState(null)

    const toggleDarkMode = () => {
        const html = document.querySelector("html")
        html.classList.toggle("dark")
    }
    

    const getResult = () => {
        setResult([])
        setError(null)
        const { House, Hospital, Gym, Restaurant } = dict
        if (House.length === 0) {
            setError("Assign some houses")
            return
        }
        for (let i of House) {
            console.log(i)
            let HospitalScore = 0
            for (let j of Hospital) {
                const temp = Math.abs(i["l"] - j["l"]) + Math.abs(i["b"] - j["b"])
                if (HospitalScore == 0) HospitalScore = temp
                else HospitalScore = Math.min(HospitalScore, temp)
            }
            let GymScore = 0
            for (let j of Gym) {
                const temp = Math.abs(i["l"] - j["l"]) + Math.abs(i["b"] - j["b"])
                if (GymScore == 0) GymScore = temp
                else GymScore = Math.min(GymScore, temp)
            }
            let RestaurantScore = 0
            for (let j of Restaurant) {
                const temp = Math.abs(i["l"] - j["l"]) + Math.abs(i["b"] - j["b"])
                if (RestaurantScore == 0) RestaurantScore = temp
                else RestaurantScore = Math.min(RestaurantScore, temp)
            }
            const sum = HospitalScore + GymScore + RestaurantScore
            setResult((result) => [...result, { sum, label: i.label, HospitalScore, GymScore, RestaurantScore }])
        }
        setResult((result) => result.sort((x, y) => x.sum - y.sum))
        console.log(result)
        console.log(dict)
    }

    return (
        <div className='h-full w-[400px] hidden lg:flex bg-white dark:bg-black/90 dark:text-white  flex-col'>
            <div className='w-full font-bold p-5 py-7 flex items-center justify-between'>
                <h2 className='text-2xl '>House Selection</h2>
                <div onClick={()=>toggleDarkMode()} className='rounded-full h-8 w-8 cursor-pointer trans hover:bg-white hover:text-black border grid place-items-center text-xl'>
                    <CgDarkMode />
                </div>
            </div>
            <div className='flex flex-col gap-2 px-5'>
                <input type="number" value={vertical} onChange={(e) => setVertical(e.target.value)} placeholder='veritical' className='input-primary' />
                <input type="number" value={horizontal} onChange={(e) => setHorizontal(e.target.value)} placeholder='Horizontal' className='input-primary' />
            </div>
            <div className='p-5'>
                <button onClick={() => getResult()} className='bg-purple-500 disabled:bg-opacity-50 text-white trans p-2 hover:bg-white hover:text-purple-500   font-semibold rounded-lg  w-full'> Suggest House</button>
            </div>
            {error && <p className='px-5 text-red-500 flex gap-2 items-center font-bold text-md'>
                <BiErrorCircle />
                {error}</p>
            }
            {result[0] ? (
                <div className='flex flex-col gap-3 px-5'>
                    <p className='text-sm text-gray-500'>Best house</p>
                    <div className='flex items-center gap-2'>
                        <AiFillHome className='text-2xl text-green-500' />
                        <p className='text-xl font-semibold'>{result[0].label}</p>
                    </div>
                    <p>Distance from Gym : <b>{result[0].GymScore}km</b></p>
                    <p>Distance from Restaurant : <b>{result[0].RestaurantScore}km</b></p>
                    <p>Distance from Hospital : <b> {result[0].HospitalScore}km </b></p>
                </div>
            ) : (<></>)}
        </div>
    )
}

export default Sidebar