import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const BloodHistory = () => {
    
const [hosp,setHosp]=useState(false)
const [Donor,setDonor]=useState(false)
const [College,setCollege]=useState(false)

let toggleHosp=()=>{
    setHosp(!hosp)
}
let toggleDonor=()=>{
    setDonor(!Donor)
}
let toggleCollege=()=>{
    setCollege(!College)
}

  return (
<>
<div className='p-10 '>
    <button className='bg-red-800 w-24 text-white p-3 rounded-2xl'>
        Donor
    </button>
    <div>
<div>
    
    <button onClick={toggleHosp} className='bg-red-800 w-24 text-white p-3 rounded-2xl'>
        Hospital
    </button>
    {
        hosp &&
        <div>
        <Link to='/hospital/hospitalbloodhist'><div>Send Request</div></Link>
       <Link to='/hospital/receivedhosbloodrqst'> <div>Recieved Request</div></Link>
    </div>
    }
    </div>
    <div>

    <button onClick={toggleCollege} className='bg-red-800 w-24 text-white p-3 rounded-2xl'>
        College
    </button>
    {
        College &&
        <div>
        <Link to='/hospital/sendcollegehist'><div>Send Request</div></Link>
       <Link to='/hospital/recvdcollegehist'> <div>Recieved Request</div></Link>
    </div>
    }
    </div>
</div>

</div>

</>
  )
}
