import "./login.css";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
const Login = () => {
    return (
        <div className="loginLayout">
            <div className="loginBanner">
                <img
                    src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="eventBanner"
                    className="loginBannerImg"
                />
            </div>
            <div className="loginBox">

                <div className="loginContainer">
                    <div className="iconContianer">
                        <LockIcon className="lock-icon" fontSize="large" /> 
                        <span className="loginText">Login</span>
                    </div>
                    <div className="LoginTextInput">
                        <TextField
                            required
                            id="outlined-required"
                            label="Email ID"
                            
                        />
                        <div style={{height: "20px"}}></div>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <div style={{height: "20px"}}></div>
                        <button className="checkoutDetailBook">
                            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
                                Login
                            </Link>
                        </button>
                    </div>



                </div>
            </div>
        </div>
    )
}
export default Login;