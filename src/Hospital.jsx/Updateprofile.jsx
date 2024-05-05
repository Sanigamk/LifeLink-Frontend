import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Updatepro = () => {
  let id=localStorage.getItem('id')
const [userData,setuserData]=useState('')
const[refresh,setrefresh]=useState(false)
const [data,setData]=useState('')


useEffect(()=>{
  let fetchdata=async ()=>{
    let response=await axios.get(`http://localhost:5000/user/vwhosprofile/${id}`)
    console.log(response.data);
    setuserData(response.data)
  }
  fetchdata()

},[refresh])

let handleChange=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
}

let handlefile=(event)=>{
  console.log(event.target.files);
  setData({...data,[event.target.name]:event.target.files[0]})
  console.log(data);
}


let handlesubmit=async (event)=>{
  event.preventDefault()
  const formData = new FormData();
  for (const key in data){
    if (data[key]){
      formData.append(key,data[key]);
    }
  }
  console.log(data);
  console.log(formData);
  let response=await axios.put(`http://localhost:5000/user/editdonorprofile/${id}`,formData,{
  headers:{
    'content-Type':'multiport/form-data'
  }
})
console.log(response);
setrefresh(!refresh)
}
  return (
    <div className='image3'>
        <form onSubmit={handlesubmit} class="w-[100%] ">

<div className='flex w-[100%] justify-center sm:gap-10 mt-28'>

  <div className='w-[25%]'>

    <div class="mb-5">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hospital name :</label>
      <input onChange={handleChange} name="name" type="text" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.name} />
    </div>
    <div class="mb-5">
      <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Place :</label>
      <input onChange={handleChange} name="place" type="text" id="age" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.place} />
    </div>
    <div class="mb-5">
      <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
      <input onChange={handleChange} name="email" type="email" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.email}/>
    </div>
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact :</label>
      <input onChange={handleChange} name="contact" type="number" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.contact} />
    </div>
    <div class="mb-5">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Liscence no :</label>
      <input onChange={handleChange} name="liscence" type="number" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.liscence}/>
    </div>
    <div class="mb-5">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
      <input onChange={handleChange} name="password" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.password}/>
    </div>
    
    
  </div>
  <div className='w-[25%]'>

  <div class="mb-5">
     <a target='_blank' href={`http://localhost:5000/uploads/${userData.proof}`} download> <img className='w-[100px] h-14' src={`http://localhost:5000/uploads/${userData.proof}`} alt='click to view & download pdf' /></a>
     <a target='_blank' href={`http://localhost:5000/uploads/${userData.proof}`} download> <span> </span> </a>
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">proof :</label>
      <input onChange={handlefile} name="proof" type="file" id="img" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"placeholder={userData.proof} />
    </div>
     
    <div class="mb-5">
      <label for="house name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post office:</label>
      <input onChange={handleChange} name="postoffice" type="text" id="house name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.postoffice} />
    </div>
    <div class="mb-5">
      <label for="post" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pin :</label>
      <input onChange={handleChange} name="pin" type="number" id="post" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.pin} />
    </div>
    <div class="mb-5">
      <label for="pin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District :</label>
      <input onChange={handleChange} name="district" type="text" id="pin" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.district} />
    </div>
    <div class="mb-5">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conform Password :</label>
      <input onChange={handleChange} name="conformpassword" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.conformpassword}/>
    </div>
    
    
<div class="flex flex-wrap mt-5 items-center pt-7 justify-around ">

<button type="submit" class="text-white  bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
<button type="submit" class="text-white  bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
</div>
  </div>
  <div>
 
  </div>
  
</div>




</form>
    </div>
  )
}
