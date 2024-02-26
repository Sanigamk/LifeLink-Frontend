import React from 'react'

export const Hospitalbloodhist = () => {
  return (
    <div className='images2 w-[100%]'>
        <div className='line flex flex-wrap translate-x-0 gap-10 justify-around pt-24'>
        <button className='bg-white rounded-lg w-24 font-bold'>Donor</button>
        <button className='bg-slate-400 rounded-lg w-24 font-bold'>Hospital</button>
        <button className='bg-white rounded-lg w-24 font-bold'>College</button>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-14 ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 text-white bg-red-800 rounded">
            <tr>
                <th scope="col" class="px-6 py-3">
                   HOSPITAL NAME
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
                    BLOOD UNIT
                </th>
                <th scope="col" class="px-6 py-3">
                    DATE
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Manu hospital
                </th>
                <td class="px-6 py-4">
                    baby hospital
                </td>
                <td class="px-6 py-4">
                    kidney
                </td>
                <th scope="col" class="px-6 py-3">
                    Blood group
                </th>
                <th scope="col" class="px-6 py-3">
                    Blood group
                </th>
                <td class="px-6 py-4">
                    6/03/22
                </td>
                
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Baby memorial hospital
                </th>
                <td class="px-6 py-4">
                   New stand hospital
                </td>
                <td class="px-6 py-4">
                    blood
                </td>
                <th scope="col" class="px-6 py-3">
                    Blood group
                </th>
                <th scope="col" class="px-6 py-3">
                    Blood group
                </th>
                
                <td class="px-6 py-4">
                    31/09/24
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Medical college
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <th scope="col" class="px-6 py-3">
                    Blood group
                </th>
                <th scope="col" class="px-6 py-3">
                    Blood group
                </th>
                <td class="px-6 py-4">
                    6/9/20
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <th scope="col" class="px-6 py-3">
                    Blood group
                </th>
                <th scope="col" class="px-6 py-3">
                    Blood group
                </th>
                <td class="px-6 py-4">
                    22/3/10
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <th scope="col" class="px-6 py-3">
                    Blood group
                </th>
                <th scope="col" class="px-6 py-3">
                    Blood group
                </th>
                <td class="px-6 py-4">
                    1/6/22
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </div>
  )
}
