import React, { useEffect } from 'react'
import { Outlet,Link,useLocation, useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import axios from 'axios';
export const Adnav = () => {

  const navigate=useNavigate(0)
  useEffect(()=>{
    let auth=async ()=>{

      let id=localStorage.getItem('id')
      let email=localStorage.getItem('email')
      let response=await axios.post('http://localhost:5000/users/authenticate',{_id:id,email:email})
      console.log(response);
      if(response==null){
        navigate('/login')
      }
      else if(response?.data?.userType !=='admin'){
        navigate('/login')
      }

    }
    auth()
  },[])

  


  const value = useLocation()

  

  console.log(value,'value');
  return (

    <div>
    <div className='flex gap-5  bg-red-800  text-white p-4 justify-between'>
        <div>
        <div className='font-bold'>ADMIN</div>
        </div>
        <div><span className='text-white font-bold font'> LIFE</span><span className='text-black font-bold'>LINK</span></div>
        <div className='flex flex-wrap gap-4 font1 font-bold'>
        <Link to='/admin'><div className>HOME</div></Link>
        {/* <div className>LOGOUT</div>   */}
    </div>
    </div>
    <div className='flex'>

    <div className='bg-white w-[15%] h-[40rem] text-red-800 font-bold pt-20 '>
    <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
          <Link to={'/admin/addcategory'}>
          <span>ADD CATEGORY</span>
          </Link>
          </div>
        <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
          <Link to={'/admin/adhospital'}>
          <span>HOSPITAL</span>
          </Link>
          </div>
        <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
        <Link to={'/admin/user'}>
          <span>USER</span>
        </Link>
          </div>
        <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
          <Link to={'/admin/bloodonor'}>
           <span>BLOOD DONOR</span>
           </Link>
          </div>
        <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
          <Link to={'/admin/donations'}>
           <span>DONATION</span>
          </Link>
          </div>
        <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
          <Link to={'/admin/college'}>
          COLLEGE
          </Link>
          </div>
          <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
          <Link to={'/admin/vieworgandonor'}>
          ORGAN DONORS
          </Link>
          </div>
    </div>

    {/* <Footer/> */}
    <div className='w-[100%]'>

    <Outlet/>
    </div>
    </div>
    </div>

  )
}
