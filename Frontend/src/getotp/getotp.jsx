import React, { useState } from 'react';
import './getotp.css';
import bg from '../Images/login_page.png';
import { Link } from 'react-router-dom'; // Import Link
import axios from 'axios';

function GetOtp() {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const handleVerifyOTP = async () => {
        try {
            if (!otp) {
                setError("Please enter the OTP.");
                return;
            }

            const response = await axios.post('http://localhost:8000/api/otpmatching', { otp });
            
            // Redirect to ResetPass component
            return;
        } catch (error) {
            setError("Incorrect OTP. Please try again.");
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-container3">
            <img for="get"src={bg} alt='bg' />
            <div className="overlay-contant3">
                <h2 for="getsize">Empowering Your Trades: Where <br /> Opportunities Meet Expertise</h2>
                <h1 for="otp">Please enter the OTP you received on email</h1>
                <div className="form-container3">
                    <form onSubmit={handleVerifyOTP}>
                        <div>
                            <input type="text" placeholder='Enter OTP' value={otp} className="text3"onChange={(e) => setOtp(e.target.value)} required />
                        </div>
                        {error && <div className="error">{error}</div>}
                        <div>
                            <button type="submit" className="btn3"><Link to="/resetPass">Verfy OTP</Link></button>
                        </div>
                    </form>
                </div>
                <div className="donthaveacc3">
                    <div>
                        <span id="account3">Don't have an account?</span>
                        <Link to="/signup" className="signup3">Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetOtp;
