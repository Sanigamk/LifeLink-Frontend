import React, { useEffect } from 'react'
import { Outlet,Link,useLocation,useNavigate } from 'react-router-dom';
import { Footer } from '../Footer';
import axios from 'axios';
export const UserNav = () => {



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
      else if(response?.data?.userType !=='user'){
        navigate('/login')
      }

    }
    auth()
  },[])

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
        <Link to='/user'><div className>HOME</div></Link>
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
