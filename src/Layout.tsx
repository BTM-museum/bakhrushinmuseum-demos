import { Outlet } from 'react-router-dom';
import Header from "./components/Header/Header";
import Slider from "./components/Panel/Slider/Slider";
import Footer from "./components/Footer/Footer";
import styles from './styles/Layout.module.scss';

const Layout = () => (
    <div className={styles.root}>
        <Header/>
        <Slider/>
        <main className={styles.main}>
            <Outlet />
        </main>
        <Footer/>
    </div>
);

export default Layout;
