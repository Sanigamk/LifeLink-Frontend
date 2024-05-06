import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const Mybloodrqstcollg = () => {
  let id=localStorage.getItem('id')
  const [data,setData]=useState('')
  const [datas,setDatas]=useState([''])

  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(`http://localhost:5000/hospital/vwcollgdetail`)
      console.log(response.data)
      setDatas(response.data)
    }
    fetchdata()


  }, [])
  
  const [catid,setcatid]=useState()
  const [cllgdetail,setcllgdetail]=useState([''])
  let handleDistrict=async(event)=>
  {
    if(event.target.value){
      setcatid(event.target.value)
      let response=await axios.get(`http://localhost:5000/college/cllgdistrict/${event.target.value}`)
      console.log(response);
      setcllgdetail(response.data)
    }
    }
    
  // const handlecllgdetail=(e)=>{
  //   setData({...data,})
  


    
     
        let handleChange=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
            console.log(data);
        }
        let handleSubmit=async (event)=>{
            event.preventDefault()
            console.log(data);
           let response=await axios.post('http://localhost:5000/hospital/mybloodrqstcllg',{...data,userId:id})
           console.log(response);
         
           
           
    toast.success("successfully send request")
    console.log(data);
        }
        
      
  return (
    <div className='images2 w-[100%] h-[42rem]'>
        <form onSubmit={handleSubmit} class="w-[100%]">

<div className='w-[25%] m-auto my-32'>

<div class="mb-5">
            <label for="name" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">District :</label>
            <select onChange={handleDistrict} name="district" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
              <option  value="">select</option>
              {datas.map((item) => (

                <option value={item?.district}>{item?.district}</option>
              ))}
            </select>

          </div>
          <div class="mb-5">
            <label for="age" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">college :</label>
            <select onChange={handleChange} name="collegeId" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
              <option  value="">select</option>
              {cllgdetail.map((item) => (
                <option value={item?._id}>{item?.name}</option>
              ))}
            </select>
          </div>

  <div class="">
    <label for="name" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Blood group :</label>
    <input onChange={handleChange} value={data.bloodgroup} name="bloodgroup" type="text" id="name" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
  </div>
  <div class="">
    <label for="age" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Number of students :</label>
    <input onChange={handleChange} value={data.students} name="students" type="number" id="age" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
 </div>

<div class="mb-5 mt-8 flex justify-center">

  <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>

</div>
</form>


    </div>
  )
}
