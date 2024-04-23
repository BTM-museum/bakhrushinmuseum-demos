import styles from './NewsWidget.module.scss';
import React from 'react';
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {news} from "../../../store/news/news";
import NewsCard from "../NewsCard/NewsCard";

const NewsWidget = () => {
    const newsData = useRecoilValue(news)
    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <h1>Новости</h1>
            <Link to='/news'>Все новости</Link>
        </div>
        <div className={styles.body}>
            {
                newsData.slice(0, Math.ceil(newsData.length / 2)).map((news, index) => <NewsCard key={index} id={news.id} title={news.title} page={news.page}
                                                                                                 date={news.date} image={news.image}
                                                                                                 link={`/news/${news.link}`}/>)
            }
        </div>
        <div className={styles.body}>
            {
                newsData.slice(Math.ceil(newsData.length / 2)).map((news, index) => <NewsCard key={index} id={news.id} title={news.title} page={news.page}
                                                                                                 date={news.date} image={news.image}
                                                                                                 link={`/news/${news.link}`}/>)
            }
        </div>
    </div>
};

export default NewsWidget;