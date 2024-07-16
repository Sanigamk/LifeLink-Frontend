import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const Reqstblood = () => {
  let id=localStorage.getItem('id')
  const [data,setData]=useState([''])
  const [datas,setDatas]=useState([''])

  useEffect(() => {
    let fetchdata = async () => {
        let response = await axios.get(`https://lifelink-backend-evaw.onrender.com/blooddonor/vwhosdetail`)
        console.log(response.data)
        setDatas(response.data)
    }
    fetchdata()

  
  },[])

  const [catid,setcatid]=useState()
  const [hosdetail,sethosdetail]=useState([''])
  let handleDistrict=async(event)=>
  {
    if(event.target.value){
      setcatid(event.target.value)
      let response=await axios.get(`https://lifelink-backend-evaw.onrender.com/college/hosdistrict/${event.target.value}`)
      console.log(response);
      sethosdetail(response.data)
    }
    }

    const currentDate = new Date().toISOString().split('T')[0];
    
     
        let handleChange=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
        let handleSubmit=async (event)=>{
            event.preventDefault()
            console.log(data);
           let response=await axios.post('https://lifelink-backend-evaw.onrender.com/college/cllgsendrqst',{...data,userId:id})
           console.log(response);

           setData(data)
    toast.success("successfully send request")
    console.log(data);
            
        }
  return (
    <div className='image3'>
        <form onSubmit={handleSubmit} class="w-[100%]">

<div className='w-[25%] m-auto mt-24'>

  <div class="mb-5">
    <label for="name" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">District :</label>
    <select onChange={handleDistrict} name="district" class="shadow-sm bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
        <option value="">select District</option>
        <option value="Kozhikode"> Kozhikkod</option>
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
        {/* {datas.map((item)=>(
        <option value={item?.district}>{item?.district}</option>
        ))} */}
    </select>

  </div>
  <div class="mb-5">
    <label for="age" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Hospital :</label>
    <select onChange={handleChange} name="hospitalId" class="shadow-sm bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
        <option  value="">select</option>
        {hosdetail.map((item)=>(
        <option value={item?._id}>{item.name}</option>
        ))}
    </select>
  </div>
  <div class="mb-5">
    <label for="place" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Discription :</label>
    <input onChange={handleChange} value={data.discription} name="discription" type="text" id="place" class="shadow-sm bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-5">
    <label for="place" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Camp name :</label>
    <input onChange={handleChange} value={data.campname} name="campname" type="text" id="place" class="shadow-sm bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Date :</label>
    <input onChange={handleChange}  min={currentDate} value={data.date} name="date" type="date" id="place" class="shadow-sm bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  
</div>

<div class="mb-5 mt-8 flex justify-center">

  <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>

</div>
</form>
    </div>
  )
}
