import React from 'react';
import Navigation from "../../Navigation/Navigation";

import './contacts.scss';
import { Conts, Main } from '../../Global/Images';
import { Form } from 'react-bootstrap';


const Contacts = () => {
  return (
    <div className='contacts'>
        <Navigation title={"Контакты"} nav1={"Контакты"}/>
        <div className="contacts__inner box">
          <div className="contacts__info">
            <ul className="contacts__items">

              <li className="contacts__item">
                <img src={Conts.conts1} alt="phone" />
                <div className="contacts__content">
                  <h5 className="contacts__title">Номер телефона</h5>
                  <a href="#phone" className="contacts__phone">+7 778 417 7771</a>
                </div>
              </li>
              <li className="contacts__item">
                <img src={Conts.conts2} alt="phone" />
                <div className="contacts__content">
                  <h5 className="contacts__title">Электронная почта</h5>
                  <a href="#phone" className="contacts__email">office@kazcop.kz</a>
                </div>
              </li>
              <li className="contacts__item">
                <img src={Conts.conts3} alt="phone" />
                <div className="contacts__content">
                  <h5 className="contacts__title">Наш адрес</h5>
                  <a href="#phone" className="contacts__addr">г. Алматы, ул. Тулебаева 117, офис 2</a>
                </div>
              </li>
            </ul>
            <img src={Main.map} alt="map" className="contacts__map" />
          </div>
          <div className="contacts__form">
            <h2 className="form__title">Связаться с нами</h2> 
            <div className="form">
              <div className="form__item"><span className='form__text'>Ваше имя*</span><input required className='form__input' type="text" /></div>
              <div className="form__item"><span className='form__text'>Ваше E-mail*</span><input required className='form__input' type="text" /></div>
              <div className="form__item"><span className='form__text'>Ваше имя*</span><input required className='form__input' type="text" /></div>
              <div className="form__item"><span className='form__text'>Сообщение</span><textarea className='form__textarea' name="" id="" cols="30" rows="3"></textarea></div>
              <div className="form__item-comf">

              <div className="g-recaptcha"><img src={Conts.recap} alt="" /></div>
                <Form.Check
                  type="checkbox"
                  id="comfirm"
                  className='check'
                  label="Я согласен на обработку персональных данных"
                />
              </div>
              {/* Капча */}
              <button className='form__btn' type="submit">Отправить</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contacts
