import React from 'react'


export const Footer = () => {
  return (
    <div className='flex flex-wrap bg-red-800 text-white justify-between mt-[-47px]'>
        <div className=' ms-7 my-5'>
            <div className='text-xl font-bold'><h1>JOIN WITH US</h1></div>
            <div className='text-lg font-medium'><p>Empowering humanity through the gift of life.<br/>Join "BLOODLINK",where every drop counts.</p></div>
            <div></div>
        </div>
        <div className='my-5'>
            <div className='text-xl me-7 font-bold'><h1>BLOODLINK</h1></div>
            <div className='flex flex-wrap gap-1 font-medium'>
                <div></div>
                <div>bloodlinkgmail.com</div>
            </div>
            <div className='flex flex-wrap gap-1 font-medium'>
                <div></div>
                <div>+91 6487478378</div>
            </div>
            <div className='flex flex-wrap gap-1 font-medium'>
                <div></div>
                <div>Kerala,india</div>
            </div>
        </div>
    </div>
  )
}
