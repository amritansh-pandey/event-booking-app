import "./navbar.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <div className="logoCenter">
                    <span className="logo"><Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>EventBooking.com</Link></span>
                </div>



            </div>
        </div>

    )
}

export default Navbar