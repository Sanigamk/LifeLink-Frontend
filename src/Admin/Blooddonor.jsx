import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export const Blooddonor = () => {
    const [data, setData] = useState([''])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:5000/user/vwblddonor`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    }, [])
    return (
        <div className='images2 w-[100%] h-[42rem]'>
            <div className='text-center font-bold text-lg text-red-800 pt-10'>BLOOD DONOR</div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-14 ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 text-white bg-red-800 rounded">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Place
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contact
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
                            {item.name}
                            </th>
                            <td class="px-6 py-4">
                            {item.place}
                            </td>
                            <td class="px-6 py-4">
                            {item.age}
                            </td>
                            <td class="px-6 py-4">
                            {item.email}
                            </td>
                            <td class="px-6 py-4">
                            {item.contact}
                            </td>
                            <td class="px-6 py-4">
                            {item.status}
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <Link to={`/admin/viewblood/${item._id}`}>
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
