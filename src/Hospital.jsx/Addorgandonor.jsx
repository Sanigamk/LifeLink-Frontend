import React, { useState } from 'react'
import axios from 'axios'

export const Addorgandonor = () => {
  let id=localStorage.getItem('id')
  const [data,setData]=useState('')

  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
    console.log(data);
  }
    
    
     
        let handleChange=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
        let handleSubmit=async (event)=>{
          let formData = new FormData();
        formData.append('name', data.name);
        formData.append('age', data.age);
        formData.append('place', data.place);
        formData.append('email', data.email);
        formData.append('contact', data.contact);
        formData.append('housename',data.housename);
        formData.append('postoffice',data.postoffice);
        formData.append('pin',data.pin);
        formData.append('district',data.district);
        formData.append('organ',data.organ);
        formData.append('witnessname',data.witnessname);
        formData.append('witnesscontact',data.witnesscontact);
        formData.append('password', data.password);
        formData.append('healthcertificate', data.healthcertificate);
        formData.append('conformationcertificate', data.conformationcertificate);
        formData.append('userType', 'hospital');
  
            event.preventDefault()
            console.log(data);
           let response=await axios.post('http://localhost:5000/hospital/addorgan',formData,{
            headers: {
              'Content-Type': 'multipart/form-data'  // Set the content type for FormData
            }
           })
           console.log(response);
            
            
        }
  return (
    <div className='images2 w-[100%] h-[43rem] pt-5 '>
      <div className='text-black font-bold text-center'>ADD ORGAN DONOR</div>
        <form onSubmit={handleSubmit} class="w-[100%] pt-8">

<div className='flex w-[100%] justify-center sm:gap-10'>

  <div className='w-[25%]'>

    <div class="mb-5">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name :</label>
      <input onChange={handleChange} value={data.name} name="name" type="name" id="name" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
    </div>
    <div class="mb-5">
      <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age :</label>
      <input onChange={handleChange} value={data.age} name="age" type="number" id="age" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Place :</label>
      <input onChange={handleChange} value={data.place} name="place" type="text" id="place" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
      <input onChange={handleChange} value={data.email} name="email" type="email" id="place" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact :</label>
      <input onChange={handleChange} value={data.contact} name="contact" type="number" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Health certificate :</label>
      <input onChange={handlefile} name="healthcertificate" type="file" id="file" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
  </div>
  <div className='w-[25%]'>

    <div class="mb-5">
      <label for="house name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">House name :</label>
      <input onChange={handleChange} value={data.housename} name="housename" type="text" id="house name" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
    </div>
    <div class="mb-5">
      <label for="post" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post office :</label>
      <input onChange={handleChange} value={data.postoffice} name="postoffice" type="text" id="post" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="pin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pin :</label>
      <input onChange={handleChange} value={data.pin} name="pin" type="number" id="pin" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District :</label>
      <input onChange={handleChange} value={data.district} name="district" type="text" id="district" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conformation certificate :</label>
      <input onChange={handlefile} name="conformationcertificate" type="file" id="district" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organ :</label>
      <input onChange={handleChange} value={data.organ} name="organ" type="text" id="district" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Witness :</label>
      <input onChange={handleChange} value={data.witnessname} name="witnessname" type="text" id="district" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">witness contact:</label>
      <input onChange={handleChange} value={data.witnesscontact} name="witnesscontact" type="number" id="district" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
  </div>
  
</div>




<div class="flex flex-wrap mb-5 mt-5">

<button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>

</div>
</form>
    </div>
  )
}
