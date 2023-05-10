import React, { useState } from 'react'

const Sidebar = ({ vertical, horizontal, dict }) => {
    const [result, setResult] = useState([])

    const getResult = () => {
        setResult([])
        const { House, Hospital, Gym, Restaurant } = dict
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
            setResult((result) => [...result, { sum, label: i.label }])
        }
        setResult((result) => result.sort((x, y) => x.sum - y.sum))
        console.log(result)
        console.log(dict)
    }

    return (
        <div className='h-full w-[400px] hidden lg:flex bg-white  flex-col'>
            <div className='w-full font-bold py-5 grid place-items-center'>
                <h2 className='text-2xl'>House Selection</h2>
            </div>
            <div className='flex flex-col gap-2 px-5'>
                <input type="number" value={vertical} onChange={(e) => setVertical(e.target.value)} placeholder='veritical' className='border outline-none p-3' />
                <input type="number" value={horizontal} onChange={(e) => setHorizontal(e.target.value)} placeholder='Horizontal' className='border outline-none p-3' />
            </div>
            <div className='p-5'>
                <button onClick={()=>getResult()} className='bg-purple-500 p-2 text-white font-semibold rounded-lg  w-full'>House</button>
            </div>
            {result.map((x) => x.label + " "+ x.sum.toString())}
        </div>
    )
}

export default Sidebar