import React, { useState } from 'react';

import Logo from '../../images/logo.png'; 
import burger from '../../images/burger-menu.svg'; 

import { Link, useLocation } from 'react-router-dom';


import './header.scss';

// import { Link } from 'react-router-dom';
// import { ROUTES } from '../../utils/routes';


const Header = () => {

  const [isActive, setActive] = useState(false);
  const [isActiveLink, setLink] = useState(false);
  const [isCatalogHovered, setCatalogHovered] = useState(false);

  const [isLogged, setLogged] = useState(false);

  const location = useLocation();

  return (

    <div className="header">
      <div className="Container">
        <a href="#home" className="header__logo">
          <img src={Logo} alt="" />
        </a>
        <ul className={`nav ${isActive ? "active" : ''}`} >
        <li className={`link ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/">Главная</Link>
          </li>
          <li className={`link ${location.pathname.startsWith('/news') ? 'active' : ''}`}>
              <Link to="news">Новости</Link>
          </li>
          <li className={`link ${location.pathname.startsWith('/catalogs') ? 'active' : ''}`}>
              <Link id='catalog'
              onMouseEnter={() => setCatalogHovered(true)}
              onMouseLeave={() => setCatalogHovered(false)}
              to="catalogs">Каталог</Link>
          </li>
          {isCatalogHovered && ( 
            <div className="catalog__drop"
                  onMouseEnter={() => setCatalogHovered(true)}
                  onMouseLeave={() => setCatalogHovered(false)}>
              <div className="cat__item">
                <Link to="catalogs/poisk_pravoobladateley" className="catalog__link">Каталог правообладателей</Link>
              </div>
              <div className="cat__item">
                <Link to="catalogs/reestr" className="catalog__link">Реестр пользователей</Link>
              </div>

              <div className="cat__item">
                <Link to="catalogs/inostrannye_okupy" className="catalog__link">Иностранные ОКУПы</Link>
              </div>
            </div>
            )}

          <li className={`link ${location.pathname.startsWith('/docs') ? 'active' : ''}`}>
              <Link to="docs">Документы</Link>
          </li>
          <li className={`link ${location.pathname.startsWith('/contacts') ? 'active' : ''}`}>
              <Link to="contacts">Контакты</Link>
          </li>
          <li className={`link ${location.pathname.startsWith('/about') ? 'active' : ''}`}>
              <Link to="about">О компании</Link>
          </li>
        </ul>
        <div className="personal">
          <a className='link' href="#lang">Рус</a>
          <Link to={isLogged ? ('account') : ('authorization/auth')}>
            <button type='button' class="cabinet">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7545 12.0002C14.9966 12.0002 16.0034 13.007 16.0034 14.2491V14.8245C16.0034 15.7188 15.6838 16.5836 15.1023 17.263C13.5329 19.0965 11.1457 20.0013 8.0004 20.0013C4.8545 20.0013 2.46849 19.0962 0.902186 17.2619C0.322416 16.583 0.00390625 15.7195 0.00390625 14.8267V14.2491C0.00390625 13.007 1.01076 12.0002 2.25278 12.0002H13.7545ZM13.7545 13.5002H2.25278C1.83919 13.5002 1.50391 13.8355 1.50391 14.2491V14.8267C1.50391 15.3624 1.69502 15.8805 2.04287 16.2878C3.29618 17.7555 5.26206 18.5013 8.0004 18.5013C10.7387 18.5013 12.7063 17.7555 13.9627 16.2876C14.3117 15.8799 14.5034 15.361 14.5034 14.8245V14.2491C14.5034 13.8355 14.1681 13.5002 13.7545 13.5002ZM8.0004 0.00488281C10.7618 0.00488281 13.0004 2.24346 13.0004 5.00488C13.0004 7.76631 10.7618 10.0049 8.0004 10.0049C5.23894 10.0049 3.00036 7.76631 3.00036 5.00488C3.00036 2.24346 5.23894 0.00488281 8.0004 0.00488281ZM8.0004 1.50488C6.0674 1.50488 4.50036 3.07189 4.50036 5.00488C4.50036 6.93788 6.0674 8.5049 8.0004 8.5049C9.9334 8.5049 11.5004 6.93788 11.5004 5.00488C11.5004 3.07189 9.9334 1.50488 8.0004 1.50488Z" fill="#4174B8"/>
            </svg>
            Личный кабинет</button>

          </Link>
        </div>
    
        <div className={`toggle-btn ${isActive ? "active" : ''}`} onClick={() => {setActive(!isActive)}}><img src={burger} alt="" /></div>
    
      </div>
    </div>
    
    );
  }
  
export default Header;
