import styles from './AboutPage.module.scss';
import React from 'react';
import {useParams} from "react-router-dom";

const AboutPage = () => {
    const { id } = useParams();
    return <div className={styles.wrapper}>
        <h1>About</h1>
    </div>
};

export default AboutPage;