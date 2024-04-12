import React from 'react';
import Navigation from "../../Navigation/Navigation";

import styles from'./ocup.module.scss';

const ListItem = () => {

    return (
        <li className={styles.list__item}>
            <div className={styles.list__content}>
                <span className={styles.list__id}>№1</span>
                <p className={styles.list__text}>Государственная служба интеллектуальной собственности при Правительстве Кыргызской Республики (Кыргызпатент). Кыргызстан.</p>
            </div>
            <div className={styles.list__line}></div>
        </li>
    );
}

const Ocup = () => {



    return (
        <div className={styles.ocup}>
            <Navigation suptitle={"НАШИ РЕЕСТРЫ"} title={"ИНОСТРАННЫЕ ОКУПы"} nav1={"Каталог"}/>
            <div className={`${styles.ocup__inner} box`}>

            <h2 className={styles.ocup__title}>КАТАЛОГИ ИНОСТРАННЫХ ОКУПОВ ПЕРЕДАННЫЕ В УПРАВЛЕНИЕ</h2>

            <ul className={styles.ocup__info}>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </ul>
            </div>
        </div>
    );
}

export default Ocup;

