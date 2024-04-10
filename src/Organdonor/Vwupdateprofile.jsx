import React, { useState } from 'react'

export const Vwupdateprofile = () => {

    const [data, setData] = useState('')
    const [userData, setuserData] = useState('')

    let handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
      }

    let handlefile = (event) => {
        console.log(event.target.files);
        setData({ ...data, [event.target.name]: event.target.files[0] })
        console.log(data);
      }
    return (
        <div className='image3'>
            <form class="w-[100%] ">

                <div className='flex w-[100%] justify-center sm:gap-10 mt-10'>

                    <div className='w-[25%]'>

                        <div class="mb-5">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name :</label>
                            <input onChange={handleChange} name="name" type="text" id="name" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.name} />
                        </div>
                        <div class="mb-5">
                            <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age :</label>
                            <input onChange={handleChange} name="age" type="number" id="age" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.age} />
                        </div>
                        <div class="mb-5">
                            <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
                            <input onChange={handleChange} name="email" type="email" id="place" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.email} />
                        </div>
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact :</label>
                            <input onChange={handleChange} name="contact" type="number" id="place" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.contact} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address:</label>
                            <input onChange={handleChange} name="place" type="text" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.place} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of birth :</label>
                            <input onChange={handleChange} name="housename" type="text" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.housename} />
                        </div>
                        <div class="mb-5">
                            {/* <img className='w-[80px] h-14' src={`http://localhost:5000/uploads/${userData.healthcertificate}`} alt="" /> */}
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Health certificate :</label>
                            <input onChange={handlefile} name="healthcertificate" type="file" id="img" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.healthcertificate} />
                        </div>
                        <div class="mb-5">
                            {/* <img className='w-[80px] h-14' src={`http://localhost:5000/uploads/${userData.healthcertificate}`} alt="" /> */}
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Health issue :</label>
                            <input onChange={handlefile} name="healthcertificate" type="file" id="img" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.healthcertificate} />
                        </div>
                        <div class="mb-5">
                            {/* <img className='w-[80px] h-14' src={`http://localhost:5000/uploads/${userData.healthcertificate}`} alt="" /> */}
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Signature :</label>
                            <input onChange={handlefile} name="healthcertificate" type="file" id="img" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.healthcertificate} />
                        </div>
                        <div class="mb-5">
                            <label for="house name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adhaar number:</label>
                            <input onChange={handleChange} name="postoffice" type="text" id="house name" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.postoffice} />
                        </div>
                        <div class="mb-5">
                            <label for="post" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood group :</label>
                            <input onChange={handleChange} name="pin" type="number" id="post" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.pin} />
                        </div>
                    </div>
                    <div className='w-[25%]'>

                        <div class="mb-5">
                            <label for="house name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height:</label>
                            <input onChange={handleChange} name="postoffice" type="text" id="house name" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.postoffice} />
                        </div>
                        <div class="mb-5">
                            <label for="post" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight:</label>
                            <input onChange={handleChange} name="pin" type="number" id="post" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.pin} />
                        </div>
                        <div class="mb-5">
                            {/* <img className='w-[80px] h-14' src={`http://localhost:5000/uploads/${userData.healthcertificate}`} alt="" /> */}
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conformation certificate :</label>
                            <input onChange={handlefile} name="healthcertificate" type="file" id="img" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.healthcertificate} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nominee :</label>
                            <input onChange={handleChange} name="weight" type="text" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.weight} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nominee contact :</label>
                            <input onChange={handleChange} name="height" type="text" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.height} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nominee relation :</label>
                            <input onChange={handleChange} name="height" type="text" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.height} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason of Death:</label>
                            <input onChange={handleChange} name="weight" type="text" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.weight} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Death:</label>
                            <input onChange={handleChange} name="weight" type="text" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.weight} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organs for donation:</label><span className='font-bold'>Heart    Liver</span>
                            {/* <input onChange={handleChange} name="weight" type="text" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.weight} /> */}
                        </div>

                        <div class="flex flex-wrap mt-5 items-center pt-7 justify-around ">

                            <button type="submit" class="text-white  bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                            <button type="submit" class="text-white  bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>




            </form>
        </div>
    )
}
