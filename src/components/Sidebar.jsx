import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'
import { CgDarkMode } from "react-icons/cg"

const Sidebar = ({ vertical, horizontal, dict, setVertical, setHorizontal }) => {
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
        <div className='h-screen w-[400px] flex bg-white dark:bg-black/90 dark:text-white  flex-col'>
            <div className='w-full font-bold  dark:border-none px-5 py-6  flex items-center justify-between'>
                <h2 className='text-2xl '>House Selection</h2>
                <div onClick={() => toggleDarkMode()} className='rounded-full h-8 w-8 cursor-pointer trans hover:bg-white hover:text-black border grid place-items-center text-xl'>
                    <CgDarkMode />
                </div>
            </div>
            <div className='flex flex-col gap-3 p-5 w-[90%] self-center rounded-lg dark:bg-white/20 bg-black/10'>
                <h3 className='text-xl font-bold'>Set Dimensions</h3>
                <label htmlFor="v mt-5">Veritcal</label>
                <input id="v" type="number" min={1} value={vertical} onChange={(e) => setVertical(e.target.value)} placeholder='veritical' className='input-primary' />
                <label htmlFor="h">Horizontal</label>
                <input id="h" type="number" min={1} value={horizontal} onChange={(e) => setHorizontal(e.target.value)} placeholder='Horizontal' className='input-primary' />
            </div>
            <div className='p-5'>
                <button onClick={() => getResult()} className='bg-purple-500 disabled:bg-opacity-50 text-white trans p-2 hover:bg-white hover:text-purple-500   font-semibold rounded-lg  w-full'> Suggest House</button>
            </div>
            {error && <p className='px-5 text-red-500 flex gap-2 items-center font-bold text-md'>
                <BiErrorCircle />
                {error}</p>
            }
            <p className='text-sm text-gray-500 px-5 mb-3 '>Best house</p>
            <div className='flex flex-col gap-5 px-5  overflow-y-auto py-5'>
                {result.map(x => {
                    return (
                        <div key={x.label} className='flex flex-col gap-2 px-3 py-3  first:dark:bg-green-400/20 first:bg-green-400/20 dark:bg-white/20 bg-black/10 rounded-md'>

                            <div className='flex items-center gap-2'>
                                <AiFillHome className='text-2xl text-green-500' />
                                <p className='text-xl font-semibold'>{x.label}</p>
                            </div>
                            <p>Distance from Gym : <b>{x.GymScore}km</b></p>
                            <p>Distance from Restaurant : <b>{x.RestaurantScore}km</b></p>
                            <p>Distance from Hospital : <b> {x.HospitalScore}km </b></p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Sidebar