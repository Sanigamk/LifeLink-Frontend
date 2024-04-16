import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Vwhosptlrqstorgan = () => {



    const [data,setdata] = useState([''])
const [refresh,setrefresh]=useState(false)

let id=localStorage.getItem('id')
    console.log(id);

    useEffect(()=>{
        let fetchdata = async ()=>{
            let response=await axios.get(`http://localhost:5000/organdonor/vwhosrequest/${id}`)
            let response1=await axios.get(`http://localhost:5000/organdonor/vwhosendrequest/${id}`)
            setdata(response.data)
            console.log(response.data)
        }
        fetchdata()
    },[refresh])
    console.log(data,'=====================');
  return (
    <div className='images2 h-[41rem]'>
        <div className='text-lg font-bold text-red-800 pt-10 text-center'>MANAGE HOSPITAL REQUEST</div>
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
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" class="px-6 py-3">
                               Proof
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
                                    {item.hospital?.name}                               </th>
                                <td class="px-6 py-4">
                                    {item.hospital?.place}
                                </td>
                                <td class="px-6 py-4">
                                    {item.hospital?.district}
                                </td>
                                <td class="px-6 py-4">
                                    {item.hospital?.email}
                                </td>
                                <td class="px-6 py-4">
                                    {item.hospital?.contact}
                                </td>
                                <td class="px-6 py-4">
                                    view
                                </td>
                                <td class="px-6 py-4">
                                    {item.request?.status}
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        <Link to={`/organdonor/viewpagehospitalrequestorgan/${item.request?._id}`}>
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
