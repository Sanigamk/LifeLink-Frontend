import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Assignorgan = () => {
    const [data,setData]=useState('')
    // const [refresh, setrefresh] = useState(false)
    let {id}=useParams()
    console.log(id);
    useEffect(()=>{
        let fetchdata = async ()=>{
            let response=await axios.get(`http://localhost:5000/hospital/viewpageorgandnrs/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[])
    return (
        <div className='image3 w-[100%]'>
            <div className="w-full h-[250px] pt-40 font-bold text-[20px]">

            <div class="bg-transparent w-[50%] m-auto overflow-hidden shadow rounded-lg border">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {data.name}
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        {data.address}
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">

                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Age
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.age}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.email}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Adhaar number
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.adhaarnumber}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Bloodgroup
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.bloodgroup}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Date of birth 
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.dateofbirth}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Height
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.height}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                weight
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                               {data.weight}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Heath Issue
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.healthissue}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Date of death & Time
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.dateofdeath}{data.time}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Reason of death
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.reasonofdeath}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                organ for donation before death
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                           {data.organsBeforeDeath?.liver && <h2>liver</h2>}
                           {data.organsBeforeDeath?.heart && <h2>heart</h2>}
                           {data.organsBeforeDeath?.kidney && <h2>kidney</h2>}
                           {data.organsBeforeDeath?.lung && <h2>lung</h2>}
                           {data.organsBeforeDeath?.pancreas && <h2>pancreas</h2>}
                           
                            <span></span>
                           

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                organ for donation After death
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.organsAfterDeath?.heart && <h2>heart</h2>}
                                {data.organsAfterDeath?.liver && <h2>liver</h2>}
                                {data.organsAfterDeath?.kidney && <h2>kidney</h2>}
                                {data.organsAfterDeath?.lung && <h2>lung</h2>}
                                {data.organsAfterDeath?.pancreas && <h2>pancreas</h2>}
                                {data.organsAfterDeath?.tissue && <h2>tissue</h2>}
                                {data.organsAfterDeath?.bone && <h2>bone</h2>}
                                {data.organsAfterDeath?.skin && <h2>skin</h2>}


                            </dd>
                        </div>
                        
                        
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Signature
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a target='_blank' href={`http://localhost:5000/uploads/${data.signature}`} download> <img className='w-[80px] h-20' src={`http://localhost:5000/uploads/${data.signature}`} alt='click to view & download pdf' /></a>
                           <a target='_blank' href={`http://localhost:5000/uploads/${data.signature}`} download> <span> </span> </a>

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Conformation certificate
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a target='_blank' href={`http://localhost:5000/uploads/${data.conformationcertificate}`} download> <img className='w-[80px] h-20' src={`http://localhost:5000/uploads/${data.conformationcertificate}`} alt='click to view & download pdf' /></a>
                           <a target='_blank' href={`http://localhost:5000/uploads/${data.conformationcertificate}`} download> <span> </span> </a>

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Health Certificate
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a target='_blank' href={`http://localhost:5000/uploads/${data.healthcertificate}`} download> <img className='w-[80px] h-20' src={`http://localhost:5000/uploads/${data.healthcertificate}`} alt='click to view & download pdf' /></a>
                           <a target='_blank' href={`http://localhost:5000/uploads/${data.healthcertificate}`} download> <span> </span> </a>

                            </dd>
                        </div>
                    </dl>
                </div>
                </div>

            </div>

            {/* <div className='flex flex-wrap gap-20 justify-center my-48 text-white font-bold'>
                <button className='bg-red-800 w-28 p-4 rounded'>ASSIGN</button>

            </div> */}
        </div>
    )
}
