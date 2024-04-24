import styles from './Panel.module.scss';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {IArticle} from "../../../types";
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion'

interface Props {
    element: IArticle;
    setElement: Dispatch<SetStateAction<IArticle | undefined>>;
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}


const Panel = ({element, setElement, show, setShow}: Props) => {
    const [activeMenu, setActiveMenu] = useState<IArticle>(element);
    useEffect(() => {
        setActiveMenu(element);
    }, [element]);

        if (show) {
            return  <motion.div
                initial={{opacity: 0, height: '5%'}}
                animate={{opacity: 1, height: 'fit-content', justifyContent: 'center'}}
                exit={{opacity: 0, height: '5%'}}
                className={styles.wrapper}
                onMouseLeave={() => {
                setElement(undefined);
            }}>
                <div className={styles.contentBlock}>
                    {

                        element && element.menu && element.menu.slice(0, Math.ceil(element.menu.length / 2)).map((item, i) =>
                            <Link onMouseEnter={() => {
                                setActiveMenu(item);
                            }} to={item.link} style={activeMenu.title === item.title ? {
                                background: '#9D2135',
                                color: 'white'
                            } : {background: '', color: '#52565A'}}>{item.title}</Link>)
                    }
                </div>
                <div className={styles.contentBlock}>
                    {

                        element && element.menu && element.menu.slice(Math.ceil(element.menu.length / 2)).map((item, i) =>
                            <Link onMouseEnter={() => {
                                setActiveMenu(item);
                            }} style={activeMenu.title === item.title ? {
                                background: '#9D2135',
                                color: 'white'
                            } : {background: '', color: '#52565A'}} to={item.link}>{item.title}</Link>)
                    }
                </div>
                <div className={styles.contentBlock}>
                    <div className={styles.text}>
                        <h1>
                            {
                                activeMenu.title
                            }
                        </h1>
                        <p>
                            {
                                activeMenu.description
                            }
                        </p>
                        <button>Узнать подробнее</button>

                    </div>
                    <div className={styles.images}>
                        {activeMenu.images[0] && (
                            <motion.img
                                key={activeMenu.id}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.9}}
                                src={activeMenu.images[0]}
                                alt={activeMenu.title}
                            />
                        )}
                    </div>


                </div>
            </motion.div>
        } else {
            return <></>
        }


};

export default Panel;