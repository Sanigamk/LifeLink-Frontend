import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Myorganstatusviewpage = () => {
    const [data,setData]=useState([''])
    let { id } = useParams()
    console.log(id);
    useEffect (()=>{
        let fetchdata = async ()=>{
            let response = await axios.get(`https://lifelink-backend-evaw.onrender.com/hospital/viewmyorgannrqststatusviewpage/${id}`)
            console.log(response.data,'data')
            setData(response.data)
        }
        fetchdata()

    },[])
  return (
    <div className='image3'>
        <div class="bg-transparent w-[50%] m-auto overflow-hidden shadow rounded-lg border mt-10">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {data.hosp?.name}
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        {data.hosp?.place} {data.hosp?.district}
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                               Contact
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                               {data.hosp?.contact}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                               {data.hosp?.email}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Liscence Proof
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {/* {data.hosp?.proof} */}
                                <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.hosp?.proof}`} download> <img className='w-[80px] h-20' src={`https://lifelink-backend-evaw.onrender.com/uploads/${data.hosp?.proof}`} alt='click to view & download pdf' /></a>
                           <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.hosp?.proof}`} download> <span> </span> </a>
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Patient Name
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.vwsendorganrqstpage?.patientname}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Age
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                               {data.vwsendorganrqstpage?.age}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Docter
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                               {data.vwsendorganrqstpage?.doctername}<br/>

                               <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.vwsendorganrqstpage?.prescription}`} download> <img className='w-[80px] h-20' src={`https://lifelink-backend-evaw.onrender.com/uploads/${data.vwsendorganrqstpage?.prescription}`} alt='click to view & download pdf' /></a>
                           <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.vwsendorganrqstpage?.prescription}`} download> <span> </span> </a>
                               {/* {data.vwsendorganrqstpage?.prescription} */}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Patient Id Proof
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.vwsendorganrqstpage?.patientidproof}`} download> <img className='w-[80px] h-20' src={`https://lifelink-backend-evaw.onrender.com/uploads/${data.vwsendorganrqstpage?.patientidproof}`} alt='click to view & download pdf' /></a>
                           <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.vwsendorganrqstpage?.patientidproof}`} download> <span> </span> </a>
                               {/* {data.vwsendorganrqstpage?.patientidproof} */}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Adhaar Number
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.vwsendorganrqstpage?.adhaarnumber}

                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
    </div>
  )
}
