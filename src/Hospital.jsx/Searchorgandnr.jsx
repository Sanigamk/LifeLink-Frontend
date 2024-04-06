import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

export const Searchorgandnr = () => {

    let bid=localStorage.getItem('id')
    const [data, setData] = useState([''])
    
    const [refresh,setrefresh]=useState(false)
    let {id}=useParams()
    console.log(id);

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:5000/hospital/srchorgandonor/${localStorage.getItem("id")}`)
            console.log(response)
            setData(response.data)
        }
        fetchdata()
    }, [refresh])

    let handleSubmit = async (did,statuss) => {

        setrefresh(!refresh)
        let response = await axios.put(`http://localhost:5000/hospital/assignorgan/${id}`, {status:statuss ,donorId:did, AcceptedId:bid})
        console.log(response);
       
    }
  return (
    <div className='images2 w-[100%] h-[42rem]'>
        <form class="max-w-lg mx-auto pb-10 pt-10">
    <div class="flex items-center">
       <div className='flex flex-wrap flex-row sm:gap-10 text-white '>
        {/* <button  onClick={dropdown} id="dropdown-button" data-dropdown-toggle="dropdown" className="h-[42px] inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-700 border border-gray-300 rounded-s-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-700 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button> */}
  <select name="" id="" className='h-[41px] inline-flex items-center py-2.5 text-[100%] px-4  text-sm font-medium text-center rounded-lg  bg-red-800 border border-gray-300  hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-slate-400 dark:bg-gray-950/50 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700'>
  <option disabled value="" >Select Organ</option>

    <option value="">Kidney</option>
    <option value="">Liver</option>
  </select> 
  <select name="" id="" className='h-[41px] inline-flex items-center py-2.5 text-[100%] px-4  text-sm font-medium text-center rounded-lg  bg-red-800 border border-gray-300  hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700'>
    <option disabled value="" >Select Blood</option>
    <option value="">B+</option>
    <option value="">O-ve</option>
  </select> 
  <button className='bg-red-800 text-white p-2 w-20 rounded-lg'>Search</button>
</div>
        
    </div>
</form>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-14 mt-10 ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase dark:bg-gray-700 bg-red-800 rounded">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Age
                </th>
                <th scope="col" class="px-6 py-3">
                    Place
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Contact
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
                
                <th scope="col" class="px-6 py-3">
                
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item)=>(
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {item.name}
                </th>
                <td class="px-6 py-4">
                    {item.age}
                </td>
                <td class="px-6 py-4">
                    {item.place} 
                </td>
                <td class="px-6 py-4">
                     {item.email}
                </td>
                <td class="px-6 py-4">
                    {item.contact}
                </td>
                <td class="px-6 py-4">
                    {item.status}
                </td>
                <td class="px-6 py-4">
                <button onClick={()=>handleSubmit(item._id,'ASSIGNED')} className='bg-red-800 w-20 rounded'>ASSIGN</button>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <Link to={`/hospital/assignorgan/${item._id}`}>
                        View
                        </Link>
                        </a>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
</div>
    </div>
  )
}
