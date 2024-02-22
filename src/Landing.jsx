import React from 'react'
import {Link} from 'react-router-dom'
import { Navi } from './Navigation'
import img from './cover.jpg'
import './App.css'
import img1 from './im2.png'
import img2 from './im3.png'
import img3 from './im4.png'
export const Landing = () => {
  return (
    <>
      
        <div className='images sm:h-[40rem]'>

          <div className=' font-bold text-white text-center sm:text-[60px]'>BE A HERO BE A DONOR</div>
          <div className=' text-white text-center sm:text-[48px]'>No matter your age,no matter your<br />health status, you can register to <br /> become an donor</div>
           <Link to ='login'><div className='text-center m-auto w-60 '><button className='bg-red-800 p-2 mt-3 rounded-lg w-48  font-bold text-white'>LOGIN</button></div></Link>
        </div>
        <div className='bg-white items-center justify-between gap-2 flex flex-wrap p-10 pb-24'>
          <div>
            <img className='w-[648px] rounded-full ' src={img1} alt="" />
          </div>
          <div className=' w-[596px] p-5 h-fit text-[30px] '>
            <div className='font-bold '><h1>A SINGLE DROP OF BLOOD IS A GIFT TO SOMEONE'S LIFE</h1></div>
            <div className='w-80 text-[25px]'><p >The gift you’ve given through your blood donation is immeasurable.your kindness has made a profound impact on someone’s life</p></div>
            <div className='flex gap-3'>
              <div><img className='w-48' src={img2} alt="" /></div>
              <div><img className='w-48' src={img3} alt="" /></div>
            </div>
          </div>

        </div>
      </>
  )
}
