import React from 'react'
import { Outlet,Link,useLocation,useNavigate } from 'react-router-dom';
import { Footer } from '../Footer';
export const UserNav = () => {

  const value = useLocation()
//   let logout=()=>{
//     localStorage.removeItem('id')
//     localStorage.removeItem('email')
//     navigate('/')

// }
  console.log(value,'value');
  // const navigate=useNavigate()
  return (

    <div>
    <div className='flex gap-5  bg-red-800  text-white p-4 justify-between'>
        <div>
        <div><span className='text-white font-bold font'> LIFE</span><span className='text-black font-bold'>LINK</span></div>
        </div>
        <div className='flex flex-wrap gap-4 font1 font-bold'>
        <Link to='/'><div className>HOME</div></Link>
        {/* <div className onClick={logout}>LOGOUT</div>   */}
    </div>
    </div>
    <div className='flex'>

    <div className='bg-white-800 w-[15%] h-[40rem] text-red-800 font-bold pt-20 '>
        <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
          <Link to={'/user/bloodreq'}>
          <span>Blood Requset</span>
          </Link>
          </div>
        <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
          <Link to={'/user/viewhistory'}>
           <span>View History</span>
          </Link>
          </div>
        <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
          <Link to={'/user/profile'}>
           <span>Profile</span>
          </Link>
          </div>
        
    </div>

    {/* <Footer/> */}


    <Outlet/>
    </div>
    </div>


  )
}
