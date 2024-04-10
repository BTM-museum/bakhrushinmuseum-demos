import React from "react";
import styles from "./Footer.module.scss";
import ministerstvo from "./static/ministerstvo.svg";
import gosuslugi from "./static/gosuslugi.svg";
import cultura from "./static/cultura.svg";
import yt from "./static/yt.svg";
import rt from "./static/rt.svg";
import vk from "./static/vk.svg";
import tg from "./static/tg.svg";
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {visitors} from "../../store/visitors/visitors";
import {about} from "../../store/about/about";
import {exibitionsAndEvents} from "../../store/exibitionsAndEvents/exibitionsAndEvents";
import {additional} from "../../store/additional/additional";

const Footer = () => {
    const visitorsData = useRecoilValue(visitors);
    const aboutData = useRecoilValue(about);
    const exibitionsAndEventsData = useRecoilValue(exibitionsAndEvents);
    const additionalData = useRecoilValue(additional);

    return <div className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.block}>
                <Link to={visitorsData.link}>{visitorsData.title}</Link>
                {
                    visitorsData && visitorsData.menu && visitorsData.menu.map((item, i) => <Link key={i}
                                                                                                  to={item.link}>{item.title}</Link>)
                }
            </div>

            <div className={styles.block}>
                <Link to={aboutData.link}>{aboutData.title}</Link>
                {
                    aboutData && aboutData.menu && aboutData.menu.map((item, i) => <Link key={i}
                                                                                         to={item.link}>{item.title}</Link>)
                }
            </div>

            <div className={styles.block}>
                <Link to={exibitionsAndEventsData.link}>{exibitionsAndEventsData.title}</Link>
                {
                    exibitionsAndEventsData && exibitionsAndEventsData.menu && exibitionsAndEventsData.menu.map((item, i) =>
                        <Link key={i}
                              to={item.link}>{item.title}</Link>)
                }
            </div>

            <div className={styles.block}>
                <Link to={additionalData.link}>{additionalData.title}</Link>
                {
                    additionalData && additionalData.menu && additionalData.menu.map((item, i) =>
                        <Link key={i}
                              to={item.link}>{item.title}</Link>)
                }
            </div>
        </div>
    </div>
}
export default Footer;
