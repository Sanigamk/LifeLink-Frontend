import React, { useState } from 'react'
import axios from 'axios'

export const Reqstblood = () => {
  let id=localStorage.getItem('id')
  const [data,setData]=useState('')
    
    
     
        let handleChange=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
        let handleSubmit=async (event)=>{
            event.preventDefault()
            console.log(data);
           let response=await axios.post('http://localhost:5000/college/cllgsendrqst',{...data,userId:id})
           console.log(response);
            
        }
  return (
    <div className='image3'>
        <form onSubmit={handleSubmit} class="w-[100%]">

<div className='w-[25%] m-auto mt-24'>

  <div class="mb-5">
    <label for="name" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">District :</label>
    <select onChange={handleChange} name="district" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
        <option disabled value="">select</option>
        <option value="">Kozhikode</option>
    </select>

  </div>
  <div class="mb-5">
    <label for="age" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Hospital :</label>
    <select onChange={handleChange} name="hospitalname" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
        <option disabled value="">select</option>
        <option value="">Aster mims</option>
    </select>
  </div>
  <div class="mb-5">
    <label for="place" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Discription :</label>
    <input onChange={handleChange} value={data.discription} name="discription" type="text" id="place" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-5">
    <label for="place" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Camp name :</label>
    <input onChange={handleChange} value={data.campname} name="campname" type="text" id="place" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Date :</label>
    <input onChange={handleChange} value={data.date} name="date" type="date" id="place" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  
</div>

<div class="mb-5 mt-8 flex justify-center">

  <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>

</div>
</form>
    </div>
  )
}
