import React from 'react';
import Navigation from "../../Navigation/Navigation";

import { Redirect } from 'react-router-dom';

import './account.scss';
import { Personal } from '../../Global/Images';


const Account = () => {
    return (
        <Redirect to='authorization/auth'>

        <div className='account'>
            <Navigation title={"ЛИЧНЫЙ КАБИНЕТ"} nav1={"ФИО"}/>
            <div className="account__inner box">
                <p className="account__text">Уважаемые правообладатели, данная страница является личным кабинетом. Данная страница может использоваться вами для создания, отслеживания заявок для связи с нами по интересующим вас вопросам</p>

                <div className="account__content">

                    <div className="account__sidebar">
                        <a className='sidebar__title' href="#e"><img src={Personal.profile} alt="" /> Мой профиль</a>
                        <div className="sidebar__line"></div>
                        <a className='sidebar__title' href="#e"><img src={Personal.reqCreate} alt="" /> Создать новую заявку</a>
                        <div className="sidebar__line"></div>
                        <a className='sidebar__title' href="#e"><img src={Personal.reqList} alt="" /> Мои заявки</a>
                    </div>

                    <div className="account__info">
                        <img src={Personal.profile} alt="profile" className="account__photo" />

                        <div className="account__items">
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </Redirect>
    );
}

export default Account;
