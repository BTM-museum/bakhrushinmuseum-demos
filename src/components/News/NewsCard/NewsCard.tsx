import styles from './NewsCard.module.scss';
import React from 'react';
import {INew} from "../../../types";
import {Link} from "react-router-dom";


const NewsCard = (props: INew) => {
    return <Link to={props.link} className={styles.wrapper}>
        <img src={props.image} alt={props.title} />
        <h1>{props.title}</h1>
    </Link>
};

export default NewsCard;