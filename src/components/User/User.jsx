import React, { useEffect, useState } from 'react';
import Navigation from "../Navigation/Navigation";
import './user.scss';
import axios from 'axios';
import { Personal } from '../Global/Images';
import isAuth from '../Check/CheckAuth';
import { Link } from 'react-router-dom';

const User = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authenticated = await isAuth();
                if (authenticated) {
                    const response = await axios.get('http://localhost:8000/api/authorization/get/');
                    setUserData(response.data);
                } else {
                    console.log('Пользователь не авторизован');
                }
            } catch (error) {
                console.error('Ошибка при получении данных пользователя:', error);
            }
        };

        fetchData();
    }, []);

    const handleLogout = async () => {
        try {
            document.cookie.split(";").forEach(cookie => {
                const [name] = cookie.split("=");
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            });

            const response = await axios.post('http://localhost:8000/api/authorization/logout/');
            if (response.data.status === 'success') {
                isAuth();
            } else {
                console.error('Ошибка при выходе из учетной записи:', response.data);
            }
            console.log("Все куки удалены успешно");
        } catch (error) {
            console.error('Ошибка при выполнении запроса на выход:', error);
        }
    };

    return (
        <div className='account'>
            <Navigation title={"ЛИЧНЫЙ КАБИНЕТ"} nav1='ФИО' />
            <div className="account__inner box">
                <p className="account__text">Уважаемые правообладатели, данная страница является личным кабинетом. Данная страница может использоваться вами для создания, отслеживания заявок для связи с нами по интересующим вас вопросам</p>

                <div className="account__content">
                    <div className="sidebar">
                        <Link className='sidebar__title' to={'/account'}><img src={Personal.profile} alt="" /> Мой профиль</Link>
                        <div className="sidebar__line"></div>
                        <Link className='sidebar__title' to={'/account/newrequest'}><img src={Personal.reqCreate} alt="" /> Создать новую заявку</Link>
                        <div className="sidebar__line"></div>
                        <Link className='sidebar__title' to={'/account/myrequest'}><img src={Personal.reqList} alt="" /> Мои заявки</Link>
                    </div>

                    <div className="account__info">
                        <img src={Personal.profile} alt="profile" className="account__photo" />

                        <div className="account__items">
                            {userData && (
                                <div className="account__item">
                                    <h3 className="account__tag">ФИО:</h3>
                                    <h3 className="account__tag">Номер договора:</h3>
                                    <h3 className="account__tag">Дата подписания:</h3>
                                </div>
                            )}
                            {userData && (
                                <div className="account__item">
                                    <p className="account__data">{userData.fullname}</p>
                                    <p className="account__data">{userData.contract_number}</p>
                                    <p className="account__data">{userData.date_contract_conclusion}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="account__btns">
                        <button className='pass__reset'>Сбросить пароль</button>
                        <button className='exit' onClick={() => {window.location.reload(); handleLogout();}}><Link to='/'>Выйти</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
