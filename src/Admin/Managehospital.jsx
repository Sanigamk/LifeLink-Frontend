import React from 'react'

export const Managehospital = () => {
    return (
        <div className='main image3'>

            <div className="w-full h-[250px] pt-14 font-bold text-[20px]">

                <div className=" flex justify-evenly w-[90%] m-auto mb-8">
                    <div className="flex gap-6">
                        <p>Hospital name :</p>
                        <p>Medical College</p>
                    </div>
                    <div className="flex gap-5">
                        <p>Liscence :</p>
                        <p>view</p>
                    </div>
                </div>

                <div className=" flex justify-evenly w-[90%] m-auto mb-8">
                    <div className="flex gap-6 text-start">
                        <p>Place :</p>
                        <p>kutikkattr</p>
                    </div>
                    <div className="flex gap-5">
                        <p>Post office</p>
                        <p>awh</p>
                    </div>
                </div>
                <div className=" flex justify-evenly w-[90%] m-auto mb-8">
                    <div className="flex gap-6">
                        <p>Email :</p>
                        <p>kuti@gmail.com</p>
                    </div>
                    <div className="flex gap-5">
                        <p>Pin :</p>
                        <p>987384</p>
                    </div>
                </div>
                <div className=" flex justify-evenly w-[90%] m-auto mb-8">
                    <div className="flex gap-6">
                        <p>Contact :</p>
                        <p>978766654</p>
                    </div>
                    <div className="flex gap-5">
                        <p>District :</p>
                        <p>Kozhikkod</p>
                    </div>
                </div>
                <div className=" flex justify-evenly w-[90%] m-auto mb-8">
                    <div className="flex gap-6">
                        <p>Liscence no :</p>
                        <p>6764434</p>
                    </div>
                    <div className="flex gap-5">
                        <p>Photo :</p>
                        <input type='' placeholder='view'></input>
                    </div>
                </div>



            </div>

            <div className='flex flex-wrap gap-20 justify-center my-48 text-white font-bold'>
                <button className='bg-red-800 w-20 rounded'>ACCEPT</button>
                <button className='bg-red-800 w-20 rounded'>REJECT</button>
            </div>
        </div>
    )
}
