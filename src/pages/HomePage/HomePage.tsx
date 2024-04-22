import styles from './HomePage.module.scss';
import EventWidget from "../../components/Event/EventWidget/EventWidget";
import NewsWidget from "../../components/News/NewsWidget/NewsWidget";
import BuildingsWidget from "../../components/Buildings/BuildingsWidget/BuildingsWidget";
import Filials from "../../components/Filials/Filials";
import Widget from "../../components/Widget/Widget";
import News from "../../components/News/News";
import Shop from "../../components/Shop/Shop";

const HomePage = () => {
    return <div className={styles.container}>
        <EventWidget/>
        <Widget/>
        <News/>
        <Shop/>
        <Widget/>

        {/*<NewsWidget/>*/}
        {/*<BuildingsWidget/>*/}
        {/*<Filials/>*/}
    </div>
}

export default HomePage;