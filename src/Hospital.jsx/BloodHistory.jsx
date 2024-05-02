import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const BloodHistory = () => {
    
const [hosp,setHosp]=useState(false)
const [Donor,setDonor]=useState(false)
const [College,setCollege]=useState(false)

let toggleHosp=()=>{
    setHosp(!hosp)
    setCollege(false)
    setDonor(false)


}
let toggleDonor=()=>{
    setDonor(!Donor)
    setCollege(false)

}
let toggleCollege=()=>{
    setCollege(!College)
    setDonor(false)
    setHosp(false)


}

  return (
<>
<div className='pb-24'>

<div className='p-10 flex gap-4 '>
   <Link to='/hospital/blooddonorhist'> <button className='bg-red-800 w-24 text-white p-3 rounded-2xl'>
        Donor
    </button></Link>
    <div>
    
<div className='flex gap-4'>
    <button onClick={toggleHosp} className='bg-red-800 w-24 text-white p-3 rounded-2xl'>
        Hospital
    </button>
    {
        hosp &&
        <div className='absolute top-[150px]'>
        <Link to='/hospital/hospitalbloodhist'><div>Send Request</div></Link>
       <Link to='/hospital/receivedhosbloodrqst'> <div>Recieved Request</div></Link>
    </div>
    }
    <div>

    <button onClick={toggleCollege} className='bg-red-800 w-24 text-white p-3 rounded-2xl'>
        College
    </button>
    {
        College &&
        <div className='absolute top-[150px]'>
        <Link to='/hospital/sendcollegehist'><div>Send Request</div></Link>
       <Link to='/hospital/recvdcollegehist'> <div>Recieved Request</div></Link>
    </div>
    }
    </div>
</div>

</div>
</div>
</div>

</>
  )
}
