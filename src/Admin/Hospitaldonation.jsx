import { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import  axios  from 'axios'

export const Hospitaldonation = () => {
    const [drop, setdrop] = useState(false)
    const [myorganRequest, setorganRequest] = useState(false)
    const [bloodRequest, setbloodRequest] = useState(false)

    const dropdown = () => {
        setdrop(!drop)
        setorganRequest(false)
        setbloodRequest(false)
    }
    const [data, setData] = useState([''])
    let id = localStorage.getItem('id')
    console.log(id)

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`https://lifelink-backend-evaw.onrender.com/user/adminvwblooddonation/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()

    }, [])

   
  return (
    <div className='images2 h-[41rem]'>
        <div className='line flex flex-wrap translate-x-0 gap-10 justify-around pt-10'>
        <button className='bg-white rounded-lg w-24 font-bold'>
        <Link to={'/admin/donations'}>
            Donor
        </Link>
            </button>
        <button onClick={dropdown} className='bg-slate-400 rounded-lg w-24 font-bold'><span> hospital </span></button>
        {
                        drop &&
                        <div>
                        <div>
                        {/* <Link to={'/admin/hospitaldonation'}> */}
                        <span>Blood</span>
                        {/* </Link> */}
                        </div>
                        <div>
                        <Link to={'/admin/hospitalorgandonation'}>
                        <span>Organ</span>
                        </Link>
                        </div>
                        </div>
        }
        <button className='bg-white rounded-lg w-24 font-bold'>
        <Link to={'/admin/collegedonation'}>
            College
            </Link>
            </button>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-14 ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 text-white bg-red-800 rounded">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Donate hospital
                </th>
                <th scope="col" class="px-6 py-3">
                    Received hospital
                </th>
                <th scope="col" class="px-6 py-3">
                    Bloodgroup
                </th>
                <th scope="col" class="px-6 py-3">
                    Bloodunit
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                
            </tr>
        </thead>
        <tbody>
        {data.map((item)=>(
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.hosptls?.name}
                </th>
                <td class="px-6 py-4">
                    {item.Accptdhos?.name}
                </td>
                <td class="px-6 py-4">
                    {item.req?.bloodgroup}
                </td>
                <td class="px-6 py-4">
                    {item.req?.bloodunit}
                </td>
                <td class="px-6 py-4">
                    {item.req?.date}
                </td>
                
            </tr>
        ))}
        </tbody>
    </table>
</div>
    </div>
  )
}
