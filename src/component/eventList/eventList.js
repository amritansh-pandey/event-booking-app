
import './eventList.css';
import { Link } from 'react-router-dom'
import EventCard from '../eventCard/eventCard';

const EventList = ({ list }) => (
    <div className='list-wrap'>
        {list.map((item) => (
            <Link to={`/event/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <EventCard key={item.id} item={item} />
            </Link>
        ))}
    </div>
);



export default EventList;