import React,{useState} from 'react'


const Collegerqst= () => {
    const [drop,setDrop]= useState(false)
  let dropdown=()=>{
    setDrop(!drop)
  }
  let dropdownClose=()=>{

    setDrop(false)

  }
  return (
    <div className='images2 w-[100%]'>
        <div  className='basicbg   pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>BLOOD REQUEST</div>
        {/* searchbar */}
        
{/* <form class="max-w-lg mx-auto pb-10">
    <div class="flex items-center">
       <div>
        <button  onClick={dropdown} id="dropdown-button" data-dropdown-toggle="dropdown" className="h-[42px] inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-orange-500 border border-gray-300 rounded-s-lg hover:bg-[#f7b866d4] focus:ring-4 focus:outline-none focus:ring-orange-500 dark:bg-orange-500 dark:hover:bg-[#f7b866d4] dark:focus:ring-orange-500 dark:text-white dark:border-orange-500" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
  {drop &&
        <div id="dropdown" class="z-10 absolute   bg-orange-500 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-orange-500">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" onClick={dropdownClose} class="inline-flex w-full px-4 py-2  hover:bg-orange-200 dark:hover:text-black">Accepted</button>
            </li>
            <li>
                <button type="button" onClick={dropdownClose} class="inline-flex w-full px-4 py-2  hover:bg-orange-200 dark:hover:text-black">Rejected</button>
            </li>
            <li>
                <button type="button" onClick={dropdownClose} class="inline-flex w-full px-4 py-2  hover:bg-orange-200 dark:hover:text-black">All</button>
            </li>
            </ul>
        </div>
}
</div>
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-black bg-white rounded-e-lg  border-s-2 border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-white dark:border-s-orange-500  dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500" placeholder="Search Organizations" required />
            <button  type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orange-200 rounded-e-lg border border-orange-500 hover:bg-[#f7b866d4] focus:ring-4 focus:outline-none focus:ring-orange-500 dark:bg-orange-500 dark:hover:bg-[#f7b866d4] dark:focus:ring-orange-500">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form> */}


{/* tableee */}

<div class="relative overflow-x-auto shadow-md">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-red-800 border-b-2 dark:text-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    COLLEGE NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    PLACE
                </th>
                <th scope="col" class="px-6 py-3">
                    DISTRICT
                </th>
                <th scope="col" class="px-6 py-3">
                    BLOOD GROUP
                </th>
                <th scope="col" class="px-6 py-3">
                    STUDENTS
                </th>
                <th scope="col" class="px-6 py-3">
                    STATUS
                </th>
                <th scope="col" class="px-6 py-3">
                    ACTION
                </th>
                
                
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
                <td class="px-6 py-4 font-semibold">
                    gggggg
                </td>
                <td class="px-6 py-4">
                    Abcd org
                </td>
                <td class="px-6 py-4">
                   PLY8753
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                   abc@gmail.com
                </td>
               
                
                <td class="px-6 py-4">
                    Pending
                </td>
                <td class="px-6 py-4 flex flex-wrap flex-col gap-3">
                    <button class="bg-slate-600 font-bold text-sm text-white hover:underline hover:bg-slate-500 p-1">Accept</button>
                    <button class="bg-slate-600 font-bold text-sm text-white hover:underline hover:bg-slate-500 p-1" >Reject</button>
                </td>
                
            </tr>
            
        </tbody>
    </table>
</div>


    </div>  
    </div>
  )
}
export default Collegerqst