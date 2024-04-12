import React from 'react';

import styles from './about.module.scss';

import Navigation from '../../Navigation/Navigation';

const About = () => {
  return (
    <div className={styles.about}>
    <Navigation title={"О компании"} nav1={"О компании"}/>
    
  <div className={`${styles.about__inner} box`}>
      <h1 className={styles.about__title}>Уважаемые правообладатели, на этой странице размещены документы нашей организации: Устав, свидетельства об аккредитации, свидетельство на товарный знак, различные Положения, которые используются в нашей работе, результаты нашей деятельности (отчеты в уполномоченный орган, аудиторские отчеты), шаблоны различных договоров.</h1>
  </div>
    </div>
  )
}

export default About;
