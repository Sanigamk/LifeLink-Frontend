import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Vwhist = () => {
    let id=localStorage.getItem('id')
    const [data,setData]=useState([''])
    useEffect(()=>{
        let fetchdata = async ()=>{
            let response = await axios.get(`https://lifelink-backend-evaw.onrender.com/users/uservwsendrqst/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()

    },[])
  return (
    <div className='images2 w-[100%]'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-14 ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 text-white bg-red-800 rounded">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Hospital name
                </th>
                <th scope="col" class="px-6 py-3">
                    Place
                </th>
                <th scope="col" class="px-6 py-3">
                    District
                </th>
                <th scope="col" class="px-6 py-3">
                    Blood
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item)=>(
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.hospitalname}
                </th>
                <td class="px-6 py-4">
                    {item.place}
                </td>
                <td class="px-6 py-4">
                    {item.district}
                </td>
                <td class="px-6 py-4">
                    {item.bloodgroup}
                </td>
                <td class="px-6 py-4">
                    {item.status}
                </td>
                <td class="px-6 py-4">
                    <Link to={`/user/detail/${item._id}`}>
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a></Link>
                </td>
            </tr>
        ))}  
        </tbody>
    </table>
</div>
    </div>
  )
}
