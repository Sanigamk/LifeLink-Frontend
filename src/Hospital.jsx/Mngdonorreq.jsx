import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Mngdonorreq = () => {
    const [data,setData]=useState([''])
const [refresh,setrefresh]=useState(false)
let {id}=useParams()
console.log(id);
useEffect(()=>{
    let fetchdata = async ()=>{
        let response=await axios.get(`https://lifelink-backend-evaw.onrender.com/hospital/vwpageblddonation/${id}`)
        console.log(response.data)
        setData(response.data)
    }
    fetchdata()
},[refresh])

let handleSubmit = async (status) => {
    setrefresh(!refresh)
    let response = await axios.put(`https://lifelink-backend-evaw.onrender.com/hospital/mngblddonordonationreq/${id}`, {status:status})
    console.log(response);
   
}
  return (
    <div className='image3 h-[40rem]'>
        <div class="bg-transparent w-[50%] m-auto overflow-hidden shadow rounded-lg border">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {data.donor?.name}
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500 font-medium text-gray-900">
                        {data.donor?.district} {data.donor?.place}
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">

                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd class="mt-1 text-sm font-medium text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.donor?.email}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Contact
                            </dt>
                            <dd class="mt-1 text-sm font-medium text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.donor?.contact}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Certificate
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 size-16">
                            <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.donor?.healthcertificate}`} download> <img className='w-[80px] h-20' src={`https://lifelink-backend-evaw.onrender.com/uploads/${data.donor?.healthcertificate}`} alt='click to view & download pdf' /></a>
                           <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.donor?.healthcertificate}`} download> <span> </span> </a>
                            {/* <a href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.donor?.healthcertificate}`} download> <img src={`https://lifelink-backend-evaw.onrender.com/uploads/${data.donor?.healthcertificate}`} alt="" /></a> */}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Blood group
                            </dt>
                            <dd class="mt-1 text-sm font-medium text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.vwpageblddonation?.bloodgroup}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Weight in kg
                            </dt>
                            <dd class="mt-1 text-sm font-medium text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.donor?.weight}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                height in cm
                            </dt>
                            <dd class="mt-1 text-sm font-medium text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.donor?.height}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Date
                            </dt>
                            <dd class="mt-1 text-sm font-medium text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.vwpageblddonation?.date}

                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

<div className='flex flex-wrap gap-20 justify-center my-48 text-white font-bold mt-72'>
<button onClick={()=>{handleSubmit('Accepted')}} href="#" className='bg-red-800 w-20 rounded'>ACCEPT</button>
<button onClick={()=>{handleSubmit('Rejected')}} href="#" className='bg-red-800 w-20 rounded'>REJECT</button>
</div>
    </div>
  )
}
