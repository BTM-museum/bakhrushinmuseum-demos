import styles from './EventCard.module.scss';
import {IEvent} from "../../../types";
import {Link} from "react-router-dom";
import {transliterate} from "../../../helpers/translate";

const EventCard = (event: IEvent) => {
    return <Link to={`/excursion/${event.link}`} className={styles.wrapper}>
        <div>
            <img src={event.image} alt={event.title}/>
            {event.type && <p>{event.type}</p>}
        </div>
        <h1>{event.title}</h1>
        <p>{event.date.from.toString()}</p>
        <p>{event.date.to.toString()}</p>
        <p>{event.position}</p>
    </Link>
};

export default EventCard;