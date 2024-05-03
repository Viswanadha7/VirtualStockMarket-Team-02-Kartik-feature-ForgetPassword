import React from 'react';
import bg from '../Images/login_page.png';
import '../Login/login.css';
import { Link } from 'react-router-dom';

function login() {
    console.log(bg);
    return (
        
        <div className="login-container1">
            <img for="loginpage"src={bg} alt='bg' />
            <div className="overlay-contant1">
                <h2>Empowering Your Trades: Where <br /> Opportunities Meet Expertise</h2>
                <h1 for="login">Login</h1>
                <div className="form-container1">
                    <form>
                        <label for="email">
                            <h1 for="email">Email</h1>
                        </label>
                        <div><input className="text1" type="email" placeholder=' Enter Email' name='email' required /></div>
                        <label>
                            <h1 for="password">Password</h1>
                        </label>
                        <div><input className="text1" type="password" placeholder=' Enter password' name='password' required /></div>

                       <div class ="for-pass1">

                       <div class = "keepmein1">
                                <input type="checkbox" name="keepLoggedIn" />  
                                <label> 
                                <span id = "keepme1">Keep me logged in </span> </label>
                            </div>

                            <div class = "forgetpassword1">
                                {/* Use Link component instead of anchor tag */}
                                <Link to="/forgetPassword" className="forgot-password1">Forgot password?</Link>
                            </div> 
                            </div> 
                            {/* <div class = "forgetpassword">
                                <a href="/forgetPassword" className="forgot-password">Forgot password?</a>
                            </div> 
                            </div>  */}
                        
                        <button class="btn1">Login</button>

                        <div class = "donthaveacc">
                            <div>
                                <label> 
                                <span id = "account1">Dont have an account?  </span> </label>
                            </div>

                            <span class ="divsign1">
                                <a href="#" class="signup1">Signup</a>
                            </span>

                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login;
