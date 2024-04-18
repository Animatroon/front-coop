import React from 'react';
import './footer.scss'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Main } from '../Global/Images';

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid className='pt-5 footer__container'>
        <div className='footer__items'>
          <div className='footer__item footer__item-1'>
            <h3 className="footer__title">РОО “Казахстанское Общество правообладателей”</h3>
            <p className="footer__text">Республиканское общественное объединение "Казахстанское Общество Правообладателей" является организацией по управлению имущественными правами авторов и обладателей смежных прав на коллективной основе.</p>
            <div className="copyright">© 2024</div>
          </div>
          <div className='footer__item footer__item-2'>
            <ul className="footer__links">
              <li className="footer__link"><a href="">Главная</a></li>
              <li className="footer__link"><a href="">Новости</a></li>
              <li className="footer__link"><a href="">Контакты</a></li>
              <li className="footer__link"><a href="">О компании</a></li>
            </ul>

            <ul className="footer__links">
              <li className="footer__link"><a href="">Каталог</a></li>
              <li className="footer__link"><a href="">Поиск правообладателей</a></li>
              <li className="footer__link"><a href="">Реестр пользователей</a></li>
              <li className="footer__link"><a href="">Иностранные ОКУПы</a></li>
            </ul>

            <ul className="footer__links">
              <li className="footer__link"><a href="">Аккредитация</a></li>
              <li className="footer__link"><a href="">Документы</a></li>
              <li className="footer__link"><a href="">Реквизиты</a></li>
              <li className="footer__link"><a href="">Партнеры</a></li>
            </ul>
          </div>
        </div>
        <Row className='footer__contacts mx-auto'>
          <Col className='footer__contacts-item'>
          <div className="footer__link link-map">
            <div className="footer__link-con">
              <img src={Main.cont1} alt="" />
            </div>
            <a href="mailto:office@kazcop.kz">office@kazcop.kz</a>

          </div>
          </Col>
          <Col className='footer__contacts-item'>
          <div className="footer__link link-map">
            <div className="footer__link-con">
              <img src={Main.cont2} alt="" />
            </div>
            <a href="tel:+77784177771">+7 778 417 7771</a>
          </div>
          </Col>
          <Col className='footer__contacts-item'>
          <div className="footer__link link-map">
            <div className="footer__link-con">
              <img src={Main.cont3} alt="" />
            </div>
            <a href="https://go.2gis.com/eqiq9">г. Алматы, ул. Тулебаева 117, офис 2</a>
          </div>
          </Col>

            {/* <ul className="footer__links">
                <li >
                <div className="contacts__link-con">
                  <img src={Main.cont1} alt="" />
                </div>
                <a href="office@kazcop.kz">office@kazcop.kz</a>
                </li>

                <li className="contacts__link">
                <div className="contacts__link-con">
                  <img src={Main.cont2} alt="" />
                </div>
                <a href="office@kazcop.kz">+7 778 417 7771</a>
                </li>

                <li className="contacts__link">
                <div className="contacts__link-con">
                  <img src={Main.cont3} alt="" />
                </div>
                <a href="office@kazcop.kz">г. Алматы, ул. Тулебаева 117, офис 2</a>
                </li>
              </ul> */}
        </Row>
      </Container> 

    </div>
  )
}

export default Footer
