import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export const Vworgandonor = () => {
    // let id = localStorage.getItem('id')
  const [userData, setuserData] = useState('')
  const [refresh, setrefresh] = useState(false)
  const [data, setData] = useState('')
  
  let {id}=useParams()
  console.log(id);
  
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(`https://lifelink-backend-evaw.onrender.com/hospital/viewpageorgandnrs/${id}`)
      console.log(response.data);
      setuserData(response.data)
      setData(response.data)
    }
    fetchdata()

  }, [refresh])

  const convertTo12HourFormat = (time) => {
    const timeParts = time.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};
 
    
  return (

    <div className='image3 '>
      <div class="bg-transparent w-[50%] m-auto overflow-hidden shadow rounded-lg border mt-10">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {data.name}
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    {data.address}
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Age
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.age}
                            </dd>
                        </div>

                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.email}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Adhaarnumber
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.adhaarnumber}
                            </dd>
                        </div>
                        
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Contact
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.contact}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Bloodgroup
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.bloodgroup}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Date of birth
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {/* {data.dateofbirth} */}
                            { new Date(data.dateofbirth).toLocaleDateString('en-GB')}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Nominie
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.nominie}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Nominie Relation
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.nominierelation}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Nominie Contact
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.nominiecontact}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Height
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.height}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Weight
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.weight}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Heath Issue
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.healthissue}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Date of death & Time
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.dateofdeath}<br/>
                            {/* {data.time} */}
                            {data.time && convertTo12HourFormat(data.time)}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Reason of death
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {data.reasonofdeath}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                organ for donation before death
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                           {data.organsBeforeDeath?.liver && <h2>liver</h2>}
                           {data.organsBeforeDeath?.heart && <h2>heart</h2>}
                           {data.organsBeforeDeath?.kidney && <h2>kidney</h2>}
                           {data.organsBeforeDeath?.lung && <h2>lung</h2>}
                           {data.organsBeforeDeath?.pancreas && <h2>pancreas</h2>}
                           
                            <span></span>
                           

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                organ for donation After death
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.organsAfterDeath?.heart && <h2>heart</h2>}
                                {data.organsAfterDeath?.liver && <h2>liver</h2>}
                                {data.organsAfterDeath?.kidney && <h2>kidney</h2>}
                                {data.organsAfterDeath?.lung && <h2>lung</h2>}
                                {data.organsAfterDeath?.pancreas && <h2>pancreas</h2>}
                                {data.organsAfterDeath?.tissue && <h2>tissue</h2>}
                                {data.organsAfterDeath?.bone && <h2>bone</h2>}
                                {data.organsAfterDeath?.skin && <h2>skin</h2>}


                            </dd>
                        </div>
                        
                        
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Signature
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">

                            <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.signature}`} download> <img className='w-[80px] h-20' src={`https://lifelink-backend-evaw.onrender.com/uploads/${data.signature}`} alt='click to view & download pdf' /></a>
                           <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.signature}`} download> <span> </span> </a>
                            {/* <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.signature}`} download> <span>{data.signature}</span></a> */}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Conformation certificate
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.conformationcertificate}`} download> <img className='w-[80px] h-20' src={`https://lifelink-backend-evaw.onrender.com/uploads/${data.conformationcertificate}`} alt='click to view & download pdf' /></a>
                           <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.conformationcertificate}`} download> <span> </span> </a>
                            {/* <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.conformationcertificate}`} download> <span>{data.conformationcertificate}</span></a> */}

                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Health Certificate
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.healthcertificate}`} download> <img className='w-[80px] h-20' src={`https://lifelink-backend-evaw.onrender.com/uploads/${data.heathcertificate}`} alt='click to view & download pdf' /></a>
                           <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.healthcertificate}`} download> <span> </span> </a>
                            {/* <a target='_blank' href={`https://lifelink-backend-evaw.onrender.com/uploads/${data.heathcertificate}`} download> <span>{data.healthcertificate}</span></a> */}

                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div class="flex flex-wrap pb-[200px] mt-2 m-auto w-fit">
            <Link to={`/hospital/sendrequestorgandonors/${data._id}`}>

            <button type="submit" class="text-white m-auto  bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SEND REQUEST</button>
           </Link>

          </div>


    </div>
    


  )
}
