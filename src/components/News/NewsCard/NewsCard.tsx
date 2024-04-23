import styles from './NewsCard.module.scss';
import React from 'react';
import {INew} from "../../../types";
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';
import dayjs from "dayjs";
dayjs.locale('ru'); // установка локали


const NewsCard = (props: INew) => {
    const formattedToDate = props.date.format('DD MMMM');
    return <Link to={props.link} className={styles.wrapper}>
        <motion.div className={styles.img} style={{ backgroundImage: `url(${props.image})`, width: props.id === 1 || props.id === 3 ? '100%' : '80%', height: props.id === 1 || props.id === 3 ? '50%' : '60%' }} />
        <p>
            <p style={{ marginBottom: '20px'}}>{formattedToDate}</p>
            <h1 style={props.id === 1 || props.id === 3 ? { fontFamily:  '"TT Norms", sans-serif', fontSize: '14px'} : {}}>{props.title} {props.id}</h1>
        </p>
    </Link>
};
// font-family: "TT Norms", sans-serif;
//font-size: 14px;
export default NewsCard;