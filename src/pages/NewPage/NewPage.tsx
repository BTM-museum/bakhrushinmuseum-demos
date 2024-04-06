import styles from './NewPage.module.scss';
import {useLocation} from "react-router-dom";

const NewPage = () => {
    const { pathname } = useLocation();

    return <div className={styles.container}>
        <h1>{pathname}</h1>

    </div>
};

export default NewPage;