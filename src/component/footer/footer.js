import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">All Events</li>
                    <li className="fListItem">Nearby Events</li>
                    <li className="fListItem">Events in the City</li>
                </ul>


                <ul className="fList">
                    <li className="fListItem">Live Events</li>
                    <li className="fListItem">Sports Events</li>
                    <li className="fListItem">Standup Comedy</li>
                    <li className="fListItem">Concerts</li>
                </ul>

                <ul className="fList">
                    <li className="fListItem">Unique events to go</li>
                    <li className="fListItem">Reviews</li>
                    <li className="fListItem">Blogs</li>
                    <li className="fListItem">Event communities</li>
                    <li className="fListItem">Special deals</li>
                </ul>

                <ul className="fList">
                    <li className="fListItem">Customer Service</li>
                    <li className="fListItem">Careers</li>
                    <li className="fListItem">Press Center</li>
                    <li className="fListItem">Investor relations</li>
                    <li className="fListItem">Terms & Conditions</li>
                </ul>
            </div>
            <div className="fText">Copyright © 2022 EventBooking.com </div>
        </div>
    );
};

export default Footer;