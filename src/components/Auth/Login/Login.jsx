import React from 'react';

import styles from './login.module.scss';

import { Link } from 'react-router-dom';

import Navigation from '../../Navigation/Navigation';
import { Personal } from '../../Global/Images';

const Login = () => {
  return (
    <div className={styles.login}>
      <Navigation title={"Вход"}/>
      <div className={styles.login__inner}>
        <img className={styles.login__profile} src={Personal.profile} alt="login" />
        <form className={styles.login__form}>
            <input required placeholder='Логин' type="text" className={styles.login__username}/>
            <input required placeholder='Пароль' type="password" className={styles.login__password}/>
            <div className={styles.login__btns}>
                <button className={styles.login__forgot}>Забыли пароль?</button>
                <button className={styles.login__enter}>Войти</button>
            </div>
        </form>

            <Link className={styles.login__register} to='/authorization/signup'>Регистрация</Link>
      </div>
    </div>
  )
}

export default Login
