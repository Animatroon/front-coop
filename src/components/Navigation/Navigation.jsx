import React from 'react'

import './navigation.scss';

import {Navi} from "../Global/Images.jsx";


const Navigation = ({suptitle, title, nav1, nav2}) => {
  return (
    <div className='navigation'>
            <div className="navigation__up">
                <div className="navigation__container">
                    <h2 className="navigation__suptitle">{suptitle}</h2>
                    <h1 className="navigation__title">{title}</h1>
                </div>
            </div>
            <div className="navigation__down">
                <div className="navigation__container">
                    <div className="navigation__down-item">
                        <span>Главная</span> <img src={Navi.nav} alt="" /> <span>{nav1}</span> 
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Navigation
