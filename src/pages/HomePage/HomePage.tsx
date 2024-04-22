import styles from './HomePage.module.scss';
import EventWidget from "../../components/Event/EventWidget/EventWidget";
import NewsWidget from "../../components/News/NewsWidget/NewsWidget";
import BuildingsWidget from "../../components/Buildings/BuildingsWidget/BuildingsWidget";
import Filials from "../../components/Filials/Filials";

const HomePage = () => {
    return <div className={styles.container}>
        <EventWidget/>

        {/*<NewsWidget/>*/}
        {/*<BuildingsWidget/>*/}
        {/*<Filials/>*/}
    </div>
}

export default HomePage;