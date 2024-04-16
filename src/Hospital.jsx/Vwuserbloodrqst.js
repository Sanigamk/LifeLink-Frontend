import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Vwuserbloodrqst = () => {
    const [data,setdata] = useState([''])
    const [refresh,setrefresh]=useState(false)
    let id=localStorage.getItem('id')
    console.log(id);
    useEffect(()=>{
        let fetchdata = async ()=>{
            let response=await axios.get('http://localhost:5000/hospital/vwuserreq')
            console.log(response.data)
            setdata(response.data)
        }
        fetchdata()
    },[refresh])
    let handleSubmit = async (status,lid) => {
        setrefresh(!refresh)
        let response = await axios.put(`http://localhost:5000/hospital/mnguserbldrqst/${lid}`, {status:status,acceptedId:id})
        console.log(response);
        // setData('')
    }
  return (
    <div className='images2 w-[100%] h-[45rem]'>
         <div className='  pt-7 ps-10 pe-10'>
                <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>BLOOD REQUEST</div>
               

                <div class="relative h-[screen] overflow-x-auto shadow-md">
                    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                        <thead class="text-xs text-white uppercase bg-red-800 border-b-2 dark:text-white">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    NAME
                                </th>
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
                                    CONTACT
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    STATUS
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ACTION
                                </th>


                            </tr>
                        </thead>
                        <tbody>
                        {data.map((item)=>( 
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
                                <td class="px-6 py-4 font-semibold">
                                    {item.user?.name}
                                </td>
                                <td class="px-6 py-4">
                                    {item.req?.hospitalname}
                                </td>
                                <td class="px-6 py-4">
                                    {item.req?.place}
                                </td>
                                <td class="px-6 py-4">
                                    {item.req?.district}
                                </td>
                                <td class="px-6 py-4">
                                    {item.req?.bloodgroup}
                                </td>
                                
                                <td class="px-6 py-4">
                                    {item.user?.contact}
                                </td>
                                
                                <td class="px-6 py-4">
                                    {item.req?.status}
                                </td>
                                <td class="px-6 py-4 flex flex-wrap flex-col gap-3">
                                    <button onClick={()=>{handleSubmit('Accepted',item.req._id)}} href="#" class="bg-slate-600 font-bold text-sm text-white hover:underline hover:bg-slate-500 p-1">Accept</button>
                                    <button onClick={()=>{handleSubmit('Rejected',item.req._id)}} href="#"class="bg-slate-600 font-bold text-sm text-white hover:underline hover:bg-slate-500 p-1" >Reject</button>
                                </td>

                            </tr>
                        ))}
                        </tbody>
                    
                    </table>
                </div>


            </div>
    </div>
  )
}
