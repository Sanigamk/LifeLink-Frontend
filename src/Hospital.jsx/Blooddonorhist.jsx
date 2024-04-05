import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BloodHistory } from './BloodHistory'
import axios from 'axios'

export const Blooddonorhist = () => {

    const [data,setData]=useState([''])
    let id=localStorage.getItem('id')
    console.log(id)

    useEffect(()=>{
        let fetchdata = async ()=>{
            let response = await axios.get(`http://localhost:5000/hospital/vwblddonordonationhist/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()

    },[])
    
    return (
        <div className='images2 w-[100%]'>
            <BloodHistory/>
            <div className='text-black font-bold pl-5 mt-10 text-[20px] underline'>DONORS BLOOD HISTORY</div>
            <div class="mt-10 overflow-x-auto shadow-md sm:rounded-lg p-14 ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 text-white bg-red-800 rounded">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Place
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Blood group
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item)=>(
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.blddonors?.name}
                            </th>
                            <td class="px-6 py-4">
                                {item.blddonors?.age}
                            </td>
                            <td class="px-6 py-4">
                                {item.blddonors?.place}
                            </td>
                            <td class="px-6 py-4">
                                {item.blddonors?.contact}
                            </td>
                            <td class="px-6 py-4">
                                {item.req?.bloodgroup}
                            </td>
                            <td class="px-6 py-4">
                                {item.req?.date}
                            </td>
                        </tr>
                    ))} 
                    </tbody>
                </table>
            </div>
        </div>
    )
}
