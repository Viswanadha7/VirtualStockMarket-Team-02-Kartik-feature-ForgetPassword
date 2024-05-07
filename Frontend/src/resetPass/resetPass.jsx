import React, { useState } from 'react';
import './resetPass.css';
import bg from '../Images/login_page.png';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

function ResetPass() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            if (!newPassword || !confirmPassword) {
                setError("Please enter both new and confirm passwords.");
                return;
            }

            if (newPassword !== confirmPassword) {
                setError("Passwords do not match.");
                return;
            }

            const response = await axios.post('http://localhost:8000/api/newpassword', { newPassword });
            
            // Redirect to PassSuccess component
            return;
        } catch (error) {
            setError("Something went wrong. Please try again later.");
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-container4">
            <img for="resetPass" src={bg} alt='bg' />
            <div className="overlay-contant4">
                <h2 for="reset">Empowering Your Trades: Where <br /> Opportunities Meet Expertise</h2>
                <h1 for="reset1">Reset Your Password?</h1>
                <div className="form-container4">
                    <form onSubmit={handleResetPassword}>
                        <label for="reset2">New Password</label>
                        <div>
                            <input type="password" className='text4' placeholder='Enter New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                        </div>
                        <label for="reset2">Confirm Password</label>
                        <div>
                            <input type="password" className='text4' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                        {error && <div className="error">{error}</div>}
                        <div>
                            <button type="submit" className="btn4"><Link to="/PassSuccess">Save</Link></button>
                        </div>
                    </form>
                </div>
                <div className="donthaveacc4">
                    <div>
                        <span id="account4">Don't have an account?</span>
                        <Link to="/signup" className="signup4">Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPass;
