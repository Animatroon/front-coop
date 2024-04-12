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

// Ваш Login компонент с использованием Redux
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../../store/slices/userSlice'; // импортируем action creator

// const Login = () => {
//   const dispatch = useDispatch();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/authorization/login/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();
//       // После успешного входа, сохраняем данные пользователя в store
//       dispatch(setUser(data.user));
//       console.log("успашно сработало")
//       // Здесь вы можете реализовать переход на другую страницу, если это необходимо
//     } catch (error) {
//       console.error('Ошибка входа:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <input type="text" placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)} />
//         <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Войти</button>
//       </form>
//     </div>
//   );
// };

// export default Login;





