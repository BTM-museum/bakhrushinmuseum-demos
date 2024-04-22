import styles from "./Header.module.scss";
import {useRecoilValue} from "recoil";
import {visitors} from "../../store/visitors/visitors";
import {exibitionsAndEvents} from "../../store/exibitionsAndEvents/exibitionsAndEvents";
import {yourself} from "../../store/yourself/yourself";
import {children} from "../../store/children/children";
import {lab} from "../../store/lab/lab";
import {online} from "../../store/online/online";
import {pro} from "../../store/pro/pro";
import {support} from "../../store/support/support";
import {Link} from "react-router-dom";
import Panel from "./Panel/Panel";
import {useState} from "react";
import {IArticle} from "../../types";

import BMLogoLeft from './assets/BMLogoLeft.svg';
import BMLogoLine from './assets/BMLogoLine.svg';
import BMLogoRight from './assets/BMLogoRight.svg';
import BMText from './assets/BMText.svg';

import eye from './assets/eye.svg';
import search from './assets/search.svg';
import account from './assets/account.svg';

const Header = () => {

    const visitorsData = useRecoilValue(visitors);
    const [ selectedMenu, setSelectedMenu ] = useState<IArticle | undefined>(undefined)

    const exibitionsAndEventsData = useRecoilValue(exibitionsAndEvents);
    const yourdelfData= useRecoilValue(yourself);
    const childrenData = useRecoilValue(children);
    const labData = useRecoilValue(lab);
    const onlineData = useRecoilValue(online);
    const proData = useRecoilValue(pro);
    const supportData = useRecoilValue(support);

    return <>
        <header className={styles.wrapper}>
            <div className={styles.top}>
                <Link to={'/'} className={styles.logo}>
                    <img src={BMLogoLeft} alt="BMLogoLeft" />
                    <img src={BMLogoLine} alt="BMLogoLine" />
                    <img src={BMLogoRight} alt="BMLogoRight" />
                    <img src={BMText} alt="BMText" />
                </Link>
                <div className={styles.btnGroup}>
                    <button className={styles.store}>{'Магазин'}</button>
                    <button className={styles.ticket}>{'Купить билет'}</button>
                    <img src={eye} alt="Eye" className={styles.icon}/>
                    <img src={search} alt="Eye" className={styles.icon}/>
                    <img src={account} alt="Eye" className={styles.icon}/>
                    <div>
                        <button className={styles.lang}>{'РУ'}</button>
                        {/*<button className={styles.lang}>{'Eng'}</button>*/}
                    </div>
                </div>
            </div>
            <div className={styles.menu}>
                {visitorsData && <Link onMouseEnter={() => { setSelectedMenu(visitorsData) }} to={visitorsData.link}>{visitorsData.title}</Link>}
                {exibitionsAndEventsData && <Link onMouseEnter={() => { setSelectedMenu(exibitionsAndEventsData) }} to={exibitionsAndEventsData.link}>{exibitionsAndEventsData.title}</Link>}
                {yourdelfData && <Link onMouseEnter={() => { setSelectedMenu(yourdelfData) }} to={yourdelfData.link}>{yourdelfData.title}</Link>}
                {childrenData && <Link onMouseEnter={() => { setSelectedMenu(childrenData) }} to={childrenData.link}>{childrenData.title}</Link>}
                {labData && <Link onMouseEnter={() => { setSelectedMenu(labData) }} to={labData.link}>{labData.title}</Link>}
                {onlineData && <Link onMouseEnter={() => { setSelectedMenu(onlineData) }} to={onlineData.link}>{onlineData.title}</Link>}
                {proData && <Link onMouseEnter={() => { setSelectedMenu(proData) }} to={proData.link}>{proData.title}</Link>}
                {supportData && <Link onMouseEnter={() => { setSelectedMenu(supportData) }} to={supportData.link}>{supportData.title}</Link>}
            </div>
        </header>
        {
            selectedMenu && selectedMenu.menu && <Panel element={selectedMenu} setElement={setSelectedMenu}/>
        }
    </>
};

export default Header;