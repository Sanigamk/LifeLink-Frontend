import React from 'react'
import imgs from '../im5.png' 
import { useNavigate } from 'react-router-dom'

export const Adhome = () => {

  let logout=()=>{
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    navigate('/')
  }
  const navigate=useNavigate()
  return (
    <div className='images2 h-[100%]'>
    <div className='text-center text-[60px] pt-[15%] '>
     <div className='text-[70px]'>WELCOME</div>
     <div className='text-[40px]'>LIFELINK</div>
     <div className=''>GIVE THE GIFT OF LIFE</div>
     <button className='bg-slate-400 w-[10%] text-[20px] font-bold rounded-md' onClick={logout}>LOGOUT</button>
    </div>
    </div>
    
  )
}

