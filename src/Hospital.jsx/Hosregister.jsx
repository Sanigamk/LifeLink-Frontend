import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const Hosregister = () => {
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
          try{
          if(data.conformpassword!=data.password){
            toast.error('password doesnt match')
          }
          else{

          let formData = new FormData();
          formData.append('name', data.name);
          formData.append('place', data.place);
          formData.append('email', data.email);
          formData.append('contact', data.contact);
          formData.append('liscence',data.liscence);
          formData.append('postoffice',data.postoffice);
          formData.append('pin',data.pin);
          formData.append('district',data.district);
          formData.append('password', data.password);
          formData.append('proof', data.proof);
          formData.append('userType', 'hospital');
              event.preventDefault()
            
            console.log(data);
           let response=await axios.post('http://localhost:5000/user/register',formData,{
            headers: {
              'Content-Type': 'multipart/form-data'  // Set the content type for FormData
            }
           })
          }
          //  console.log(response);
          const requiredFields = ['name','place','email','contact','liscence','postoffice','pin','district','password','proof'];
    for (const field of requiredFields) {
      if (!data[field]) {
          return toast.error(`${field} is required`);
      }
  }
  setData(data)
    toast.success("successfully registered")
    console.log(data);
}
 catch (error) {
  console.log(error);
  // Handle error appropriately, such as displaying a toast or alert
  toast.error(error.response.data.message|| error.message);
}  
        }
  return (
    <div className='images2 w-[100%]'>
        <form onSubmit={handleSubmit} class="w-[100%] ">

<div className='flex w-[100%] justify-center sm:gap-10'>

  <div className='w-[25%]'>

    <div class="mb-5">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hospital name :</label>
      <input onChange={handleChange} value={data.name} name="name" pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" type="text" id="name" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    
    <div class="mb-5">
      <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Place :</label>
      <input onChange={handleChange} value={data.place} name="place" pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" type="text" id="place" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
      <input onChange={handleChange} value={data.email} name="email" type="email" id="place" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact :</label>
      <input onChange={handleChange} value={data.contact} name="contact" pattern="[0-9]{10}" title="Please enter a valid phone number" maxLength={10} type="text" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Liscence number :</label>
      <input onChange={handleChange} value={data.liscence} name="liscence" type="text" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Proof :</label>
      <input onChange={handlefile}  name="proof" type="file" id="file" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    
    
  </div>
  <div className='w-[25%]'>

    <div class="mb-5">
      <label for="house name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post office :</label>
      <input onChange={handleChange} value={data.postoffice} pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" name="postoffice" type="text" id="house name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
    </div>
    <div class="mb-5">
      <label for="post" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pin :</label>
      <input onChange={handleChange} value={data.pin} name="pin"  pattern="[0-9]{6}" maxLength={6} title="Please enter a valid 6-digit PIN code" type="text" id="post" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="pin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District :</label>
      <select onChange={handleChange} name="district" pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" class="shadow-sm bg-red-200  border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                    <option value="">Select Dustrict</option>
                    <option value="Kozhikode"> Kozhikode</option>
                    <option value="Kasargod"> Kasargod</option>
                    <option value="Kannur"> Kannur</option>
                    <option value="Wayanad"> Wayanad</option>
                    <option value="Malappuram"> Malappuram</option>
                    <option value="Thrissur"> Thrissur</option>
                    <option value="Palakkad"> Palakkad</option>
                    <option value="Idukki"> Idukki</option>
                    <option value="Kottayam"> Kottayam</option>
                    <option value="Aalappuzha"> Aalappuzha</option>
                    <option value="Pathanamthitta"> Pathanamthitta</option>
                    <option value="Kollam"> Kollam</option>
                    <option value="Earanakulam"> Earanakulam</option>
                    <option value="Thiruvananthapuram"> Thiruvananthapuram</option>
                    </select>
    </div>
    
    <div class="mb-5">
      <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password :</label>
      <input onChange={handleChange} value={data.password} name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.' type="password" id="district" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conform Password:</label>
      <input onChange={handleChange} value={data.conformpassword} name="conformpassword" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.' type="password" id="district" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
  </div>
  
</div>




<div class="flex flex-wrap mb-5 mt-8">

<button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>

</div>
</form>
    </div>
  )
}
