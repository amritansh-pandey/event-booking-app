import "./event.css";
import { Link, useParams } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { red, blue, purple } from '@mui/material/colors';
import { eventsList } from "../../event";



const Event = ({item}) => {
  const { id } = useParams();

  const singleEvent = eventsList.find(item => item.id === parseInt(id))
  
  const {title, date, time, category, artist, city, location, place, price, duration, rating, language, description, bannerImg } = singleEvent
  return (
    <div className="event">
      <div className="eventBannerContaine">
        <img
          src={bannerImg}
          alt="eventBanner"
          className="eventBanner"
        />
      </div>
      <div className="eventContainer">
        <div className="eventDetail">
          <div className="eventTitleInfo">
            <span className="eventTitle">{title}</span>
            <span className="eventInfo">{category} Show | {language} | {duration}</span>
          </div>
          <div>
            <button className="bookNow">  <Link  to={`/checkout/${id}`} style={{ textDecoration: 'none', color: 'white' }}>Book Now</Link></button>
          </div>
        </div>
        <div className="eventDateTimePrice">
          <span className="eventDate">{date} at {time}</span>
          <span className="eventPlace">{place}</span>
          <span className="eventPrice">₹{price}</span>
          <span className="eventPrice"> Rating:  {rating} ⭐</span>
        </div>
        <div className="eventLayout">
          <div className="artistInfo">
            <span className="artist">Artist</span>
            <span className="artistName">{artist}</span>
            <div className="socialMedia">
              <InstagramIcon sx={{ color: purple[500] }} />
              <FacebookIcon sx={{ color: blue[500] }} />
              <YouTubeIcon sx={{ color: red[500] }} />

            </div>
          </div>
          <div className="eventDescription">
            <span className="descriptionTitle">Why you should attend?</span>
            <span className="descriptionText">
              {description}
            </span>
          </div>
          <div className="eventCityPlaceLocation">
            <span className="city">{city}</span>
            <span className="place">{place}</span>
            <span className="location">
              {location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
