import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const BloodHistory = () => {
    const [drop, setDrop] = useState(false)
    let dropdown = () => {
        setDrop(!drop)
        console.log(drop);

    }
    const [drops, setDrops] = useState(false)
    let dropdowns = () => {
        setDrops(!drops)
        setDrop(false)
    }
  return (
<div className='line flex flex-wrap translate-x-0 gap-10 justify-around pt-24'>
              <Link to='/hospital/blooddonorhist' > <button className='bg-white rounded-lg w-24 font-bold hover:bg-slate-500'>Donors</button>
</Link>
                <button onClick={dropdown} className='bg-white rounded-lg w-36 font-bold hover:bg-slate-500'>Hospital</button>
                {drop &&
                    <div className='list-none p-3 mt-6 absolute bg-white font-bold rounded-md'>
                        <li className='pb-2'>
                            <Link to={'/hospital/hospitalbloodhist'}>
                            Send Request
                            </Link>
                            </li>
                        <li className='pb-2'>
                            <Link to={'/hospital/receivedhosbloodrqst'}>
                            Received Request
                            </Link>
                            </li>
                    </div>
                }
                <div>

                    <button onClick={dropdowns} className='bg-white rounded-lg w-36 font-bold hover:bg-slate-500'>College</button>
                    {drops &&
                        <div className='list-none p-3 z-1 absolute bg-white font-bold rounded-md'>
                            <li className='pb-2'>
                                <Link to={'/hospital/sendcollegehist'}>
                                Send Request
                                </Link>
                                </li>
                            <li className='pb-2'>
                                <Link to={'/hospital/recvdcollegehist'}>
                                Received Request
                                </Link>
                                </li>
                        </div>
                    }
                </div>
            </div>
  )
}
