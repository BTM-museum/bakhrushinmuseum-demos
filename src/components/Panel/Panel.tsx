import styles from './Panel.module.scss';
import {useLocation} from "react-router-dom";
import image from './static/filials.png';
import {CSSProperties, useEffect} from "react";

const Panel = () => {
    const { pathname } = useLocation();
    const jsx = <h1>{'Это панель с путем'}</h1>;
    useEffect(() => {
        console.log(pathname)
    }, [pathname]);


    const rootStyles: {[key: string ]: CSSProperties}  = {
        '': {},
        'event': {},
        'excursion': {},
        'exhibition': {},
        'exposition': {},
        'news': {},
        'store': {},
    }
    return <div className={styles.wrapper}>
        {jsx}
        <div style={rootStyles[pathname.split('/')[1]]} className={styles.backgroundImage}>
            <img src={image} alt={image} className={styles.filials} />
        </div>
    </div>
};

export default Panel;