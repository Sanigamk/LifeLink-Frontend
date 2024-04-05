import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BloodHistory } from './BloodHistory'
import axios from 'axios'

export const Vwreivdbloodhist = () => {

    let id = localStorage.getItem('id')
    console.log(id)

    const [data, setData] = useState([''])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:5000/hospital/viewhosreceivdbldrqsthist/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    }, [])

    return (
        <div className='images2 w-[100%]'>
            <BloodHistory />
            <div className='text-black font-bold text-[20px] underline'>HOSPITAL RECEIVED REQUEST</div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-14 ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 text-white bg-red-800 rounded">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                HOSPITAL NAME
                            </th>
                            <th scope="col" class="px-6 py-3">
                                PLACE
                            </th>
                            <th scope="col" class="px-6 py-3">
                                DISTRICT
                            </th>
                            <th scope="col" class="px-6 py-3">
                                BLOOD GROUP
                            </th>
                            <th scope="col" class="px-6 py-3">
                                BLOOD UNIT
                            </th>
                            <th scope="col" class="px-6 py-3">
                                DATE
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <>
                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.hosdetail?.name}
                                    </th>
                                    <td class="px-6 py-4">
                                    {item.hosdetail?.place}
                                    </td>
                                    <td class="px-6 py-4">
                                    {item.hosdetail?.district}
                                    </td>
                                    <th scope="col" class="px-6 py-3">
                                    {item.req?.bloodgroup}
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                    {item.req?.bloodunit}
                                    </th>
                                    <td class="px-6 py-4">
                                        {item.req?.date}
                                    </td>

                                </tr>

                            </>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>

    )
}
