import React from 'react'
import {Link} from 'react-router-dom'

export const Assignrqst = () => {
  return (
    <div className='image3 w-[100%]'>
        <div className="w-full h-[250px] pt-40 font-bold text-[20px]">

<div className=" flex justify-evenly w-[90%] m-auto mb-8">
    <div className="flex gap-6">
        <p>Hospital name :</p>
        <p>abi</p>
    </div>
    <div className="flex gap-5">
        <p>Patient name:</p>
        <p>kannur</p>
    </div>
</div>

<div className=" flex justify-evenly w-[90%] m-auto mb-8">
    <div className="flex gap-6 text-start">
        <p>Place :</p>
        <p>45</p>
    </div>
    <div className="flex gap-5">
        <p>Age :</p>
        <p>liver</p>
    </div>
</div>
<div className=" flex justify-evenly w-[90%] m-auto mb-8">
    <div className="flex gap-6">
        <p>Email :</p>
        <p>kuti</p>
    </div>
    <div className="flex gap-5">
        <p>Health certificate:</p>
        <p>B-</p>
    </div>
</div>
<div className=" flex justify-evenly w-[90%] m-auto mb-8">
    <div className="flex gap-6">
        <p>Contact :</p>
        <p>kuti@gmail.com</p>
    </div>
    <div className="flex gap-5">
        <p>Organ:</p>
        <p>98</p>
    </div>
</div>
<div className=" flex justify-evenly w-[90%] m-auto mb-8">
    <div className="flex gap-6">
        <p>Pin :</p>
        <p>0994787855</p>
    </div>
    <div className="flex gap-5">
        <p>Blood group:</p>
        <p>98</p>
    </div>
</div>
<div className=" flex justify-evenly w-[90%] m-auto mb-8">
    <div className="flex gap-6">
        <p>District :</p>
        <p>96654</p>
    </div>
    {/* <div className="flex gap-5">
        <p>Conformation certificate :</p>
        <input type='' placeholder='View' />
    </div> */}
</div>

</div>

<div className='flex flex-wrap gap-20 justify-center my-48 text-white font-bold '>
<button className='bg-red-800 w-28 p-4 mt-[101px] rounded'>
    <Link to={'/hospital/Searchorgan'}>
    ASSIGN
    </Link>
    </button>

</div>
    </div>
  )
}
