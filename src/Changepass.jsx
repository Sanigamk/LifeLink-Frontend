import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export const Changepass = () => {

        const navigate=useNavigate()
        const [data,setData]=useState('')
      
        let handleChange=(event)=>{
          setData({...data,[event.target.name]:event.target.value})
        }
        let {email}=useParams()
    
        let handleSubmit = (event) => {
          if(data.Password!=data.confirmPassword){
            toast.error('Password mismatch')
          }
          else{
          toast.success('Password updated')
          event.preventDefault()
          setData(data)
          let response = axios.put(`http://localhost:5000/user/changepass/${email}`,data);
          console.log(response);
          setData('');
          navigate('/login')
          }
      };
    return (
        <div className='image1 pt-[98px] text-[20px]'>
            <div className='bg-red-800 w-fit p-14 m-auto mt-1 rounded-lg'>
                <div className='text-[25px] text-white pb-6'>Password</div>
                <div className=''>
                    <input className='bg-white rounded-lg pe-20' onChange={handleChange} type="text" name="password" placeholder="enter your email" /></div>
                <div className='text-[25px] text-white pb-3 pt-6'>Conform Password</div>
                <div className=''><input className='bg-white rounded-lg pe-20' onChange={handleChange} type="password" name="conformpassword" placeholder="enter your password" /></div>
                <div className='text-center w-[100%] '>
                    <button onClick={handleSubmit} className='bg-white p-2 mt-3 text-lg font-semibold w-32 rounded-lg'>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}
