import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Emailotp = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [verifyotp, setVerifyotp] = useState('')
    let navigate = useNavigate()

    const sendOTP = async () => {
        try {
            const response = await axios.post('https://lifelink-backend-evaw.onrender.com/user/sendOTP', { email });
            setMessage(response.data.message);
            console.log(response.data.otp, '--------------------');
            setVerifyotp(response.data.otp)
        } catch (error) {
            setMessage('Error sending OTP. Please try again.');
        }
    };

    const verifyOTP = async () => {
        try {
            console.log(verifyotp, otp);
            if (verifyotp == otp) {
                // alert('success')
                navigate(`/changepass/${email}`)
            }
        } catch (error) {
            setMessage('Error verifying OTP. Please try again.');
        }
    };


    return (
        <div className='image1 pt-[98px] text-[20px]'>
                <div className='bg-red-800 w-fit p-14 m-auto mt-1 rounded-lg'>
                    <div className='text-[25px] text-white pb-6'>Email OTP Verification</div>
                    <div className=''>
                        <input className='bg-white rounded-lg pe-20' type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                    <button className='bg-white text-black w-40 mt-10' onClick={sendOTP} > SEND OTP</button>
                    <div><input className='bg-white rounded-lg pe-20 mt' type="otp" placeholder="enter your OTP" value={otp} onChange={(e) => setOtp(e.target.value)} /></div>
                    <button className='bg-white mt-10' onClick={verifyOTP}>Verify OTP</button>
                    </div>
                <p>{message}</p>
        </div>
    )
}
export default Emailotp