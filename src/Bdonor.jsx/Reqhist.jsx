import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Reqhist = () => {
    const [data, setData] = useState([''])
    let id = localStorage.getItem('id')
    console.log(id)

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`https://lifelink-backend-evaw.onrender.com/blooddonor/viewblddonationhist/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()

    }, [])

  return (
    <div className='images2 w-[100%]'>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-14 ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs uppercase  dark:bg-gray-700 text-white bg-red-800 rounded">
            <tr>
                <th scope="col" class="px-6 py-3">
                    District
                </th>
                <th scope="col" class="px-6 py-3">
                    Hospital name
                </th>
                <th scope="col" class="px-6 py-3">
                    Blood group
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item)=>(
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.ho?.district}
                    
                </th>
                <td class="px-6 py-4">
                    {item.ho?.name}
                    
                </td>
                <td class="px-6 py-4">
                    {item.req?.bloodgroup}
                </td>
                <td class="px-6 py-4">
                    {item.req?.date}
                </td>
                <td class="px-6 py-4">
                    {item.req?.status}
                </td>
            </tr>
        ))}   
        </tbody>
    </table>
</div>
    </div>
  )
}
