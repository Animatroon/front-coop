import React, { useState, useEffect } from 'react';
import './fullnews.scss';
import Navigation from '../../Navigation/Navigation';
import axios from '../../../axios';
import { useParams } from 'react-router-dom';
import config from '../../../config';

const Fullnews = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState();
  const [additionalPhotos, setAdditionalPhotos] = useState([]);



  useEffect(() => {
    axios.get(`/news/news/${id}`)
    .then((res ) => {
      setNewsData(res.data);
    })
    .catch((err) => {
      console.warn(err);
      alert("Ошибка при получении статьи")
    })

    axios.get(`/news/additional_photo/${id}`)
    .then(( res ) => {
      setAdditionalPhotos(res.data);
    })
    .catch((err) => {
      console.warn(err);
      alert("Ошибка при получении фотографии")
    })

  }, [id]);

  return (
    <div className='fullnews'>
      <Navigation title={'Новости'}/>
      {newsData && (
        <div className="fullnews__content">
          <h2>{newsData.title}</h2>
          <img src={`${config.BASE_URL}${newsData.main_photo}`} alt="Main" />
          <p>{newsData.text}</p>
          <div className="additional-photos">
            {additionalPhotos.map((photo, index) => (
              <img key={index} src={`${config.BASE_URL}${photo.photo}`} alt={`Additional ${index}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fullnews;
