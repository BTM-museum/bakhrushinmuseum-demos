import styles from './HomePage.module.scss';
import EventWidget from "../../components/Event/EventWidget/EventWidget";
import NewsWidget from "../../components/News/NewsWidget/NewsWidget";
import BuildingsWidget from "../../components/Buildings/BuildingsWidget/BuildingsWidget";

const HomePage = () => {
    return <div className={styles.container}>
        <EventWidget/>

        <NewsWidget/>
        <BuildingsWidget/>
    </div>
}

export default HomePage;