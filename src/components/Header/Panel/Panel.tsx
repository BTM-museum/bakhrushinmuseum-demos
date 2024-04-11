import styles from './Panel.module.scss';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {IArticle} from "../../../types";
import {Link} from "react-router-dom";

interface Props {
    element: IArticle;
    setElement: Dispatch<SetStateAction<IArticle | undefined>>;
}

function hasNestedMenu(article: IArticle): boolean {
    if (article.menu) {
        for (const subArticle of article.menu) {
            if (subArticle.menu) {
                return true;
            }
        }
    }
    return false;
}

const Panel = ({ element, setElement }: Props) => {
    const [ activeMenu, setActiveMenu ] = useState<IArticle>(element);
    if (hasNestedMenu(element)) {
        return <div className={styles.wrapper} onMouseLeave={() => {setElement(undefined)}}>
            <div className={styles.contentBlock}>
                {
                    element && element.menu && element.menu.map((item, i) => <Link onMouseEnter={() => { setActiveMenu(item) }} to={item.link}>{item.title}</Link>)
                }
            </div>
            <div className={styles.contentBlock}>
                {
                    activeMenu.images[0] !== '' && <img src={activeMenu.images[0]} alt={activeMenu.title} />
                }
                {
                    activeMenu.description
                }
            </div>
        </div>
    } else {
        return <div className={styles.wrapper} onMouseLeave={() => {setElement(undefined)}}>
            <div className={styles.contentBlock}>
                {
                    element && element.menu && element.menu.map((item, i) => <Link onMouseEnter={() => { setActiveMenu(item) }} to={item.link}>{item.title}</Link>)
                }
            </div>
            <div className={styles.contentBlock}>
                {
                    activeMenu.images[0] !== '' && <img src={activeMenu.images[0]} alt={activeMenu.title} />
                }
                {
                    activeMenu.description
                }

            </div>

        </div>
    }

};

export default Panel;