import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Sendorganrqsthist = () => {
    // let id = localStorage.getItem('id')
let {id}=useParams();
    console.log(id,'----------donorId------------')

    const [data, setData] = useState([''])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:5000/hospital/vwpageorgandnr/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    }, [])
  return (
    <div className='image3 w-[100%]'>
      <div className="w-full  pt-20 font-bold text-[20px]">
                <h1 className='text-red-800 underline'>HOSPITAL REQUEST</h1>

                <div className=" w-[90%]  m-auto mb-8">
                    <div className="flex flex-wrap  ">
                        <p>Patient name :</p>
                        {data.vwpageorgandnr?.patientname && <span>{data.vwpageorgandnr?.patientnamr} </span>} 
                   {data.reqstt?.patientname && <span>{data.reqstt?.patientname} </span>}
                    </div>
                    <div className="flex ">
                        <p>Age :</p>
                        {data.vwpageorgandnr?.age && <span>{data.vwpageorgandnr?.age} </span>} 
                   {data.reqstt?.age && <span>{data.reqstt?.age} </span>}
                    </div>
                    <div className="flex gap-5">
                        <p>health certificate :</p>
                        {data.vwpageorgandnr?.healthcertificate && <span>{data.req?.healthcertificate} </span>} 
                   {data.reqstt?.healthcertificate && <span>{data.reqstt?.healthcertificate} </span>}
                    </div>
                    <div className="flex gap-5">
                        <p>Organ :</p>
                        {data.vwpageorgandnr?.organ && <span>{data.vwpageorgandnr?.organ} </span>} 
                   {data.reqstt?.organ && <span>{data.reqstt?.organ} </span>}
                    </div>
                    <div className="flex gap-5">
                        <p>Blood group :</p>
                        {data.vwpageorgandnr?.bloodgroup && <span>{data.vwpageorgandnr?.bloodgroupp} </span>} 
                   {data.reqstt?.bloodgrup && <span>{data.reqstt?.bloodgroup} </span>}
                    </div>
                </div>
                <div className="w-full  pt-20 font-bold text-[20px]">
                <h1 className='text-red-800 underline'>ORGAN DONOR DETAILS</h1>
                <div className=" flex justify-evenly w-[90%] m-auto mb-8">
                    <div className="flex gap-6">
                        <p>Name :</p>
                        <p>{data?.donorr?.name}

                        </p>
                    </div>
                    <div className="flex gap-5">
                        <p>Address :</p>
                        <p>{data?.donorr?.address}</p>
                    </div>
                </div>

                <div className=" flex justify-evenly w-[90%] m-auto mb-8">
                    <div className="flex gap-6 text-start">
                        <p>Age :</p>
                        <p>{data?.donorr?.age}</p>
                    </div>
                    <div className="flex gap-5">
                        <p>Organ :</p>
                        <p>{data?.donorr?.organ}</p>
                    </div>
                </div>
                
                <div className=" flex justify-evenly w-[90%] m-auto mb-8">
                    <div className="flex gap-6">
                        <p>Email :</p>
                        <p>{data?.donorr?.email}</p>
                    </div>
                    <div className="flex gap-5">
                        <p>Height :</p>
                        <p>{data?.donorr?.height}</p>
                    </div>
                </div>
                <div className=" flex justify-evenly w-[90%] m-auto mb-8">
                    <div className="flex gap-6">
                        <p>Contact :</p>
                        <p>{data?.donorr?.contact}</p>
                    </div>
                    <div className="flex gap-5">
                        <p>Weight :</p>
                        <p>{data?.donorr?.weight}</p>
                    </div>
                </div>
                <div className=" flex justify-evenly w-[90%] m-auto mb-8">
                    <div className="flex gap-6">
                        <p>Pin :</p>
                        <p>{data?.donorr?.Pin}</p>
                    </div>
                    <div className="flex gap-5">
                        <p>Conformation certificate :</p>
                        <a href={`http://localhost:5000/uploads/${data.donorr?.conformationcertificate}`} download> <img className='h-[45px] w-[50px]' src={`http://localhost:5000/uploads/${data.donorr?.conformationcertificate}`} alt="" /> </a>
                    </div>
                </div>

            </div>

                

        </div>


    </div>
  )
}
