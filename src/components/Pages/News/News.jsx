import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './News.scss';

import Navigation from '../../Navigation/Navigation';
import { New } from '../../Global/Images';

import axios from 'axios';


const Post = ({ postData }) => (
  <div className="post">
    <div className="post__info">
      <img className='post__img' src={`http://127.0.0.1:8000${postData.main_photo}`} alt="post" />
      <div className="post__date">
        18 марта 2023
      </div>
    </div>
    <div className="post__content">
      <h3 className="post__title">{postData.title}</h3>
      <p className="post__text">{postData.text}</p>
      <Link to={`/news/${postData.id}`} className="post__link">Подробнее <img src={New.arrow} alt="" /></Link>
    </div>
  </div>
);

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/news/all/');
        setNewsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='News'>
      <Navigation suptitle={"Последние события"} title={"Новости"} nav1={"Новости"}/>
      <div className="box">
        {newsData.map(post => (
          <Post key={post.id} postData={post} />
        ))}
      </div>
    </div>
  );
};

export default News;