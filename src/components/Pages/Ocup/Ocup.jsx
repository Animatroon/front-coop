import React from 'react';
import Navigation from "../../Navigation/Navigation";

import './ocup.scss';

const ListItem = () => {

    return (
        <li className="list__item">
            <div className="list__content">
                <span className="list__id">№1</span>
                <p className="list__text">Государственная служба интеллектуальной собственности при Правительстве Кыргызской Республики (Кыргызпатент). Кыргызстан.</p>
            </div>
            <div className="list__line"></div>
        </li>
    );
}

const Ocup = () => {



    return (
        <div className="ocup">
            <Navigation suptitle={"НАШИ РЕЕСТРЫ"} title={"ИНОСТРАННЫЕ ОКУПы"} nav1={"Каталог"}/>
            <div className="ocup__inner box">

            <h2 className="ocup__title">КАТАЛОГИ ИНОСТРАННЫХ ОКУПОВ ПЕРЕДАННЫЕ В УПРАВЛЕНИЕ</h2>

            <ul className="ocup__info">
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

