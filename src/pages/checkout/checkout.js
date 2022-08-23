import "./checkout.css";
import { Link, useParams } from "react-router-dom";
import { eventsList } from "../../event";


const Checkout = ({ item }) => {
    const { id } = useParams();

    const singleCheckout = eventsList.find(item => item.id === parseInt(id))

    const { title, date, time, place, price, bannerImg } = singleCheckout
    return (
        <div className="checkout">
            <div className="checkoutLayout">
                <div className="ticketInfo">
                    <span className="ticketInfoTitle">Ticket Info</span>
                    <div className="ticketInfoDetail">
                        <ol>
                            <li>
                                Customer(s) can access their ticket(s) from the 'My Profile'
                                section on the app/mobile-web.
                            </li>
                            <li>
                                It is mandatory to present the ticket(s) in my profile section
                                via app/mobile-web at the venue.
                            </li>
                            <li>No physical ticket(s) are required to enter the venue.</li>
                        </ol>
                    </div>
                </div>
                <div className="checkoutDetail">
                    <div>
                        <img
                            src={bannerImg}
                            alt="eventBanner"
                            className="eventBannerSmall"
                        />
                    </div>
                    <div className="checkoutDetailTitlePrice">
                        <span className="checkoutDetailTitle">
                            {title}
                        </span>
                        <span className="checkoutDetailPrice">₹{price}</span>
                    </div>
                    <div className="divider"></div>
                    <div className="checkoutDetailDateTimeVenue">
                        <span className="checkoutDetailDate">{date}</span>
                        <span className="checkoutDetailTime">{time}</span>
                        <span className="checkoutDetailVenue">Venue</span>
                        <span className="checkoutDetailLocation">
                            {place}
                        </span>
                    </div>
                    <div className="divider"></div>
                    <div className="checkoutDetailTotalPrice">
                        <span className="checkoutDetailTotal">Sub-total</span>
                        <span className="checkoutDetailPrice">₹{price}</span>
                    </div>
                    <div className="checkoutDetailBookingPrice">
                        <span className="checkoutDetailBooking">Booking Fee</span>
                        <span className="checkoutDetailPrice">₹0</span>
                    </div>
                    <div className="divider"></div>
                    <div className="checkoutDetailAmountPrice">
                        <span className="checkoutDetailAmount">Total Amount</span>
                        <span className="checkoutDetailPrice">₹{price}</span>
                    </div>

                    <div className="checkoutDetailBookNow">
                        <button className="checkoutDetailBook">
                            <Link to="/thankyou" style={{ textDecoration: "none", color: "white" }}>
                                Book Now
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Checkout;