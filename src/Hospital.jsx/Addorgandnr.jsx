import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export const Addorgandnr = () => {
    const [data, setData] = useState([''])

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:5000/hospital/vworgandonor/${localStorage.getItem("id")}`)
            console.log(response)
            setData(response.data)
        }
        fetchdata()
    }, [])
  return (
    <div className='images2 w-[100%] h-[42rem]'>
        <div className='line flex flex-wrap translate-x-0 gap-10 justify-around pt-10'>
        <div className='rounded-lg w-40 font-bold hover:bg-slate-300'>
            {/* <Link to={'/hospital/addorgandonor'}> */}
             ORGAN DONORS
             {/* </Link> */}
            </div>
        
      </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-14 ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase dark:bg-gray-700 bg-red-800 rounded">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Age
                </th>
                <th scope="col" class="px-6 py-3">
                    Address
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Contact
                </th>
                <th scope="col" class="px-6 py-3">
                   Bloodgroup
                </th>
                <th scope="col" class="px-6 py-3">
                   Date of death
                </th>
                
                <th scope="col" class="px-6 py-3">
                
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item)=>(
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                </th>
                <td class="px-6 py-4">
                    {item.age}
                </td>
                <td class="px-6 py-4">
                    {item.address}
                </td>
                <td class="px-6 py-4">
                    {item.email}
                </td>
                <td class="px-6 py-4">
                    {item.contact}
                </td>
                <td class="px-6 py-4">
                    {item.bloodgroup}
                </td>
                <td class="px-6 py-4">
                    {item.dateofdeath}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <Link to={`/hospital/vworgandonor/${item._id}`}>
                        View
                        </Link>
                        </a>
                </td>
            </tr>
            
            ))} </tbody>
    </table>
</div>
    </div>
  )
}
