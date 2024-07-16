import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

export const Manageorgandonr = () => {
    const [data,setData]=useState([''])
    const [refresh, setrefresh] = useState(false)

    let {id}=useParams()
    console.log(id);


    useEffect(()=>{
        let fetchdata = async ()=>{
            let response=await axios.get(`https://lifelink-backend-evaw.onrender.com/user/managorgandonor/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[refresh])

    let handleSubmit = async (status, id) => {
        setrefresh(!refresh)

        // console.log(data);
        let response = await axios.put(`https://lifelink-backend-evaw.onrender.com/user/mngorgandnr/${id}`, { ...data, status: status })
        console.log(response);
        setData('')

    }


    return (
        <div className='image3'>
            <div class="bg-transparent w-[50%] m-auto overflow-hidden shadow rounded-lg border mt-10">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {data.managorgan?.name}
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    {data.managorgan?.address}
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Age
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.managorgan?.age}
                            </dd>
                        </div>

                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.managorgan?.email}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Adhaarnumber
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.managorgan?.adhaarnumber}
                            </dd>
                        </div>
                        
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Contact
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.managorgan?.contact}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Bloodgroup
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.managorgan?.bloodgroup}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Date of birth
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.managorgan?.dateofbirth}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Nominie
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.managorgan?.nominie}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Nominie Relation
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.managorgan?.nominierelation}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Nominie Contact
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.managorgan?.nominiecontact}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Height
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.managorgan?.height}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Weight
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.managorgan?.weight}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                organ for donation before death
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                           {data.managorgan?.organsBeforeDeath.liver && <h2>liver</h2>}
                           {data.managorgan?.organsBeforeDeath.heart && <h2>heart</h2>}
                           {data.managorgan?.organsBeforeDeath.kidney && <h2>kidney</h2>}
                           {data.managorgan?.organsBeforeDeath.lung && <h2>lung</h2>}
                           {data.managorgan?.organsBeforeDeath.pancreas && <h2>pancreas</h2>}
                           
                            <span></span>
                           

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                organ for donation After death
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.managorgan?.organsAfterDeath.heart && <h2>heart</h2>}
                                {data.managorgan?.organsAfterDeath.liver && <h2>liver</h2>}
                                {data.managorgan?.organsAfterDeath.kidney && <h2>kidney</h2>}
                                {data.managorgan?.organsAfterDeath.lung && <h2>lung</h2>}
                                {data.managorgan?.organsAfterDeath.pancreas && <h2>pancreas</h2>}
                                {data.managorgan?.organsAfterDeath.tissue && <h2>tissue</h2>}
                                {data.managorgan?.organsAfterDeath.bone && <h2>bone</h2>}
                                {data.managorgan?.organsAfterDeath.skin && <h2>skin</h2>}


                            </dd>
                        </div>
                        
                        
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Signature
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.managorgan?.signature}`} download>  <span> {data.managorgan?.signature}</span></a>

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Conformation certificate
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.managorgan?.conformationcertificate}`} download>  <span> {data.managorgan?.conformationcertificate} </span></a>

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Health Certificate
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.managorgan?.healthcertificate}`} download> <span> {data.managorgan?.healthcertificate} </span></a>

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Hospital Details
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.hospital?.name} {data.hospital?.district}

                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className='flex flex-wrap gap-20 justify-center my-48 text-white font-bold'>
                <button onClick={() => { handleSubmit('Accepted', data.managorgan?._id) }} href="#" className='bg-red-800 w-20 rounded'>ACCEPT</button>
                <button onClick={() => { handleSubmit('Rejected', data.managorgan?._id) }} href="#"  className='bg-red-800 w-20 rounded'>REJECT</button>
            </div>
        </div>
    )
}
