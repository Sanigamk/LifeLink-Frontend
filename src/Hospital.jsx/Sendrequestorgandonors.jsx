import axios  from 'axios'
import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import { toast } from 'react-toastify'

export const Sendrequestorgandonors = () => {
   
    const [data,setData]=useState('')


    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})

    }
    let hid=localStorage.getItem('id')
    let {id}=useParams()

    let handlefile=(event)=>{
      console.log(event.target.files);
      setData({...data,[event.target.name]:event.target.files[0]})
      console.log(data);
    }

    let handleSubmit=async (event)=>{
      
        event.preventDefault()
        const formData = new FormData();
  for (const key in data){
    if (data[key]){
      formData.append(key,data[key]);
    }
  }
  
  

  formData.append('hospitalId',hid)
formData.append('organdonorId',	id)
        console.log(data);
       let response=await axios.post('https://lifelink-backend-evaw.onrender.com/hospital/hossendrqsttoorgandonor',formData,{
        headers:{
          'content-Type':'multiport/form-data'
        }
      })
       console.log(response);
        
       toast.success("successfully send request")
    console.log(data);
    }



  return (
    <div className='image3 w-[100%]'>
        <div className='text-black font-bold text-center'>ADD ORGAN DONOR</div>
      <form  onSubmit={handleSubmit} class="w-[100%] pt-8">

        <div className='flex w-[100%] justify-center sm:gap-10'>

          <div className='w-[25%]'>

            <div class="mb-5">
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient name :</label>
              <input onChange={handleChange} value={data.patientname} pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed"  name="patientname" type="name" id="name" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required />
            </div>
            <div class="mb-5">
              <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age :</label>
              <input onChange={handleChange} value={data.age} name="age" type="text" pattern="[0-9]{2}" maxLength={2} title="Please enter a age" id="age" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div class="mb-5">
              <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Housename :</label>
              <input  onChange={handleChange} value={data.housename} pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" name="housename" type="text" id="place" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div class="mb-5">
              <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postoffice :</label>
              <input  onChange={handleChange} value={data.postoffice} pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" name="postoffice" type="text" id="place" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div class="mb-5">
              <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pin :</label>
              <input onChange={handleChange} value={data.pin}  name="pin" pattern="[0-9]{6}" maxLength={6} title="Please enter a valid 6-digit PIN code" type="text" id="place" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div class="mb-5">
              <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Place :</label>
              <input  onChange={handleChange} value={data.place} pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" name="place" type="text" id="place" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
              <input  onChange={handleChange} value={data.email} name="email" type="email" id="place" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            
            
          </div>
          <div className='w-[25%]'>
          <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact :</label>
              <input  onChange={handleChange} value={data.contact} name="contact" pattern="[0-9]{10}" title="Please enter a valid phone number" maxLength={10} type="tel" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
          <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Health certificate :</label>
              <input  onChange={handlefile} value={data.healthcertificate} name="healthcertificate" type="file" id="file" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>

            <div class="mb-5">
              <label for="house name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organ :</label>
              <input  onChange={handleChange} value={data.organ} name="organ" pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" type="text" id="house name" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required />
            </div>
            <div class="mb-5">
              <label for="post" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bloodgroup :</label>
              {/* <input  onChange={handleChange} value={data.bloodgroup} name="bloodgroup" type="text" id="post" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required /> */}
              <select onChange={handleChange} name='bloodgroup'>
                    <option >Select Blood Group</option>
                    <option value="AB+ve"> AB+ve</option>
                    <option value="AB-ve"> AB-ve</option>
                    <option value="A+ve"> A+ve</option>
                    <option value="A-ve"> A-ve</option>
                    <option value="B+ve"> B+ve</option>
                    <option value="B-ve"> B-ve</option>
                    <option value="O-ve"> O-ve</option>
                    <option value="O+ve"> O+ve</option>
                  </select>
            </div>
            <div class="mb-5">
              <label for="pin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Docter name:</label>
              <input  onChange={handleChange} value={data.doctername} name="doctername" pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed"  type="text" id="pin" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            
            <div class="mb-5">
              <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prescription:</label>
              <input onChange={handlefile}  name="prescription" type="file" id="district" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div class="mb-5">
              <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient id proof :</label>
              <input  onChange={handlefile}  name="patientidproof" type="file" id="district" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
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
