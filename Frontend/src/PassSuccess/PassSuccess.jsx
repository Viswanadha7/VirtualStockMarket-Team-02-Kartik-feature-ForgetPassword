import React from 'react';
import './PassSuccess.css';
import { Link } from 'react-router-dom';
import bg from '../Images/login_page.png';
import logo_icon from '../Images/pngtree-green-check-mark-png-image_6525691.png';

function LoginSuccess() {
    return (
        <div className="login-container5">
            <img for="PassSuccess1" src={bg} alt="Background" />
            <div className="overlay-content5">
                <div className="logo-icon">
                    <img for="PassSuccess2" src={logo_icon} alt="Logo" className="logo" />
                </div>
                <h2 for="success">Password Changed!</h2>
                <h1 for="success2">Your password has been Changed<br></br>Successfully.</h1>
                <div className="form-container5">
                    <button className="btn5"><Link to="/">Go to Login</Link></button>
                </div>
            </div>
        </div>
    );
}

export default LoginSuccess;
