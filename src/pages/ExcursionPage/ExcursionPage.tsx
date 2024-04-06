import styles from './ExcursionPage.module.scss';
import {useLocation} from "react-router-dom";

const ExcursionPage = () => {
    const { pathname } = useLocation();
    return <div className={styles.container}>
        <h1>{`ExcursionPage number: ${pathname}`}</h1>
    </div>
};


export default ExcursionPage;