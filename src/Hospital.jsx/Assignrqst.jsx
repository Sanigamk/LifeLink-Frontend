import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Assignrqst = () => {

    const [data,setData]=useState([''])
const [refresh,setrefresh]=useState(false)
let {id}=useParams()
console.log(id);
useEffect(()=>{
    let fetchdata = async ()=>{
        let response=await axios.get(`http://localhost:5000/hospital//mnghosorganrqst/${id}`,data)
        console.log(response.data)
        setData(response.data)
    }
    fetchdata()
},[refresh])

// let handleSubmit = async (status) => {
//     setrefresh(!refresh)
//     let response = await axios.put(`http://localhost:5000/hospital/mnghosptlbldrqst/${id}`, {status:status})
//     console.log(response);
    // setData('')
// }
    return (
        <div className='image3 w-[100%]'>
            <div className="w-full h-[250px] pt-40 font-bold text-[20px]">

            <div class="bg-transparent w-[50%] m-auto overflow-hidden shadow rounded-lg border">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {data.hosptl?.name}
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        {data.hosptl?.district} {data.hosptl?.place}
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">

                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.hosptl?.email}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Contact
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.hosptl?.contact}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Proof
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a target='_blank' href={`http://localhost:5000/uploads/${data.hosptl?.proof}`} download> <img className='w-[80px] h-20' src={`http://localhost:5000/uploads/${data.hosptl?.proof}`} alt='click to view & download pdf' /></a>
                           <a target='_blank' href={`http://localhost:5000/uploads/${data.hosptl?.proof}`} download> <span> </span> </a>
                            {/* <a target='_blank' href={`http://localhost:5000/uploads/${data.hosptl?.proof}`} download> <span>{data.hosptl?.proof}</span></a> */}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Patientname
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.mnghosorganreq?.patientname}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Age
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.mnghosorganreq?.age}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Blood group
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.mnghosorganreq?.bloodgroup}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                organ
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.mnghosorganreq?.organ}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Healthcertificate
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a target='_blank' href={`http://localhost:5000/uploads/${data.mnghosorganreq?.healthcertificate}`} download> <img className='w-[80px] h-20' src={`http://localhost:5000/uploads/${data.mnghosorganreq?.healthcertificate}`} alt='click to view & download pdf' /></a>
                           <a target='_blank' href={`http://localhost:5000/uploads/${data.mnghosorganreq?.healthcertificate}`} download> <span> </span> </a>
                            {/* <a target='_blank' href={`http://localhost:5000/uploads/${data.mnghosorganreq?.healthcertificate}`} download> <span>{data.mnghosorganreq?.healthcertificate}</span></a> */}

                            </dd>
                        </div>
                        {/* <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.vwpageblddonation?.date}

                            </dd>
                        </div> */}
                    </dl>
                </div>
                </div>

            </div>

            <div className='flex flex-wrap gap-20 justify-center pb-28 my-48 text-white font-bold '>
                <button className='bg-red-800 w-28 p-4 mt-[350px] rounded'>
                    <Link to={`/hospital/Searchorgan/${data.mnghosorganreq?._id}`}>
                        ASSIGN
                    </Link>
                </button>

            </div>
        </div>
    )
}
