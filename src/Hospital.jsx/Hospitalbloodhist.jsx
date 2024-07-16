import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BloodHistory } from './BloodHistory'
import axios from 'axios'

export const Hospitalbloodhist = () => {
    
    
    const [data,setData]=useState([''])
    const [drop,setdrop]=useState(false)
    let dropdown=()=>{
        setdrop(!drop)
    }
    useEffect(()=>{
        let fetchdata = async ()=>{
            let response = await axios.get(`https://lifelink-backend-evaw.onrender.com/hospital/viewhossendbldrqsthist/${localStorage.getItem("id")}`)
            console.log(response.data,'data')
            setData(response.data)
        }
        fetchdata()

    },[])
    return (
        <div className='images2 w-[100%]'>
           <BloodHistory/>
            <div className='text-black font-bold underline text-[20px]'>HOSPITAL SEND REQUEST</div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-14 ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 text-white bg-red-800 rounded">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                BLOOD GROUP
                            </th>
                            <th scope="col" class="px-6 py-3">
                                BLOOD UNIT
                            </th>
                            <th scope="col" class="px-6 py-3">
                                DATE
                            </th>
                            <th scope="col" class="px-6 py-3">
                                RECEIVED HOSPITAL NAME
                            </th>
                            <th scope="col" class="px-6 py-3">
                                DISTRICT
                            </th>
                            <th scope="col" class="px-6 py-3">
                                PROOF
                            </th>
                            <th scope="col" class="px-6 py-3">
                                STATUS
                            </th>
                            <th scope="col" class="px-6 py-3">
                                DETAILS
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item)=>(
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.req?.bloodgroup}
                            </th>
                            <td class="px-6 py-4">
                            {item.req?.bloodunit}
                            </td>
                            <td class="px-6 py-4">
                            {item.req?.date}
                            </td>
                            <th scope="col" class="px-6 py-3">
                            {item.acc?.name}
                            </th>
                            <th scope="col" class="px-6 py-3">
                            {item.acc?.district}
                            </th>
                            <td class="px-6 py-4">
                            {/* {item.acc?.proof} */}
                            {item.acc?.proof && <> <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${item.acc?.proof}`} download> <img className='w-[80px] h-20' src={`https://lifelink-backend-evaw.onrender.com/uploads/${item.acc?.proof}`} alt='click to view & download pdf' /></a>
                           <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${item.acc?.proof}`} download> <span> </span> </a> </> }
                            </td>
                            <td class="px-6 py-4">
                                {item.req?.status}
                            </td>
                            <td class="px-6 py-4">
                                <button className='hover:underline' onClick={dropdown}>View more</button>
                                { drop &&
                                 
                                 <div className=' right-[30px] text-center sm:right-[18px] p-4 w-fit bg-gray-600 text-black text-base  font-semibold rounded-lg sm:top-[60px] '>
                            <div className='flex flex-wrap justify-center gap-2 '>
                                  <p>{item.acc?.contact}</p>                            
                                  <p>{item.acc?.email}</p> 
                                  <p>{item.acc?.place}</p> 
                                  <p>{item.acc?.postoffice}</p>                           
                            </div>
                           
                                
                             

                            
                            
                          </div> 
                                
                                }
                            </td>

                        </tr>
                        
                        ))} </tbody>
                </table>
            </div>
        </div>
    )
}
