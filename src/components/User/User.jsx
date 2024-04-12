import React from 'react';
import Navigation from "../Navigation/Navigation";


import './user.scss';
import { Personal } from '../Global/Images';
import { Link, Navigate, Route } from 'react-router-dom';


const User = () => {
    return (
        
        <div className='account'>
            <Navigation title={"ЛИЧНЫЙ КАБИНЕТ"} nav1={"ФИО"}/>
            <div className="account__inner box">
                <p className="account__text">Уважаемые правообладатели, данная страница является личным кабинетом. Данная страница может использоваться вами для создания, отслеживания заявок для связи с нами по интересующим вас вопросам</p>

                <div className="account__content">

                    <div className="sidebar">
                        <a className='sidebar__title' href="#e"><img src={Personal.profile} alt="" /> Мой профиль</a>
                        <div className="sidebar__line"></div>
                        <a className='sidebar__title' href="#e"><img src={Personal.reqCreate} alt="" /> Создать новую заявку</a>
                        <div className="sidebar__line"></div>
                        <Link className='sidebar__title' to={'myrequest'}><img src={Personal.reqList} alt="" /> Мои заявки</Link>
                    </div>

                    <div className="account__info">
                        <img src={Personal.profile} alt="profile" className="account__photo" />

                        <div className="account__items">
                            <div className="account__item">
                              <h3 className="account__tag">ФИО:</h3>
                              <h3 className="account__tag">Номер договора:</h3>
                              <h3 className="account__tag">Дата подписания:</h3>
                            </div>
                            <div className="account__item">
                              <p className="account__data">Иван Иванов</p>
                              <p className="account__data">AC-F-229</p>
                              <p className="account__data">22.02.2014</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="account__btns">
                      <button className='pass__reset'>Сбросить пароль</button>
                      <button className='exit'>Выйти</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
