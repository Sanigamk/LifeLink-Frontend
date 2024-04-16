import axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Vwpagehosrqstorgn = () => {

    let {id}=useParams()
    console.log(id);

    const [refresh, setrefresh] = useState(false)
    const [data, setdata] = useState('')

    useEffect(()=>{
        let fetchdata = async ()=>{
            let response=await axios.get(`http://localhost:5000/organdonor/vwpagehosrequest/${id}`)
            console.log(response.data)
            setdata(response.data)
        }
        fetchdata()
    },[refresh])

    let handleSubmit = async (status) => {
        setrefresh(!refresh)
        let response = await axios.put(`http://localhost:5000/organdonor/mnghosptlorganrqst/${id}`, {status:status})
        console.log(response);
        // setData('')
    }
  return (
    <div className='image3'>
        <div class="bg-transparent w-[50%] m-auto overflow-hidden shadow rounded-lg border">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {data.hos?.name}
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        {data.hos?.distict} {data.hos?.place} 
                        {data.hos?.postoffice}
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">

                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.hos?.email}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Certificate
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                view
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Patient name
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                               {data.reqDetails?.patientname && <span>{data.reqDetails.patientname}</span>} 
                               {data.vwpagehosreq?.patientname && <span>{data.vwpagehosreq.patientname}</span>} 
                               {/* {data.reqDetails ? <span>{data?.rereqDetails?.patientname}</span> : <span>{data?.vwpagehosreq?.patientname}</span>} */}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Age
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.reqDetails?.age && <span>{data.reqDetails.age}</span>} 
                            {data.vwpagehosreq?.age && <span>{data.vwpagehosreq.age}</span>} 

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Address
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.reqDetails?.address && <span>{data.reqDetails.address}</span>}
                            {data.vwpagehosreq?.address && <span>{data.vwpagehosreq.address}</span>} 

                            </dd>
                        </div>
                        
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Blood group & Organ
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.reqDetails?.bloodgroup && <span>{data.reqDetails.bloodgroup}</span>}
                            {data.reqDetails?.organ && <span>{data.reqDetails.organ}</span>}
                            {data.vwpagehosreq?.bloodgroup && <span>{data.vwpagehosreq.bloodgroup}</span>}
                            {data.vwpagehosreq?.organ && <span>{data.vwpagehosreq.organ}</span>}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Date
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.reqDetails?.date && <span>{data.reqDetails.date}</span>}
                            {data.vwpagehosreq?.date && <span>{data.vwpagehosreq.date}</span>}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Docter
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.reqDetails?.doctername && <span>{data.reqDetails.doctername}</span>}
                            {data.vwpagehosreq?.doctername && <span>{data.vwpagehosreq.doctername}</span>}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Prescription
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.reqDetails?.prescription && <span>{data.reqDetails.prescription}</span>}
                            {data.vwpagehosreq?.prescription && <span>{data.vwpagehosreq.prescription}</span>}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Patient id proof
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.reqDetails?.patientidproof && <span>{data.reqDetails.patientidproof}</span>}
                            {data.vwpagehosreq?.patientidproof && <span>{data.vwpagehosreq.patientidproof}</span>}

                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className='flex flex-wrap gap-20 justify-center my-48 text-white font-bold'>
                <button  onClick={()=>{handleSubmit('Accepted')}} href="#" className='bg-red-800 w-20 rounded'>ACCEPT</button>
                <button  onClick={()=>{handleSubmit('Rejected')}} href="#" className='bg-red-800 w-20 rounded'>REJECT</button>
            </div>
    </div>
  )
}
