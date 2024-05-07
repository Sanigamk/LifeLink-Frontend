import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const Vwupdateprofile = () => {

    let id = localStorage.getItem('id')

    const [data, setData] = useState('')
    const [userData, setuserData] = useState('')
    const [refresh, setrefresh] = useState(false)

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:5000/organdonor/vworganprofile/${id}`)
            console.log(response.data);
            setuserData(response.data)
        }
        fetchdata()

    }, [refresh])

    let handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
      }

    let handlefile = (event) => {
        console.log(event.target.files);
        setData({ ...data, [event.target.name]: event.target.files[0] })
        console.log(data);
      }
      let handlesubmit = async (event) => {
        event.preventDefault()

        if(data.conformpassword!=data.password){
            return toast.error('password doesnt match')
        
          }
          toast.success('Profile updated')
              setrefresh(!refresh)

        const formData = new FormData();
        for (const key in data) {
            if (data[key]) {
                formData.append(key, data[key]);
            }
        }
        let response = await axios.put(`http://localhost:5000/organdonor/editdonorprofile/${id}`, formData, {
            headers: {
                'content-Type': 'multiport/form-data'
            }
        })
        console.log(response);
        setrefresh(!refresh)
    }
    return (
        <div className='image3'>
            <form onSubmit={handlesubmit} class="w-[100%] ">

                <div className='flex w-[100%] justify-center sm:gap-10 mt-10'>

                    <div className='w-[25%]'>

                        <div class="mb-5">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name :</label>
                            <input onChange={handleChange} name="name" type="text" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.name} />
                        </div>
                        <div class="mb-5">
                            <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age :</label>
                            <input onChange={handleChange} name="age" type="text" pattern="[0-9]{2}" maxLength={2} title="Please enter a valid 6-digit PIN code" id="age" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.age} />
                        </div>
                        <div class="mb-5">
                            <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
                            <input onChange={handleChange} name="email" type="email" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.email} />
                        </div>
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact :</label>
                            <input onChange={handleChange} name="contact" type="number" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.contact} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address:</label>
                            <input onChange={handleChange} name="address" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.address} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of birth :</label>
                            <input onChange={handleChange} name="dateofbirth" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.dateofbirth} />
                        </div>
                        <div class="mb-5">
                        <a target='_blank' href={`http://localhost:5000/uploads/${userData.healthcertificate}`} download> <img className='w-[80px] h-20' src={`http://localhost:5000/uploads/${userData.healthcertificate}`} alt='click to view & download pdf' /></a>
                             <a target='_blank' href={`http://localhost:5000/uploads/${userData.healthcertificate}`} download> <span> </span> </a>
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Health certificate :</label>
                            <input onChange={handlefile} name="healthcertificate" type="file" id="img" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.healthcertificate} />
                        </div>
                        <div class="mb-5">
                            {/* <img className='w-[80px] h-14' src={`http://localhost:5000/uploads/${userData.healthcertificate}`} alt="" /> */}
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Health issue :</label>
                            <input onChange={handleChange} name="healthissue" type="text" id="img" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.healthissue} />
                        </div>
                        <div class="mb-5">
                             <a target='_blank' href={`http://localhost:5000/uploads/${userData.signature}`} download> <img className='w-[80px] h-20' src={`http://localhost:5000/uploads/${userData.signature}`} alt='click to view & download pdf' /></a>
                             <a target='_blank' href={`http://localhost:5000/uploads/${userData.signature}`} download> <span> </span> </a>
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Signature :</label>
                            <input onChange={handlefile} name="healthcertificate" type="file" id="img" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.signature} />
                        </div>
                        <div class="mb-5">
                            <label for="house name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adhaar number:</label>
                            <input onChange={handleChange} name="postoffice" type="text" id="house name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.adhaarnumber} />
                        </div>
                        <div class="mb-5">
                            <label for="post" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood group :</label>
                            <input onChange={handleChange} name="pin" type="number" id="post" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.bloodgroup} />
                        </div>
                    </div>
                    <div className='w-[25%]'>

                        <div class="mb-5">
                            <label for="house name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height:</label>
                            <input onChange={handleChange} name="postoffice" type="text" id="house name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.height} />
                        </div>
                        <div class="mb-5">
                            <label for="post" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight:</label>
                            <input onChange={handleChange} name="pin" type="number" id="post" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.weight} />
                        </div>
                        <div class="mb-5">
                        <a target='_blank' href={`http://localhost:5000/uploads/${userData.conformationcertificate}`} download> <img className='w-[80px] h-20' src={`http://localhost:5000/uploads/${userData.healthcertificate}`} alt='click to view & download' /></a>
                           <a target='_blank' href={`http://localhost:5000/uploads/${userData.conformationcertificate}`} download> <span> </span> </a>
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conformation certificate :</label>
                            <input onChange={handlefile} name="healthcertificate" type="file" id="img" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.conformationcertificate} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nominee :</label>
                            <input onChange={handleChange} name="weight" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.nominie} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nominee contact :</label>
                            <input onChange={handleChange} name="height" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.nominiecontact} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nominee relation :</label>
                            <input onChange={handleChange} name="height" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.nominierelation} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason of Death:</label>
                            <input onChange={handleChange} name="reasonofdeath" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.reasonofdeath} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Death:</label>
                            <input onChange={handleChange} name="dateofdeath" type="date" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.dateofdeath} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time:</label>
                            <input onChange={handleChange} name="time" type="time" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.time} />
                        </div>
                        <div class="mb-5">
                            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organs for donation:</label>
                            <span className='font-bold'> 
                            {userData.organsBeforeDeath?.liver && <h2>liver</h2>}
                            {userData.organsBeforeDeath?.heart && <h2>heart</h2>}
                           {userData.organsBeforeDeath?.kidney && <h2>kidney</h2>}
                           {userData.organsBeforeDeath?.lung && <h2>lung</h2>}
                           {userData.organsBeforeDeath?.pancreas && <h2>pancreas</h2>}

                                {userData.organsAfterDeath?.heart && <h2>heart</h2>}
                                {userData.organsAfterDeath?.liver && <h2>liver</h2>}
                                {userData.organsAfterDeath?.kidney && <h2>kidney</h2>}
                                {userData.organsAfterDeath?.lung && <h2>lung</h2>}
                                {userData.organsAfterDeath?.pancreas && <h2>pancreas</h2>}
                                {userData.organsAfterDeath?.tissue && <h2>tissue</h2>}
                                {userData.organsAfterDeath?.bone && <h2>bone</h2>}
                                {userData.organsAfterDeath?.skin && <h2>skin</h2>}

                           </span>
                            {/* <input onChange={handleChange} name="weight" type="text" id="contact" class="shadow-sm bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.organsBeforeDeath} /> */}
                        </div>

                        <div class="flex flex-wrap mt-5 items-center pt-7 justify-around ">

                            <button type="submit" class="text-white  bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                            {/* <button type="submit" class="text-white  bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button> */}
                        </div>
                    </div>
                    <div>

                    </div>

                </div>




            </form>
        </div>
    )
}
