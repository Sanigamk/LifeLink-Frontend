import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Footer } from './Footer';
export const Navi = () => {

  const [drop, setDrop] = useState(false)
  let dropdown = () => {
    setDrop(!drop)
    console.log(drop);
  }
  return (
    <div>
      <div className='flex gap-5 bg-red-800 text-white p-4 justify-between'>
        <div>
          <div><span className='text-white font-bold font'> LIFE</span><span className='text-black font-bold'>LINK</span></div>
        </div>
        <div className='flex flex-wrap gap-4 font1 font-bold'>
          <Link to='/'><div className>HOME</div></Link>
          <div className>ABOUT</div>
          <div onClick={dropdown} className>REGISTER</div>
          {drop &&
            <div className='list-none absolute right-[30px] sm:right-[9px] p-3 mt-8 ps-4 pe-4 bg-gray-300 rounded-sm text-gray-950'>
              <Link to='/donorregistration'>
                <li className='pb-2'>Donor</li></Link>
              <Link to='/collgregistration'>
                <li className='pb-2'> College</li></Link>
              <Link to='/hospitalregistration'>
                <li className='pb-2'>Hospital</li></Link>
              <Link to='/organdonorregistration'>
                <li className='pb-2'>Organ Donor</li></Link>
              <Link to='/userregistration'>
                <li className='pb-2'>User</li></Link>
            </div>
          }
        </div>

      </div>
      <Outlet />
      <Footer />




    </div>

  )
}
export default Navi