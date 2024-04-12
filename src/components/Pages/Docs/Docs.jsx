import React from 'react';
import './docs.scss';
import Navigation from '../../Navigation/Navigation';

const Items = ({title, subtitle}) => {
  return (
    <div className="docs__item">
      <h3 className="docs__title"><a href="#4">{title}</a></h3>
      <span className="docs__subtitle">{subtitle}</span>
      <div className="docs__downloads">Документы: <a href='#t'>загрузить</a></div>
    </div>
  )
}

const Docs = () => {
  return (
    <div className='docs'>
      <Navigation title={"Документы"} nav1={"Документы"}/>
      <div className=" box docs__inner">
        <p className="docs__text">Уважаемые правообладатели, на этой странице размещены документы нашей организации: Устав, свидетельства об аккредитации, свидетельство на товарный знак, различные Положения, которые используются в нашей работе, результаты нашей деятельности (отчеты в уполномоченный орган, аудиторские отчеты), шаблоны различных договоров.</p>
        <div className="docs__content">
          <div className="docs__sidebar">
            <a className='sidebar__title' href="">Документы организации</a>
            <div className="sidebar__line"></div>
            <a className='sidebar__title' href="">Результаты деятельности организации</a>
            <div className="sidebar__line"></div>
            <a className='sidebar__title' href="">Шаблоны договоров</a>
          </div>
          <div className="docs__items">
            <Items title={"УСТАВ АМАНАТ"} subtitle={'(Утвержден на повторном Общем собрании 17 июля 2023 года)'}/>
            <Items title={"Справка о государственной регистрации юридического лица"} subtitle={'Справка о государственной регистрации юридического лица'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Docs
