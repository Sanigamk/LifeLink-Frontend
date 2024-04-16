import React from 'react'
import { Footer } from '../Footer'
import { useNavigate } from 'react-router-dom'

export const Userhome = () => {
  let logout=()=>{
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    navigate('/')
  }
  const navigate=useNavigate()
  return (
    <div className='images2 w-[100%]'>
      <div className='text-center text-[60px] pt-[15%] '>
     <div className='text-[70px]'>WELCOME</div>
     <div className='text-[40px]'>LIFELINK</div>
     <div className=''>GIVE THE GIFT OF LIFE</div>
     <div className onClick={logout}>LOGOUT</div>
    </div>
    {/* <Footer/> */}
    </div>

  )
}
