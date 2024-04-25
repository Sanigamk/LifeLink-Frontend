import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Managehospital = () => {

    const [data, setData] = useState([''])
    const [refresh, setrefresh] = useState(false)
    let { id } = useParams()
    console.log(id);
    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:5000/user/mnghos/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    }, [refresh])

    let handleSubmit = async (status, id) => {
        setrefresh(!refresh)
        let response = await axios.put(`http://localhost:5000/user/mnghosptl/${id}`, { ...data, status: status })
        console.log(response);
        setData('')
    }


    return (
        <div className='main image3'>
            <div class="bg-transparent w-[50%] m-auto overflow-hidden shadow rounded-lg border">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {data.name}
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        {data.district} {data.place}
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Liscence proof
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a href={`http://localhost:5000/uploads/${data.proof}`} download> <img className='h-[45px] w-[50px]' src={`http://localhost:5000/uploads/${data.proof}`} alt="" /> </a>
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Liscence no
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.liscence}
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
                                Contact
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.contact}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Post office
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.postoffice}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Pin
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.pin}

                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className='flex flex-wrap gap-20 justify-center my-48 text-white font-bold'>
                <button onClick={() => { handleSubmit('Accepted', data._id) }} href="#" className='bg-red-800 w-20 rounded'>ACCEPT</button>
                <button onClick={() => { handleSubmit('Accepted', data._id) }} href="#" className='bg-red-800 w-20 rounded'>REJECT</button>
            </div>


        </div>
    )
}
