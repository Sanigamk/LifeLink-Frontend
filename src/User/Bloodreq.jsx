import React from 'react'

export const Bloodreq = () => {
  return (
    <div className='images2 w-[100%]'>

      <form class="w-[100%]">

        <div className='w-[25%] m-auto mt-9'>

          <div class="mb-5">
            <label for="name" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Hospital ame :</label>
            <input type="name" id="name" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div class="mb-5">
            <label for="age" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Place :</label>
            <input type="age" id="age" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div class="mb-5">
            <label for="place" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Blood :</label>
            <input type="place" id="place" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div class="mb-5">
            <label for="email" class="block mb-2 text-lg font-bold font-medium text-gray-900 dark:text-white">Blood unit :</label>
            <input type="email" id="place" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          
        </div>

        <div class="mb-5 mt-8 flex justify-center">

          <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>

        </div>
      </form>



    </div>
  )
}
