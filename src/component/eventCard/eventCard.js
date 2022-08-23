import "./eventCard.css";

const EventCard = ({
    item: { cardImg, title, place, price, rating },
}) => {
    return (
        <div className="eventCard">
            <div className="cardImageContainer">
                <img className="cardImage" src={cardImg} alt="cardImg" />
            </div>
            <div className="cardDetail">
                <span className="eventName">{title}</span>
                <span className="eventLocation">{place}</span>
                <div className="cardInfoFlex">
                    <span className="eventPrice">₹{price}</span>
                    <span className="eventRating">{rating} ⭐</span>
                </div>


            </div>
        </div>
    )
}
export default EventCard;