import React from 'react';
import styles from './BuildingsWidget.module.scss';
import {useRecoilValue} from "recoil";

import BuildingsCard from "../BuildingsCard/BuildingsCard";
import {buildings} from "../../../store/buildings/buildings";

const BuildingsWidget = () => {

    const newsData = useRecoilValue(buildings);

    return <div className={styles.wrapper}>
        <div className={styles.header}></div>
        <div className={styles.body}>
            {
                newsData.map((item, i) => <BuildingsCard key={i} id={item.id} title={item.title} page={item.page} image={item.image} addImage={item.addImage} color={item.color} backgroundColor={item.backgroundColor} type={item.type} link={`/building/${item.link}`} />)
            }
        </div>
    </div>
};

export default BuildingsWidget;