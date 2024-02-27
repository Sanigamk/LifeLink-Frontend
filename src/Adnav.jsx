import React from 'react'
import { Outlet,Link,useLocation } from 'react-router-dom';
import { Footer } from './Footer';
export const Adnav = () => {

  const value = useLocation()

  console.log(value,'value');
  return (

    <div>
    <div className='flex gap-5  bg-red-800  text-white p-4 justify-between'>
        <div>
        <div className='font-bold'>ADMIN</div>
        </div>
        <div><span className='text-white font-bold font'> BLOOD</span><span className='text-black font-bold'>LINK</span></div>
        <div className='flex flex-wrap gap-4 font1 font-bold'>
        <Link to='/'><div className>HOME</div></Link>
        <div className>LOGOUT</div>  
    </div>
    </div>
    <div className='flex'>

    <div className='bg-red-800 w-[15%] h-[40rem] text-white font-bold pt-20 pl-5'>
        <div className=''>HOSPITAL</div>
        <div className=''>USER</div>
        <div className=''>BLOOD DONOR</div>
        <div className=''>DONATION</div>
        <div className=''>COLLEGE</div>
    </div>

    {/* <Footer/> */}
    <div className='w-[100%]'>

    <Outlet/>
    </div>
    </div>
    </div>

  )
}
