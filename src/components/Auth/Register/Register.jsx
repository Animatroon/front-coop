import React, { useState } from 'react';

import styles from './register.module.scss';
import { Personal } from '../../Global/Images';

import { Button, ButtonGroup } from 'react-bootstrap';

import Navigation from '../../Navigation/Navigation';

const Registration = () => {
  const [userType, setUserType] = useState('right_owner');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [agreed, setAgreed] = useState(false);

  const handleUserTypeChange = (type) => {
    setUserType(type);
    // Reset form data when user type changes
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAgreementChange = () => {
    setAgreed(!agreed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.register}>
      <Navigation title={"РЕЕСТР ПОЛЬЗОВАТЕЛЕЙ"}/>

      <div className={styles.register__inner}>

      <div className={styles.register__header}>
        
        <img className={styles.register__img} src={Personal.profile} alt="Registration" />
        
        <ButtonGroup className={styles.usertype}>
          <Button onClick={() => handleUserTypeChange('right_owner')} className={userType === 'right_owner' ? styles.active : ''}>Правообладатель</Button>
          <Button onClick={() => handleUserTypeChange('user')} className={userType === 'user' ? styles.active : ''}>Пользователь</Button>
        </ButtonGroup>

        

      </div>



        <form onSubmit={handleSubmit}>
          <div className="input-fields">
            <input
              type="text"
              name="username"
              placeholder={userType === 'right_owner' ? 'Right Owner Username' : 'User Username'}
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="agreement">
            <input
              type="checkbox"
              id="agreement"
              checked={agreed}
              onChange={handleAgreementChange}
            />
            <label htmlFor="agreement">Я согласен на обработку персональных данных </label>
          </div>
          <button className={styles.register__agree} type="submit">Зарегистрироваться</button>
        </form>
      </div>

    </div>
  );
};

export default Registration;
