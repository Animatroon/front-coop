import React, { useState } from 'react';
import styles from './login.module.scss';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';
import { Personal } from '../../Global/Images';
import isAuth from '../../Check/CheckAuth';

import { useForm } from 'react-hook-form';


import axios from '../../../axios';
import { useTranslation } from 'react-i18next';

const Login = () => {
  
  const { 
    register, 
    handleSubmit, 
    setError, 
    formState: { errors, isValid},
  } = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    mode: onchange,
  });
  const onSubmit = (values) => {
    console.log(values);
  }
  
  const { t } = useTranslation;
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Предотвращаем стандартное поведение отправки формы
  //   try {
  //     const response = await axios.post('http://localhost:8000/api/authorization/login/', {
  //       username,
  //       password,
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'X-CSRFToken': 'tJoUUrK5Tdx4pbVWhSna9ZYBZQs9v5IfrWfbf3wNdtab7Teetsvq2txAotJAa6V5' // CSRF токен
  //       }
  //     });
  //     const data = response.data;
  //     console.log(data);

  //     // Сохраняем токен в куки под именем 'jwt'
  //     document.cookie = `jwt=${data.token}; expires=${new Date(data.user.exp * 1000).toUTCString()}; path=/`;

  //     // Перенаправляем пользователя на другую страницу или выполняем другие действия после успешного входа
  //   } catch (error) {
  //     console.error('Ошибка при отправке запроса:', error);
  //   }
  // };


  return (
    <div className={styles.login}>
      <Navigation title={"Вход"} nav1={t("form.lebel1")}/>
      <div className={styles.login__inner}>
        <img className={styles.login__profile} src={Personal.profile} alt="login" />
        <form className={`${styles.login__form} was-validated`} onSubmit={handleSubmit(onSubmit)}>
          <input
            required
            placeholder='Логин'
            type="text"
            className={styles.login__username}
            {...register('username', {required: "Укажите логин"})}
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            placeholder='Пароль'
            type="password"
            className={styles.login__password}
            {...register('password', {required: "Укажите пароль"})}

            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.login__btns}>
            <button type="button" className={styles.login__forgot}>Забыли пароль?</button>
            <button type="submit" onClick={() => {isAuth()}} className={styles.login__enter}><Link to='/'>Войти</Link></button>
          </div>
        </form>
        <Link className={styles.login__register} to='/authorization/signup'>Регистрация</Link>
      </div>
    </div>
  )
}

export default Login;
