import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Managebloodrqsthos = () => {
    const [data,setData]=useState([''])
const [refresh,setrefresh]=useState(false)
let bid=localStorage.getItem('id')
let {id}=useParams()
console.log(id);
useEffect(()=>{
    let fetchdata = async ()=>{
        let response=await axios.get(`https://lifelink-backend-evaw.onrender.com/hospital/mnghosbloodrqst/${id}`,data)
        console.log(response.data)
        setData(response.data)
    }
    fetchdata()
},[refresh])

let handleSubmit = async (status) => {
    setrefresh(!refresh)
    let response = await axios.put(`https://lifelink-backend-evaw.onrender.com/hospital/mnghosptlbldrqst/${id}`, {status:status,AcceptedId:bid})
    console.log(response);
    // setData('')
}
  return (
    <div className='image3 w-[100%] h-[42rem]'>
        <div className="w-full h-[250px] pt-40 font-bold text-[20px]">

<div className=" flex justify-evenly w-[90%] m-auto mb-8">
    <div className="flex gap-6">
        <p>Hospital name :</p>
        <p>{data.hos?.name}</p>
    </div>
    <div className="flex gap-5">
        <p>Pin:</p>
        <p>{data.hos?.pin}</p>
    </div>
</div>

<div className=" flex justify-evenly w-[90%] m-auto mb-8">
    <div className="flex gap-6 text-start">
        <p>Place :</p>
        <p>{data.hos?.place}</p>
    </div>
    <div className="flex gap-5">
        <p>District :</p>
        <p>{data.hos?.district}</p>
    </div>
</div>
<div className=" flex justify-evenly w-[90%] m-auto mb-8">
    <div className="flex gap-6">
        <p>Email :</p>
        <p>{data.hos?.email}</p>
    </div>
    <div className="flex gap-5">
        <p>Blood group :</p>
        <p>{data.mnghosbldreq?.bloodgroup}</p>
    </div>
</div>
<div className=" flex justify-evenly w-[90%] m-auto mb-8">
    <div className="flex gap-6">
        <p>Contact :</p>
        <p>{data.hos?.contact}</p>
    </div>
    <div className="flex gap-5">
        <p>Blood unit :</p>
        <p>{data.mnghosbldreq?.bloodunit}</p>
    </div>
</div>


</div>

<div className='flex flex-wrap gap-20 justify-center my-48 text-white font-bold'>
<button onClick={()=>{handleSubmit('Accepted')}} href="#" className='bg-red-800 w-28 p-4 rounded'>ACCEPT</button>

</div>
    </div>
  )
}
