import React from 'react';
import Navigation from "../../Navigation/Navigation";

import './catalog.scss';

const Catalog = () => {
  return (
    <div className='catalog'>
        <Navigation suptitle={"НАШИ РЕЕСТРЫ"} title={"Каталог"} nav1={"Каталог"}/>
        <div className="box catalog__inner">
          <div className="catalog__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet lorem id dignissim blandit. Etiam placerat in dui sed malesuada. Pellentesque semper velit lacinia auctor rhoncus. Sed faucibus interdum interdum. Suspendisse finibus venenatis ligula, a mattis mauris. Proin a tristique quam. Quisque mollis vestibulum libero, vitae pulvinar mi ultricies at. Donec dapibus aliquet orci. Donec aliquam nisi sit amet mattis auctor. Integer et mi dictum, dignissim quam ac, consectetur velit. Proin facilisis tortor ut urna vehicula lobortis. Morbi a semper risus. Proin tincidunt dictum justo vel rutrum. Quisque viverra magna id mauris varius, non porta est tempus.
          </div>
          <div className='catalog__content'>
              <a href='#r' className="catalog__item">
                Каталог <br /> правообладателей
              </a>
              <a href='#r' className="catalog__item">
              Реестр <br /> пользователей
              </a>
              <a href='#r' className="catalog__item">
              Поиск <br /> правообладателей
              </a>
              <a href='#r' className="catalog__item">
              Иностранные <br /> ОКУПы
              </a>
          </div>
        </div>
    </div>
  )
}

export default Catalog
