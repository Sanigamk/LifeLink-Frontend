import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Searchorgandnr = () => {
    let bid = localStorage.getItem('id')
    const [data, setData] = useState([])
    const [organ, setOrgan] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [refresh, setRefresh] = useState(false)

    let { id } = useParams()

        useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`http://localhost:5000/hospital/vworgandonors/${bid}`, {
                params: { organ, bloodGroup } // Pass organ and blood group as query parameters
            })
            setData(response.data)
        }
        fetchData()
    }, [refresh, organ, bloodGroup, bid])

    let handleSubmit = async (did) => {
        setRefresh(!refresh)
        let response = await axios.post('http://localhost:5000/hospital/sendrequestorgandonor', {
            organdonorId: did,
            hospitalId: bid,
            requestId: id
        })
        console.log(response);
    }

    let all=()=>{
        window.location.reload()

    }

    return (
        <div className='images2 w-[100%] h-[42rem]'>
            <form className="max-w-lg mx-auto pb-10 pt-10">
                <div className="flex items-center">
                <select
    value={organ}
    onChange={(e) => setOrgan(e.target.value)}
    className='h-[41px] inline-flex items-center py-2.5 text-[100%] px-4  text-sm font-medium text-center rounded-lg  bg-red-800 border border-gray-300  hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700'
>
    <option disabled value="">Select Organ</option>
    {data.map((item) => {
        const organs = Object.keys(item.organsBeforeDeath).filter(organ => item.organsBeforeDeath[organ]);
        return organs.map((organ, index) => (
            <option key={index} value={organ}>{organ}</option>
        ));
    })}
</select>
<select
    value={bloodGroup}
    onChange={(e) => setBloodGroup(e.target.value)}
    className='h-[41px] inline-flex items-center py-2.5 text-[100%] px-4  text-sm font-medium text-center rounded-lg  bg-red-800 border border-gray-300  hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700'
>
    <option disabled value="">Select Blood Group</option>
    {data.map((item) => (
        <option key={item._id} value={item.bloodgroup}>{item.bloodgroup}</option>
    ))}
</select>

                    <button onClick={all} className='bg-red-800 text-white p-2 w-20 rounded-lg'>All</button>
                </div>
            </form>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-14 mt-10 ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase dark:bg-gray-700 bg-red-800 rounded">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                            <th scope="col" className="px-6 py-3">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={item._id}>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </td>
                                <td className="px-6 py-4">
                                    {item.age}
                                </td>
                                <td className="px-6 py-4">
                                    {item.address}
                                </td>
                                <td className="px-6 py-4">
                                    {item.email}
                                </td>
                                <td className="px-6 py-4">
                                    {item.contact}
                                </td>
                                <td className="px-6 py-4">
                                    {item.status}
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => handleSubmit(item._id)} className='bg-red-800 w-20 rounded'>ASSIGN</button>
                                </td>
                                <td className="px-6 py-4">
                                    <Link to={`/hospital/assignorgan/${item._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
