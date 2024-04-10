import React, { useState } from 'react'

export const Loginnominie = () => {
    let [data, setData] = useState('')
    let handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    let handleSubmit = async (event) => {
        event.preventDefault()
        console.log(data);
    }
    return (
        <div className='image1 pt-[180px] text-[20px]'>
            <div className='bg-red-800 w-fit p-14 m-auto mt-1 rounded-lg'>
                <div className='text-[25px] text-white pb-6'>Username</div>
                <div className=''>
                <input className='bg-white rounded-lg pe-20' onChange={handleChange} type="text" name="email" placeholder="enter your username" /></div>
                <div className='text-[25px] text-white pb-3 pt-6'>Nominie contact</div>
                <input className='bg-white rounded-lg pe-20' onChange={handleChange} type="text" name="email" placeholder="enter your username" /></div>
                <div className='text-[25px] text-white pb-3 pt-6'>Organ donor contact</div>
                <div className=''><input className='bg-white rounded-lg pe-20' onChange={handleChange} type="text" name="password" placeholder="enter your password" /></div>
                <div className='text-[25px] text-white pb-3'>Forget password</div>
                <div className='text-center w-[100%] '>
                <button onClick={handleSubmit} className='bg-white p-2 mt-3 text-lg font-semibold w-32 rounded-lg'>LOGIN</button>
                </div>
            </div>
    )
}
