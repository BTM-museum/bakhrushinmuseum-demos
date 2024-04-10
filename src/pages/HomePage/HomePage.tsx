import styles from './HomePage.module.scss';
import EventWidget from "../../components/Event/EventWidget/EventWidget";

const HomePage = () => {
    return <div className={styles.container}>
        <EventWidget/>
    </div>
}

export default HomePage;