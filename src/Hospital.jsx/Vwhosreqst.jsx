import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Vwhosreqst = () => {
    let id=localStorage.getItem('id')
    console.log(id)

    const [data, setData] = useState([''])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:5000/hospital//viewhosorganrqst/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    }, [])
    return (
        <div className='images2 w-[100%] h-[42rem]'>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-14  ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase dark:bg-gray-700 bg-red-800 rounded">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Hospital Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Place
                            </th>
                            <th scope="col" class="px-6 py-3">
                                District
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Postoffice
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Pin
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>

                            <th scope="col" class="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                        <tbody>
                        {data.map((item) => (
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.hosptldet?.name}
                                </th>
                                <td class="px-6 py-4">
                                    {item.hosptldet?.place}
                                </td>
                                <td class="px-6 py-4">
                                    {item.hosptldet?.district}
                                </td>
                                <td class="px-6 py-4">
                                    {item.hosptldet?.email}
                                </td>
                                <td class="px-6 py-4">
                                    {item.hosptldet?.contact}
                                </td>
                                <td class="px-6 py-4">
                                    {item.hosptldet?.postoffice}
                                </td>
                                <td class="px-6 py-4">
                                    {item.hosptldet?.pin}
                                </td>
                                <td class="px-6 py-4">
                                    {item.req?.status}
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        <Link to={`/hospital/vieworganpage/${item.req?._id}`}>
                                            View
                                        </Link>
                                    </a>
                                </td>
                            </tr>
                          ))}
                        </tbody>
                </table>
            </div>
        </div>
    )
}
