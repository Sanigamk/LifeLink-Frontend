import React from 'react'
import img4 from './im5.png'
import './App.css'

export const Loginn = () => {
  return (
    <div className='image1 pt-[180px] text-[20px]'>
      <div className='bg-red-800 w-fit p-14 m-auto mt-1 rounded-lg'>
        <div className='text-[25px] text-white pb-6'>Username</div>
        <div className=''><input className='bg-white rounded-lg pe-20' type="text" name="" placeholder="enter your username"/></div>
        <div className='text-[25px] text-white pb-3 pt-6'>Password</div>
        <div className=''><input className='bg-white rounded-lg pe-20' type="text" name="" placeholder="enter your password"/></div>
        <div className='text-[25px] text-white pb-3'>Forget password</div>
        <div className='text-center w-[100%] '>
          <button className='bg-white p-2 mt-3 text-lg font-semibold w-32 rounded-lg'>LOGIN</button>
          </div>
      </div>
    </div>
  )
}
