import React, { useState, useEffect } from 'react';
import './docs.scss';
import Navigation from '../../Navigation/Navigation';
import axios from '../../../axios';
import config from '../../../config';
import { useTranslation } from 'react-i18next';

const Items = ({ document }) => {
  const downloadDocument = () => {
    const link = document.createElement('a');
    link.href = document.file;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="docs__item">
      <h3 className="docs__title">{document.title}</h3>
      <span className="docs__subtitle">{document.label}</span>
      <div className="docs__downloads">Документы: <a href={document.file} download>Загрузить</a></div>
    </div>
  );
};

const Docs = () => {

  const { t } = useTranslation();

  const [docData, setDocData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/doc/all/`);
        setDocData(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='docs'>
      <Navigation title={t("docs")} nav2={t("docs")} />
      <div className="box docs__inner">
        <p className="docs__text">{t("docs.text")}</p>
        <div className="docs__content">
          <div className="docs__sidebar">
            <a className='sidebar__title' href="#r">{t("docs.filter1")}</a>
            <div className="sidebar__line"></div>
            <a className='sidebar__title' href="#r">{t("docs.filter2")}</a>
            <div className="sidebar__line"></div>
            <a className='sidebar__title' href="#r">{t("docs.filter3")}</a>
          </div>
          <div className="docs__items">
            {docData.map(document => (
              <Items key={document.id} document={document} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
