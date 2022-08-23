import "./thankyou.css";
import {  Link } from "react-router-dom";
const Thankyou = () => {
    return (
        <div className="thankYou">
            <img src="https://i.ibb.co/NncR867/tick-1.png" alt="" className="tick"/>
            <h1>Thank you for Booking the Ticket </h1>
           
            <button className="thankyouButton">
                            <Link to="/home" style={{textDecoration:'none', color:'white'}}>
                            Go Back to Home Page
                            </Link>
                        </button>
                        <div style={{height: "135px"}}></div>
        </div>
    )
}
export default Thankyou;