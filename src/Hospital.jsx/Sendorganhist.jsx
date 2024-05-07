import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export const Sendorganhist = () => {
    const [data,setData]=useState([''])
    useEffect(()=>{
        let fetchdata = async ()=>{
            let response = await axios.get(`http://localhost:5000/hospital/viewhossendorganrqsthist/${localStorage.getItem("id")}`)
            console.log(response.data,'data')
            setData(response.data)
        }
        fetchdata()

    },[])
  return (
    <div className='images2 w-[100%]'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-28">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 bg-red-800 rounded">
            <tr>
                <th scope="col" class="px-6 py-3">
                    PATIENT NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    AGE
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    HEALTH CERTIFICATE
                </th> */}
                <th scope="col" class="px-6 py-3">
                    ORGAN
                </th>
                <th scope="col" class="px-6 py-3">
                    BLOODGROUP
                </th>
                <th scope="col" class="px-6 py-3">
                    STATUS
                </th>
                <th scope="col" class="px-6 py-3">
                
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item)=>(
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {item.req?.patientname && <span>{item.req?.patientname} </span>} 
                   {item.requests?.patientname && <span>{item.requests?.patientname} </span>} 
                </th>
                <td class="px-6 py-4">
                {item.req?.age && <span>{item.req?.age} </span>} 
                   {item.requests?.age && <span>{item.requests?.age} </span>}
                </td>
                {/* <td class="px-6 py-4">
                {item.req?.healthcertificate && <span>{item.req?.healthcertificate} </span>} 
                   {item.requests?.healthcertificate && <span>{item.requests?.healthcertificate} </span>}
                </td> */}
                <td class="px-6 py-4">
                {item.req?.organ && <span>{item.req?.organ} </span>} 
                   {item.requests?.organ && <span>{item.requests?.organ} </span>}
                </td>
                <td class="px-6 py-4">
                {item.req?.bloodgroup && <span>{item.req?.bloodgroup} </span>} 
                   {item.requests?.bloodgroup && <span>{item.requests?.bloodgroup} </span>}
                </td>
                <td class="px-6 py-4">
                {item.req?.status && <span>{item.req?.status} </span>} 
                   
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <Link to={`/hospital/sendorganhistpage/${item?.req?._id}`}>
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
