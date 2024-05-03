import React, { useState } from "react";
import "./forgetPassword.css";
import bg from "../Images/login_page.png";
import { Link } from "react-router-dom"; // Import Link
import axios from "axios";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async () => {
    try {
      if (!email) {
        setError("Please enter your email address.");
        return;
      }

      const response = await axios.post(
        "http://localhost:8000/api/otpgenerate",
        { email }
      );
      const data=await response.json( );
      if (data.success) {
        
      }
       
      return <Link to="/getotp">Go to Get OTP</Link>;
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container2">
      <img for="forget" src={bg} alt="bg" />
      <div className="overlay-contant2">
        <h2 for="fp">
          Empowering Your Trades: Where <br /> Opportunities Meet Expertise
        </h2>
        <h1 for="fup">FORGET YOU PASSWORD ?</h1>
        <p for="emailcheck">PLEASE ENTER THE EMAIL YOU USED TO SIGN IN</p>
        <div className="form-container2">
          <form>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                className="text2"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {error && <div className="error">{error}</div>}
            <div>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="btn2"
              >
                Request OTP
              </button>
            </div>
          </form>
        </div>
        <div className="donthaveacc2">
          <div>
            <span id="account2">Don't have an account?</span>
            <Link to="/signup" className="signup2">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
