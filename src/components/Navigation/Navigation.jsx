import React from 'react';
import './navigation.scss';
import { Navi } from "../Global/Images.jsx";
import { useTranslation } from 'react-i18next';

const Navigation = ({ suptitle, title, nav1, nav2, nav3 }) => {

    const {t} = useTranslation();

    return (
        <div className='navigation'>
            <div className="navigation__container">
                <div className="navigation__up box">
                    <h2 className="navigation__suptitle">{suptitle}</h2>
                    <h1 className="navigation__title">{title}</h1>
                </div>
            </div>

            {nav1 &&
                <div className="navigation__container">
                    <div className="navigation__down box">
                        <span>{nav1}</span>
                    </div>
                </div>
            }

            {nav2 &&
                <div className="navigation__container">
                    <div className="navigation__down box">
                        <span>{t("main")}</span> <img src={Navi.nav} alt="" /> <span>{nav2}</span>
                    </div>
                </div>
            }

            {nav3 &&
                <div className="navigation__container">
                    <div className="navigation__down box">
                        <span>Главная</span> <img src={Navi.nav} alt="" /> <span>{nav2}</span> <img src={Navi.nav} alt="" /> <span>{nav3}</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default Navigation;
