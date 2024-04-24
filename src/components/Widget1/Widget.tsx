import React, { useState } from 'react';
import styles from './Widget.module.scss';
import { motion } from 'framer-motion';
import {Link} from "react-router-dom";
import image219 from './static/image219.png'
import image220 from './static/image220.png'


interface IEntity {
    id: number;
    title: string;
    link: string;
}

interface IWidget extends IEntity {
    imageUrl: string;
    description: string;
    backgroundColor: string;
    buttonText: string;
    type?: string;
}


const Widget = () => {
    return <motion.div className={styles.wrapper}>
        <motion.div className={styles.imageWrapper}>
            <img src={image219} alt=""/>
        </motion.div>
        <motion.div className={styles.text}>
            <p>Театральная студия</p>
            <h1>Бахрушинский детям</h1>
            <Link to={'children'}>Узнать подробнее</Link>
        </motion.div>
        <motion.div className={styles.imageWrapper}>
            <img src={image220} alt=""/>
        </motion.div>
    </motion.div>
};

export default Widget;
