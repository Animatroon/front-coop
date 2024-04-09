import React, { useState, useEffect } from 'react';
import './fullnews.scss';
import Navigation from '../../Navigation/Navigation';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Fullnews = () => {
  const { id } = useParams(); // Используем хук useParams для получения параметра из URL
  const [newsData, setNewsData] = useState(null);
  const [additionalPhotos, setAdditionalPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsResponse = await axios.get(`http://127.0.0.1:8000/api/news/news/${id}/`);
        setNewsData(newsResponse.data);

        const additionalPhotosResponse = await axios.get(`http://127.0.0.1:8000/api/news/additional_photo/${id}/`);
        setAdditionalPhotos(additionalPhotosResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]); // Указываем id в качестве зависимости

  return (
    <div className='fullnews'>
      <Navigation title={'Новости'}/>
      {newsData && (
        <div className="fullnews__content">
          <h2>{newsData.title}</h2>
          <img src={`http://127.0.0.1:8000${newsData.main_photo}`} alt="Main" />
          <p>{newsData.text}</p>
          <div className="additional-photos">
            {additionalPhotos.map((photo, index) => (
              <img key={index} src={`http://127.0.0.1:8000${photo.photo}`} alt={`Additional ${index}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fullnews;
