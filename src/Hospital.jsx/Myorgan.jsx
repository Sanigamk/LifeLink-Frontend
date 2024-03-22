import React, { useState } from 'react'
import axios from 'axios'

export const Myorgan = () => {
  let id=localStorage.getItem('id')
  const [data,setData]=useState('')
    
    
     
        let handleChange=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
        let handleSubmit=async (event)=>{
            event.preventDefault()
            console.log(data);
           let response=await axios.post('http://localhost:5000/hospital/myorganrqst',{...data,userId:id})
           console.log(response);
            
        }
  return (
    <div className='images2 w-[100%]'>
        <form onSubmit={handleSubmit} class="w-[100%]">

<div className='w-[25%] m-auto mt-9'>

  <div class="">
    <label for="name" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Patient name :</label>
    <input onChange={handleChange} value={data.name} name="patientname" type="text" id="name" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
  </div>
  <div class="">
    <label for="age" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Age :</label>
    <input onChange={handleChange} value={data.age} name="age"  type="text" id="age" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="">
    <label for="place" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Health certificate :</label>
    <input onChange={handleChange} value={data.healthcertificate} name="healthcertificate" type="file" id="place" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  {/* <div class="">
    <label for="email" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Hospital name:</label>
    <input onChange={handleChange} value={data.hospitalname} name="hospitalname"type="text" id="place" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div> */}
  <div class="">
    <label for="email" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Email :</label>
    <input onChange={handleChange} value={data.email} name="email" type="email" id="place" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="">
    <label for="email" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Contact :</label>
    <input onChange={handleChange} value={data.contact} name="contact" type="number" id="file" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="">
    <label for="email" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Pin :</label>
    <input onChange={handleChange} value={data.pin} name="pin" type="number" id="place" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Place :</label>
    <input onChange={handleChange} value={data.place} name="place" type="text" id="place" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">District:</label>
    <input onChange={handleChange} value={data.district} name="district" type="text" id="place" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Organ :</label>
    <input onChange={handleChange} value={data.organ} name="organ" type="text" id="place" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Blood group :</label>
    <input onChange={handleChange} value={data.bloodgroup} name="bloodgroup" type="text" id="place" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  
</div>

<div class="mb-5 mt-8 flex justify-center">

  <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>

</div>
</form>
    </div>
  )
}
