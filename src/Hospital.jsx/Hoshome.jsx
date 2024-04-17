import React from 'react'
import { Footer } from '../Footer'
import { useNavigate } from 'react-router-dom'

export const Hospitalhome= () => {

  let logout=()=>{
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    navigate('/')
  }
  const navigate=useNavigate()

  return (
    <>
    <div className='images2 w-[100%] h-[45rem]'>
      <div className='text-center text-[60px] pt-[15%]'>
     <div className='text-[70px]'>WELCOME</div>
     <div className='text-[40px]'>LIFELINK</div>
     <div className=''>GIVE THE GIFT OF LIFE</div>
     <button className='bg-slate-400 w-[10%] text-[20px] font-bold rounded-md' onClick={logout}>LOGOUT</button>
    </div>
    {/* <Footer/> */}
    </div>
    </>

  )
}
