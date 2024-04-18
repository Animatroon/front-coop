import React from 'react';

import Navigation from '../../Navigation/Navigation';
import { Personal } from '../../Global/Images';

import { Link } from 'react-router-dom';

import './addreq.scss';

const AddКeq = () => {
  return (
    <div className='addreq'>
        <Navigation title={"Создать новую завяку"} nav1={"ФИО"}/>
        <div className="addreq__inner box">
            <p className="account__text">Уважаемые правообладатели, данная страница является личным кабинетом. Данная страница может использоваться вами для создания, отслеживания заявок для связи с нами по интересующим вас вопросам</p>


            <div className="addreq__items">

                <div className="sidebar">
                    <Link className='sidebar__title' to={'/account'}><img src={Personal.profile} alt="" /> Мой профиль</Link>
                    <div className="sidebar__line"></div>
                    <Link className='sidebar__title' to={'/account/newrequest'}><img src={Personal.reqCreate} alt="" /> Создать новую заявку</Link>
                    <div className="sidebar__line"></div>
                    <Link className='sidebar__title' to={'/account/myrequest'}><img src={Personal.reqList} alt="" /> Мои заявки</Link>
                </div>

                <div className="addreq__content">
                    <div className="addreq__head">
                        <div className="addreq__item">
                            <h3 className="addreq__title">Категория</h3>
                            <select className='select'>
                                <option disabled selected value="">Выбрать</option>
                                <option value="option1">Бухгалтерия</option>
                                <option value="option2">Прочее</option>
                                <option value="option3">Договор</option>
                            </select>
                        </div>
                        <div className="addreq__item">
                            <h3 className="addreq__title">Тема</h3>
                            <input type="text" className="addreq__input" />
                        </div>
                    </div>
                    <div className="addreq__descr">
                        <h3 className="addreq__title">Описание</h3>
                        <textarea className='addreq__textarea' name="descr" id="descr"></textarea>
                    </div>
                    <button className="addreq__btn">Отправить</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AddКeq;
