import React, { useState } from 'react'
import axios from 'axios'

export const Myorgan = () => {
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
        formData.append('patientname', data.patientname);
        formData.append('age', data.age);
        formData.append('address',data.address);
        formData.append('email',data.email);
        formData.append('contact',data.contact);
        formData.append('adhaarnumber',data.adhaarnumber)
        formData.append('organ',data.organ);
        formData.append('bloodgroup',data.bloodgroup);
        formData.append('doctername',data.doctername);
        formData.append('prescription',data.prescription);
        formData.append('bystander',data.bystander)
        formData.append('bystandercontact',data.bystandercontact)
        formData.append('patientidproof',data.patientidproof)
        formData.append('healthcertificate', data.healthcertificate);
        formData.append('userId', id)
  
            event.preventDefault()
            console.log(data);
           let response=await axios.post(`http://localhost:5000/hospital/myorganrqst`,formData,{
           headers: {
            'Content-Type': 'multipart/form-data'  // Set the content type for FormData
          }
         })
           console.log(response);
            
        }
  return (
    <div className='images2 w-[100%]'>
        <form onSubmit={handleSubmit} class="w-[100%] ">

<div className='flex w-[100%] justify-center sm:gap-10 mt-10'>

    <div className='w-[25%]'>

        <div class="mb-5">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient name :</label>
            <input onChange={handleChange} name="patientname" type="text" id="name" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
        <div class="mb-5">
            <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age :</label>
            <input onChange={handleChange} name="age" type="number" id="age" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
        <div class="mb-5">
            <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
            <input onChange={handleChange} name="email" type="email" id="place" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact :</label>
            <input onChange={handleChange} name="contact" type="number" id="place" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
        </div>
        <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address:</label>
            <input onChange={handleChange} name="address" type="text" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
        </div>
       
        <div class="mb-5">
            {/* <img className='w-[80px] h-14' src={`http://localhost:5000/uploads/${userData.healthcertificate}`} alt="" /> */}
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Health certificate :</label>
            <input onChange={handlefile} name="healthcertificate" type="file" id="img" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
        </div>
        
        <div class="mb-5">
            <label for="house name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adhaar number:</label>
            <input onChange={handleChange} name="adhaarnumber" type="text" id="house name" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
        
    </div>
    <div className='w-[25%]'>

    <div class="mb-5">
            <label for="post" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood group :</label>
            <input onChange={handleChange} name="bloodgroup" type="text" id="post" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
        </div>

        <div class="mb-5">
            <label for="organ" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organ:</label>
            <input onChange={handleChange} name="organ" type="text" id="house name" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
        <div class="mb-5">
            <label for="doctername" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Docter name:</label>
            <input onChange={handleChange} name="doctername" type="text" id="post" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
        </div>
        
        <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">prescription :</label>
            <input onChange={handleChange} name="prescription" type="file" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
        </div>
        <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">patientidproof :</label>
            <input onChange={handlefile} name="patientidproof" type="file" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
        </div>
        <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bystander :</label>
            <input onChange={handleChange} name="bystander" type="text" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
        </div>
        <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bystander contact:</label>
            <input onChange={handleChange} name="bystandercontact" type="text" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
        </div>
       
        
      
        <div class="flex flex-wrap mt-5 items-center pt-7 justify-around ">

            <button type="submit" class="text-white  bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUMBIT</button>
           
        </div>
    </div>
    <div>

    </div>

</div>




</form>
    </div>
  )
}
